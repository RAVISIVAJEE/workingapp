import { View, Text, Pressable, StyleSheet, Image,ImageSourcePropType } from "react-native";
import React from "react";
import Profile from "../assets/images/p1.jpg"
import { useRouter } from "expo-router";
interface SingleRequestProps {
    username: string; // The username of the request creator
    profile: ImageSourcePropType; // URL or path to the profile image
    des: string; // Description of the request
    location: string; // Location related to the request
    media: string[]; // Array of media URLs or paths
    emergencytype: string; // Type of emergency (e.g., medical, fire, etc.)
    moneyoffered: number; // Amount of money offered
    keywords: string[]; // Array of keywords related to the request
  }
  
const SingleRequest:React.FC<SingleRequestProps> = (props) => {
  const router = useRouter();
  const item = { ...props };
  return (
    <Pressable
      style={styles.requestContainer}
      onPress={() =>
        router.push({
          pathname: "AllRequestsScreens/Single_Request_Screen",
          params: item,
        })
      }
    >
      <View style={styles.userDetails}>
        <Image source={Profile} style={styles.profileImage} />
        <Text style={styles.username}>{props.username}</Text>
      </View>
      <View style={styles.requestDetails}>
        <Image source={Profile} style={styles.mediaImage} />
        <Text style={styles.requestTitle}>{props.emergencytype}</Text>
        <Text style={styles.requestDescription}>
          {props.des.split(" ").slice(0, 20).join(" ")}
          {props.des.split(" ").length > 20 ? "..." : ""}
        </Text>
        <Text style={styles.moneyOffered}>{props.moneyoffered}</Text>
        <Text style={styles.keywords}>{props.keywords.join(", ")}</Text>
      </View>
      <View style={styles.actionSection}>
        <Pressable style={styles.helpButton}>
          <Text style={styles.buttonText}>Help</Text>
        </Pressable>
        <Pressable style={styles.ignoreButton}>
          <Text style={styles.buttonText}>Ignore</Text>
        </Pressable>
        <Text style={styles.distance}>24 km</Text>
      </View>
    </Pressable>
  );
};

export default SingleRequest;

const styles = StyleSheet.create({
  requestContainer: {
    flexDirection: "column",
    backgroundColor: "#fff",
    marginVertical: 10,
    padding: 15,
    borderRadius: 8,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  userDetails: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
    overflow: "hidden",
    resizeMode: "cover",
  },
  username: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#333",
  },
  requestDetails: {
    marginVertical: 10,
  },
  mediaImage: {
    width: "100%",
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
  },
  requestTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 5,
  },
  requestDescription: {
    fontSize: 14,
    color: "#666",
    marginBottom: 10,
  },
  moneyOffered: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#28a745",
    marginBottom: 5,
  },
  keywords: {
    fontSize: 12,
    color: "#555",
  },
  actionSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
  },
  helpButton: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  ignoreButton: {
    backgroundColor: "#dc3545",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  distance: {
    fontSize: 12,
    color: "#888",
  },
});
