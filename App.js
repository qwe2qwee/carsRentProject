import { View } from "react-native";
// import SplushPage from "./Apps/screens/SplushPage/SplushPage";
import SignUpScreen from "./Apps/screens/Login/SignUpScreen";
import LoginScreen from "./Apps/screens/Login/LoginScreen";
import { AppwriteProvider } from "./Apps/screens/Login/AppwriteLog/AppwriteContext";
import { NavigationContainer } from "@react-navigation/native";
import 'react-native-gesture-handler';



import MyStack from "./Apps/routes";
import { AuthProvider } from "./context/authcontext";
import { QueryProvider } from "./lib/react-quary/QueryProvider";

export default function App() {

  return (
    <NavigationContainer>
      <QueryProvider>
        <AuthProvider>
          <View className='w-full h-full'>
            <MyStack/>
          </View>
        </AuthProvider>
      </QueryProvider>
    </NavigationContainer>
  );
}
