import React, { useState } from 'react';
import { Modal, ScrollView, StyleSheet, TextInput, View } from 'react-native';
import CustomText from '@/components/CustomText';
import { FontAwesome } from '@expo/vector-icons';
import CustomButton from '@/components/CustomButton';
import { FAB, Overlay } from 'react-native-elements';
import MediaHandler from '@/components/MediaHandler';

const categories = {
  "Home Services": ["home", "#007BFF"], // Blue for Home Services
  "Child Care & Education": ["graduation-cap", "#FFC107"], // Yellow for Education
  "Tech Support": ["laptop", "#6C757D"], // Gray for Tech Support
  "Event & Creative": ["camera", "#DC3545"], // Red for Event Assistance
  "Fitness & Lifestyle": ["heartbeat", "#28A745"], // Green for Fitness
  "Transportation": ["car", "#FF5733"], // Cyan for Transportation
  "Health Services": ["stethoscope", "#17A2B8"], // Orange for Health
  "Emergency Help": ["exclamation-triangle", "#C82333"], // Dark Red for Emergency
  "Delivery": ["box", "#6610F2"], // Purple for Delivery
};

const NewRequest: React.FC = () => {
  const [selectedAssistance, setSelectedAssistance] = useState<string>();
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };
  const handleMediaCaptured = (media: string) => {
    console.log('Captured Media:', media);
    setVisible(false); // Close the modal
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.maincontainer}>
        <View style={styles.header}>
          <CustomText styling={styles.headertext} fontFamily="" fontSize={30}>
            Help Request
          </CustomText>
        </View>

        <View style={styles.description}>
          <TextInput
            placeholder="Enter description here..."
            style={styles.input}
            multiline
          />
        </View>

        <View style={styles.emergencytype}>
          <CustomText styling={styles.subheadertext} fontFamily="" fontSize={18}>
            Emergency Type:
          </CustomText>

          <View style={styles.categories}>
            {Object.entries(categories).map(([category, [icon, color]]) => (
              <CustomButton
                key={category}
                handlePress={() => setSelectedAssistance(category)}
                buttonStyle={[
                  styles.iconcontainer,
                  selectedAssistance === category ? styles.selectedIcon : {},
                ]}
              >
                <FontAwesome size={28} name={icon} color={color} />
                <CustomText fontFamily="" fontSize={12} styling={styles.iconText}>
                  {category}
                </CustomText>
              </CustomButton>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Floating Action Button */}
      <View style={styles.fabContainer}>
        <CustomButton
          handlePress={toggleOverlay}
          buttonStyle={styles.fabButton}
        >
          <FontAwesome name="camera" size={20} color="white" />
        </CustomButton>
      </View>

      {/* Overlay */}
      <Modal
        visible={visible}
        onRequestClose={toggleOverlay}
        animationType="fade"
      >
       <MediaHandler onMediaCaptured={handleMediaCaptured} />

      </Modal>
    </View>
  );
};

export default NewRequest;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  maincontainer: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flex: 0.15,
    alignItems: 'center',
    marginBottom: 20,
  },
  headertext: {
    color: 'black',
    fontWeight: '900',
  },
  description: {
    flex: 0.5,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  input: {
    fontSize: 16,
    color: '#333',
    textAlignVertical: 'top',
    flex: 1,
  },
  emergencytype: {
    flex: 0.35,
    marginBottom: 20,
  },
  subheadertext: {
    marginBottom: 10,
    fontWeight: '600',
    color: '#333',
  },
  categories: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  iconcontainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 25,
    padding: 15,
    width: '30%',
    marginBottom: 15,
  },
  selectedIcon: {
    backgroundColor: '#e0e0e0',
    borderColor: '#bbb',
  },
  iconText: {
    marginTop: 5,
    textAlign: 'center',
  },
  overlay: {
    width: '90%',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  overlayText: {
    color: '#333',
    fontWeight: '600',
  },
  fabContainer: {
    position: 'absolute',
    bottom: '10%',
    right: '40%',
    zIndex: 1000, // Ensure it appears above other elements
  },
  fabButton: {
    backgroundColor: '#000',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, // Add shadow on Android
    shadowColor: '#000', // Add shadow on iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
});
