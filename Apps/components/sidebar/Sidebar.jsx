import React, { useEffect, useState } from "react";
import { View, Text, Pressable } from "react-native";
import { MaterialCommunityIcons } from "react-native-elements";
import { Icon } from "react-native-elements"; // Assuming MaterialCommunityIcons
import SidebarLink from "./SidebarLink";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useUserContext } from "../../../context/authcontext";


// import { Icon } from '@rneui/themed';

const Sidebar = ({ toggleSidebar, isOpen, Signout }) => {
  const { checkAuthUser, isLoading: isUserLoading } = useUserContext();
  const [useri, setUser] = useState(false);
  const {user} = useUserContext()

  useEffect(async () => {
    let real = await checkAuthUser();
    setUser(real);
    console.log("reces");
  }, []);

  const sidebarClasses = `  absolute z-30 right-0 top-0 h-screen overflow-auto bg-white shadow-lg w-72 bg-red transition duration-1000 ease-in-out transform rounded-l-3xl shadow-3xl z-30 ${
    isOpen ? "-translate-x-0" : "-translate-x-full"
  }`; // Use Tailwind-like classes

  const navigation = useNavigation();

  return (
    <View className='z-30 relative '>
      {isOpen && (
        <Pressable
          onPress={toggleSidebar}
          className='absolute h-full w-full z-20 bg-black '>
          <Pressable
            className='absolute left-0 z-50 h-full w-44 top-0 bg-black'
            onPress={toggleSidebar}></Pressable>
          <View className={sidebarClasses}>
            <View className='relative'>
              <Pressable
                className=' w-auto text-left m-auto right-3 top-4 absolute'
                onPress={toggleSidebar}>
                <Feather name='x' size={24} color='#6C6C6C' />
              </Pressable>
              <View className='mt-16'>
                {useri && (
                  <SidebarLink
                    label='الملف الشخصي'
                    onPress={() => navigation.navigate("profile",{
                      userId:user?.id
                    })}
                    icon={
                      <Ionicons
                        name='person-circle-outline'
                        size={20}
                        color='#FF6600'
                      />
                    }
                  />
                )}
                {useri && (
                  <SidebarLink
                    label='حجوزاتي'
                    onPress={() => navigation.navigate("reservations")}
                    icon={
                      <AntDesign name='CodeSandbox' size={20} color='#FF6600' />
                    }
                  />
                )}
                {useri && (
                  <SidebarLink
                    label='المفضلة'
                    onPress={() => navigation.navigate("favorite")}
                    icon={<AntDesign name='hearto' size={20} color='#FF6600' />}
                  />
                )}

                <SidebarLink
                  label='مركز الدعم'
                  onPress={() => navigation.navigate("support")}
                  icon={
                    <MaterialIcons
                      name='support-agent'
                      size={20}
                      color='#FF6600'
                    />
                  }
                />

                <SidebarLink
                  label='الشروط و السياسات'
                  onPress={() => navigation.navigate("policies")}
                  icon={
                    <Ionicons name='reader-outline' size={20} color='#FF6600' />
                  }
                />
                {useri && (
                  <SidebarLink
                    label='تسجيل الخروج'
                    icon={<AntDesign name='logout' size={20} color='#FF6600' />}
                    onPress={Signout}
                  />
                )}

                {!useri && (
                  <SidebarLink
                    onPress={() => navigation.navigate("Login")}
                    label='تسجيل الدخول'
                    icon={
                      <MaterialIcons name='login' size={20} color='#FF6600' />
                    }
                  />
                )}
              </View>
            </View>
          </View>
        </Pressable>
      )}
    </View>
  );
};

export default Sidebar;
