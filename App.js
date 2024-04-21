import { View, SafeAreaView } from "react-native";
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
import OtpScreen from "./Apps/components/OtpScreen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(null);

  const {
    checkAuthUser,
    isLoading: isUserLoading,
    isAuthenticated,
  } = useUserContext();

  useEffect(() => {
    const checkAuth = async () => {
      const isAuth = await checkAuthUser();
      setAppIsReady(isAuth);
    };
    checkAuth();
  }, []);

  console.log(appIsReady);

  if (isAuthenticated === false) {
  }

  return (
    <NavigationContainer>
      <QueryProvider>
        <AuthProvider>
          <SafeAreaView className='bg-primary' style={{ flex: 1 }}>
            <View className='flex flex-1'>
              <MyStack />
            </View>
          </SafeAreaView>
        </AuthProvider>
      </QueryProvider>
    </NavigationContainer>
  );
}
