import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import MapView, { Marker, UrlTile } from "react-native-maps";
import { useRoute } from "@react-navigation/native";

const Single_request_screen = () => {
  const route = useRoute();
  const params = route.params;

  if (!params) {
    return (
      <View style={styles.container}>
        <Text>No params found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: params.profile }} style={styles.profileImage} />
        <Image source={{ uri: params.media }} style={styles.mediaImage} />
      </View>
      <View style={styles.detailsSection}>
        <Text style={styles.emergencytype}>{params.emergencytype}</Text>
        <Text style={styles.description}>{params.des}</Text>
        <Text style={styles.moneyOffered}>{`$${params.moneyoffered}`}</Text>
      </View>
       {/* <MapView
        style={styles.map}
        initialRegion={{
          latitude: parseFloat(params.location.lat),
          longitude: parseFloat(params.location.long),
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      > */}
        {/* OpenStreetMap Tile Layer */}
        {/* <UrlTile
          urlTemplate="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          maximumZ={19}
          subdomains={["a", "b", "c"]}
        /> */}
        {/* Marker */}
        {/* <Marker
          coordinate={{
            latitude: parseFloat(params.location.lat),
            longitude: parseFloat(params.location.long),
          }}
          title={params.username}
          description={params.des}
        /> */}
      {/* </MapView> */} 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 15,
  },
  mediaImage: {
    width: "60%",
    height: 100,
    borderRadius: 8,
  },
  detailsSection: {
    padding: 15,
  },
  emergencytype: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#555",
    marginBottom: 10,
  },
  moneyOffered: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#28a745",
    marginBottom: 10,
  },
  map: {
    flex: 1,
    marginTop: 10,
  },
});

export default Single_request_screen;
