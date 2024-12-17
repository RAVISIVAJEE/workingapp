import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useState, useRef } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';

export default function MediaHandler() {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [isRecording, setIsRecording] = useState(false);
  const cameraRef = useRef<any>(null);

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.permissionContainer}>
        <Text style={styles.permissionMessage}>
          We need your permission to access the camera.
        </Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === 'back' ? 'front' : 'back'));
  }

  const capturePhoto = async () => {
  
    
    if (cameraRef.current) {
      
      const photo = await cameraRef.current.takePhoto();
      console.log("clicked on",photo.uri)
      Alert.alert('Photo Captured', JSON.stringify(photo.uri));
      // Handle the captured photo (e.g., save it or display it)
    }
  };

  const recordVideo = async () => {
    if (cameraRef.current) {
      if (isRecording) {
        await cameraRef.current.stopRecording();
        setIsRecording(false);
        Alert.alert('Recording Stopped');
      } else {
        setIsRecording(true);
        const video = await cameraRef.current.recordVideo();
        Alert.alert('Video Captured', JSON.stringify(video.uri));
        // Handle the captured video (e.g., save it or display it)
      }
    }
  };

  return (
    <View style={styles.container}>
      <CameraView
        ref={cameraRef}
        style={styles.camera}
        facing={facing}
        photo={true}
        video={true}
      >
        <View style={styles.controls}>
          {/* Flip Camera Button */}
          <TouchableOpacity style={styles.flipButton} onPress={toggleCameraFacing}>
            <Text style={styles.flipText}>↺</Text>
          </TouchableOpacity>

          {/* Shutter Button */}
          <TouchableOpacity
            style={styles.shutterButton}
            onPress={capturePhoto}
          >
            <View
              style={[
                styles.shutterInner,
                isRecording && { backgroundColor: 'red' },
              ]}
            />
          </TouchableOpacity>

          {/* Video Recording Toggle */}
          <TouchableOpacity style={styles.videoButton} onPress={recordVideo}>
            <Text style={styles.videoText}>
              {isRecording ? 'Stop' : 'Record'}
            </Text>
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  permissionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  permissionMessage: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 16,
  },
  camera: {
    flex: 1,
  },
  controls: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  flipButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: 10,
    borderRadius: 50,
  },
  flipText: {
    color: 'white',
    fontSize: 20,
  },
  shutterButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  shutterInner: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'black',
  },
  videoButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: 10,
    borderRadius: 50,
  },
  videoText: {
    color: 'white',
    fontSize: 16,
  },
});
