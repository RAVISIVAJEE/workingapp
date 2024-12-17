import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import CustomButton from "@/components/CustomButton";
import CustomText from "@/components/CustomText";
import { useRouter } from "expo-router";
const Registration:React.FC= () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("Normal");

  const handleRegister = () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fields");
    } else {
      Alert.alert("Success", `Registered as ${userType}. Email: ${email}`);
      // Add your registration logic here
    }
  };

  return (
    <View style={styles.container}>
      <CustomText styling={styles.title} fontFamily="" fontSize={20}>Create an Account</CustomText>
      <CustomText styling={styles.subtitle}fontFamily="" fontSize={20}>Sign up to get started</CustomText>

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        placeholderTextColor="#666"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#666"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
      />

      {/* User Type Picker */}
      <View style={styles.pickerContainer}>
        <CustomText styling={styles.pickerLabel} fontFamily="" fontSize={20}>Select User Type:</CustomText>
        <CustomButton 
    buttonStyle={[
      styles.registerButton, 
      userType === "Normal" ? { backgroundColor: 'skyblue' } : {} 
    ]}
    handlePress={() => setUserType("Normal")}
  >
    Normal
  </CustomButton>
      <CustomButton buttonStyle={[
      styles.registerButton, 
      userType === "Action" ? { backgroundColor: 'skyblue' } : {} 
    ]} handlePress={()=>setUserType("Action")}>Action</CustomButton>
      </View>

      {/* Register Button */}
      <CustomButton buttonStyle={styles.registerButton} handlePress={handleRegister}>
        <Text style={styles.registerButtonText}>Register</Text>
      </CustomButton>

      {/* Login Link */}
      <View style={styles.loginContainer}>
        <CustomText styling={styles.loginText} fontFamily="" fontSize={20}>Already have an account?</CustomText>
        <CustomButton handlePress={() => router.push("/authentication/Login")}>
          <CustomText styling={styles.loginLink} fontFamily="" fontSize={10}> Login</CustomText>
        </CustomButton>
      </View>
    </View>
  );
};

export default Registration;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 30,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 15,
    marginVertical: 10,
    fontSize: 16,
    borderColor: "#ddd",
    borderWidth: 1,
  },
  pickerContainer: {
    width: "100%",
    marginVertical: 20,
  },
  pickerLabel: {
    fontSize: 16,
    color: "#333",
    marginBottom: 5,
  },
  picker: {
    width: "100%",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 8,
    borderColor: "#ddd",
    borderWidth: 1,
  },
  registerButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#007AFF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginVertical: 20,
  },
  registerButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  loginContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  loginText: {
    fontSize: 14,
    color: "#666",
  },
  loginLink: {
    fontSize: 14,
    color: "#007AFF",
    fontWeight: "bold",
  },
});
