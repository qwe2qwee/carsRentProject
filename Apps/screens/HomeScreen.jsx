import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import SearchseC from "../components/HomeCom/SearchseC";
import TowB from "../components/HomeCom/TowB";
import CarsLogo from "../components/HomeCom/Logos/CarsLogo";
import ListCars from "../components/HomeCom/ListCars";
import { useSignOutAccount } from "../../lib/react-quary/qeuries";
import { useNavigation } from "@react-navigation/native";
import Sidebar from "../components/sidebar/Sidebar";
import * as SplashScreen from "expo-splash-screen";

const HomeScreen = () => {
  const { mutate: Signout, isSuccess } = useSignOutAccount();

  const navigation = useNavigation();

  useEffect(() => {
    if (isSuccess) {
      navigation.navigate("Login");
    }
  }, [isSuccess]);
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);
  SplashScreen.hideAsync();

  return (
    <View className='relative h-full'>
      <ScrollView scrollEnabled={!isOpen}>
        <Sidebar
          isOpen={isOpen}
          toggleSidebar={toggleSidebar}
          Signout={Signout}
        />
        <SearchseC toggleSidebar={toggleSidebar} />
        <CarsLogo />
        <ListCars />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
