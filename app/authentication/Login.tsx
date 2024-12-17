import React, { useState } from "react";
import CustomButton from "@/components/CustomButton";
import CustomText from "@/components/CustomText";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import {resetNavigate} from "@/utils/navigationUtils";

const Login:React.FC= () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fields");
    } else {
        resetNavigate( router, "/(tabs)/AllRequests" );
    }
  };

  return (
    <View style={styles.container}>
      <CustomText styling={styles.title} fontFamily="" fontSize={20}>Welcome Back!</CustomText>
      <CustomText styling={styles.subtitle} fontFamily="" fontSize={20}>Login to continue</CustomText>

      <TextInput
        style={styles.input}
        placeholder="Email Address"
        placeholderTextColor="#666"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#666"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
      />

      <TouchableOpacity
        style={styles.forgotPasswordButton}
        onPress={() => Alert.alert("Forgot Password?", "Reset Password Flow")}
      >
        <CustomText styling={styles.forgotPasswordText} fontFamily="" fontSize={20}>Forgot Password?</CustomText>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <CustomText styling={styles.loginButtonText} fontFamily="" fontSize={20}>Login</CustomText>
      </TouchableOpacity>

      <View style={styles.registerContainer}>
        <CustomText styling={styles.registerText} fontFamily="" fontSize={20}>Don't have an account?</CustomText>
        <CustomButton
          handlePress={() => router.replace("/authentication/Registration")}
        >
          <CustomText styling={styles.registerLink} fontFamily="" fontSize={20}> Sign Up</CustomText>
        </CustomButton>
      </View>
    </View>
  );
};

export default Login;

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
  forgotPasswordButton: {
    alignSelf: "flex-end",
    marginVertical: 5,
  },
  forgotPasswordText: {
    color: "#007AFF",
    fontSize: 14,
  },
  loginButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#007AFF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginVertical: 20,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  registerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  registerText: {
    fontSize: 14,
    color: "#666",
  },
  registerLink: {
    fontSize: 14,
    color: "#007AFF",
    fontWeight: "bold",
  },
});
