import React from 'react';
import { Text, StyleSheet, TouchableOpacity, TextStyle, ViewStyle } from 'react-native';

// Define props for the component
interface CustomButtonProps {
  children: React.ReactNode | string;  // The content of the button, which can be a string or any React node
  handlePress: () => void;  // The press handler function, should be a function that returns void
  buttonStyle?: ViewStyle | ViewStyle[];  // Optional style for the button container
  textStyle?: TextStyle;    // Optional style for the text inside the button
}

// Functional component definition
const CustomButton: React.FC<CustomButtonProps> = ({ children, handlePress, buttonStyle, textStyle }) => {
  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={handlePress}>
      {typeof children === 'string' ? (
        <Text style={[styles.buttonText, textStyle]}>{children}</Text>  // Apply textStyle if passed
      ) : (
        children  // If children is not a string, render it as is
      )}
    </TouchableOpacity>
  );
};

// Define some basic styles
const styles = StyleSheet.create({
  button: {
    
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default CustomButton;
