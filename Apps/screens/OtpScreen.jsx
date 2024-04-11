import React from "react";
import { View, Text } from "react-native";
import Button from "../components/Button";
import OTPInputView from "./OtpInputView";

const OtpScreen = () => {
  return (
    <View className='flex flex-1 items-center justify-center'>
      <OTPInputView
        code='e333'
        style={{ width: "100%", height: 200, paddingHorizontal: 32 }}
        pinCount={4}
        autoFocusOnLoad
        codeInputFieldStyle={{
          width: 30,
          height: 45,
          color: "#f4a135",
          borderWidth: 0,
          borderBottomWidth: 3,
          borderBottomColor: "#111",
        }}
        codeInputHighlightStyle={{
          borderColor: "#2ab12f",
        }}
        onCodeFilled={(code) => {
          console.log(`Code is ${code}`);
        }}
      />

      <Button title={"تاكيد"} />
    </View>
  );
};

export default OtpScreen;
