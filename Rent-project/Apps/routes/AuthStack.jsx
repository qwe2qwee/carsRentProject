import React from "react";
import { View, Text } from "react-native";
import Home from "../screens/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import SignUpScreen from "../screens/Login/SignUpScreen";
import LoginScreen from "../screens/Login/LoginScreen";

export const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen name='SignUp' component={SignUpScreen} />

    </Stack.Navigator>
  );
};
