import React from "react";
import { View, Text, ScrollView } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const Specifications = () => {
  return (
    <ScrollView>
      <View className='flex flex-row my-7'>
        <View className='w-12 h-12 flex justify-center items-center  flex-1'>
          <Entypo name='camera' size={24} color='black' />
          <Text className='mt-3'>كاميرا خلفية</Text>
        </View>
        <View className='w-12 h-12  flex justify-center items-center flex-1'>
          <MaterialCommunityIcons name='remote-tv' size={24} color='black' />
          <Text className='mt-3'>مفتاح تحكم</Text>
        </View>
        <View className='w-12 h-12  flex justify-center items-center flex-1'>
          <Ionicons name='speedometer-sharp' size={24} color='black' />
          <Text className='mt-3'>مثبت سرعة</Text>
        </View>
      </View>
      <View className='flex flex-row my-7'>
        <View className='w-12 h-12 flex justify-center items-center  flex-1'>
          <MaterialCommunityIcons name='car-door' size={24} color='black' />
          <Text className='mt-3'>نوافد كهربائية</Text>
        </View>
        <View className='w-12 h-12  flex justify-center items-center flex-1'>
          <Feather name='bluetooth' size={24} color='black' />
          <Text className='mt-3'>بلوتوث</Text>
        </View>
        <View className='w-12 h-12  flex justify-center items-center flex-1'>
          <MaterialIcons name='sensors' size={24} color='black' />
          <Text className='mt-3'>حساسات</Text>
        </View>
      </View>

      <View className='flex flex-row my-7'>
        <View className='w-12 h-12 flex justify-center items-center  flex-1'>
          <FontAwesome6 name='helmet-safety' size={24} color='black' />
          <Text className='mt-3'>اكياس هوائية</Text>
        </View>
        <View className='w-12 h-12  flex justify-center items-center flex-1'>
          <FontAwesome6 name='usb' size={24} color='black' />
          <Text className='mt-3'>مدخل USB/AUX</Text>
        </View>
        <View className='w-12 h-12  flex justify-center items-center flex-1'>
          <MaterialCommunityIcons name='car-wash' size={24} color='black' />
          <Text className='mt-3'>فتحة سقف</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Specifications;
