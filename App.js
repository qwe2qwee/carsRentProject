import { View } from "react-native";
// import SplushPage from "./Apps/screens/SplushPage/SplushPage";
import SignUpScreen from "./Apps/screens/Login/SignUpScreen";
import LoginScreen from "./Apps/screens/Login/LoginScreen";
import { AppwriteProvider } from "./Apps/screens/Login/AppwriteLog/AppwriteContext";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import * as SplashScreen from "expo-splash-screen";

import MyStack from "./Apps/routes";
import { AuthProvider, useUserContext } from "./context/authcontext";
import { QueryProvider } from "./lib/react-quary/QueryProvider";
import { useCallback, useEffect, useState } from "react";
import OtpScreen from "./Apps/screens/OtpScreen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(null);

  const { checkAuthUser, isLoading: isUserLoading } = useUserContext();

  useEffect(async () => {
    let real = await checkAuthUser();
    setAppIsReady(real);
    console.log("log");
  }, []);

  if (appIsReady === false) {
    SplashScreen.hideAsync();
  }


  return (
    <NavigationContainer>
      <QueryProvider>
        <AuthProvider>
          <View className='w-full h-full'>
            <MyStack />
          </View>
        </AuthProvider>
      </QueryProvider>
    </NavigationContainer>
  );
}
