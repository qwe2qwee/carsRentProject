import React, { useContext, useEffect, useState } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AppwriteContext } from "../screens/Login/AppwriteLog/AppwriteContext";
import Loading from "../components/Loading";

// Routes
import { AuthStack } from "./AuthStack";
import { AppStack } from "./AppStack";

export const Router = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { appwrite, isLoggedIn, setIsLoggedIn } = useContext(AppwriteContext);
  useEffect(() => {
    appwrite
      .getCurrentUser()
      .then((response) => {
        setIsLoading(false);
        if (response) {
          setIsLoggedIn(true);
        }
      })
      .catch((_) => {
        setIsLoading(false);
        setIsLoggedIn(false);
      });
  }, [appwrite, setIsLoggedIn]);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <NavigationContainer>
      {isLoggedIn ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
