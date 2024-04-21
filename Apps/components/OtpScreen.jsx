import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Button from "./Button"; // Assuming Button is a custom component
import { useNavigation } from "@react-navigation/native";
import OTPInputView from "../screens/OtpInputView";

const OtpScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/lock.png")} className='w-32 h-32' />
      <OTPInputView
        code='e333' // Pre-filled code (optional)
        style={styles.otpInputView}
        pinCount={4}
        autoFocusOnLoad={true} // Set autoFocus explicitly
        onCodeFilled={(code) => {
          if (code === "2234") {
            navigation.navigate("home");
          }
          console.log(`Code is ${code}`);
        }} // Function to handle filled code
        codeInputFieldStyle={styles.codeInputField}
        codeInputHighlightStyle={styles.codeInputHighlight}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  otpInputView: {
    width: "100%",
    height: 200,
    paddingHorizontal: 32,
  },
  codeInputField: {
    width: 30,
    height: 45,
    color: "#f4a135",
    borderWidth: 0,
    borderBottomWidth: 3,
    borderBottomColor: "#111",
  },
  codeInputHighlightStyle: {
    borderColor: "#2ab12f", // Highlight border color
  },
});

export default OtpScreen;
