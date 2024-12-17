import React from 'react';
import { Text, StyleSheet, TextStyle, ViewStyle } from 'react-native';

// Define props for the component
interface CustomTextProps {
  children: String;  // For the children prop, use React.ReactNode
  styling?: TextStyle; // TextStyle for text components
  fontFamily: string;  // Prop for font family
  fontSize: number;    // Prop for font size
}

// Functional component definition
const CustomText: React.FC<CustomTextProps> = ({ children, styling, fontFamily, fontSize }) => {
  return (
    <Text style={[styling, { fontFamily, fontSize }]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  // Example style if you want to add a default one
  defaultTextStyle: {
    // color: 'black', // Default text color
  },
});

export default CustomText;
