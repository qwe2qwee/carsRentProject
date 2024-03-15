import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import SplushPage from "./Apps/screens/SplushPage/SplushPage";
import SignUpScreen from "./Apps/screens/Login/SignUpScreen";
import LoginScreen from "./Apps/screens/Login/LoginScreen";


export default function App() {
  return (
    <View className='w-full h-full'>
      <LoginScreen/>
      {/* <SignUpScreen/> */}
    </View>
  );
}
