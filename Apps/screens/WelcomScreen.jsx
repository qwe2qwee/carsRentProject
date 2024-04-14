import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

const WelcomScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className='bg-white'>
      <View className='bg-white h-full w-full flex flex-col'>
        <View className=' flex justify-center items-center'>
          <View className='w-full h-72 mt-12'>
            <Image
              source={require("../../assets/welcom.png")}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </View>
        </View>
        <View className='flex justify-center items-end  pt-12 pr-5'>
          <Text className='text-primary text-4xl'>امتلك سيارة</Text>
          <Text className='text-primary text-4xl'>دون قيود</Text>
        </View>
        <TouchableOpacity
          className='bg-white mt-7'
          onPress={() => {
            navigation.navigate("home");
          }}>
          <Text className='text-primary text-2xl p-5'>بدء</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default WelcomScreen;
