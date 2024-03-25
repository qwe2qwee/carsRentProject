import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const TowB = () => {
  return (
    <View className='flex flex-row justify-center items-center p-6 mt-2 '>
      <View className='p-8 flex flex-row bg-white  rounded-3xl shadow-lg'>
        <View className='border-r-2 border-primary w-1/2'>
          <TouchableOpacity className=' bg-secondary p-4 flex justify-center items-center '>
            <Text className='text-primary font-bold'>إيجار تمليك</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity className='w-1/2 bg-secondary p-4 flex justify-center items-center'>
          <Text className='text-primary font-bold'>إيجار</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TowB;
