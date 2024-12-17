import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import CustomText from "@/components/CustomText";
import CustomButton from "@/components/CustomButton";
const Index = () => {
  const router = useRouter();
  return (
    <View style={styles.maincontainer}>
      <View style={styles.heading}>
        <CustomText styling={styles.headingtext}  fontFamily={""} fontSize={60}>Welcome</CustomText>
      </View>
      <View style={styles.background}>
      </View>
      <View style={styles.options}>
        <CustomButton
          buttonStyle={styles.button}
          handlePress={() => router.push("/authentication/Login")}
        >
          <CustomText styling={styles.buttontext} fontFamily={""} fontSize={20}>Login</CustomText>
        </CustomButton>
        <CustomButton
          buttonStyle={styles.button}
          handlePress={() => router.push("/authentication/Registration")}
        >
          <CustomText styling={styles.buttontext} fontFamily={""} fontSize={20}>SignUp</CustomText>
        </CustomButton>
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  maincontainer: {
    flexDirection: "column",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3f9399",
  },
  heading: {
    justifyContent: "center",
    alignItems: "center",
  },
  headingtext: {
    fontFamily: "Roboto Light",
    fontSize: 48, // Large font size
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.25)", // Adds shadow
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    letterSpacing: 2, // Adds space between letters
    textAlign: "center",
  },
  background: {
    flex: 3,
    width: "100%",
    height: "100%",
  },
  options: {
    bottom: 20,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 40,
    elevation: 3,
    backgroundColor: "black",
    margin: 20,
  },
  buttontext: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
