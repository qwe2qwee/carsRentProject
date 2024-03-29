import React from "react";
import { View, Text } from "react-native";

const Installments = () => {
  return (
    <View>
      <View className='flex flex-row my-12'>
        <View className='w-12 h-12 flex justify-center items-center  flex-1'>
          <View className='w-16 h-16 bg-primary flex justify-center items-center rounded-lg'>
            <Text className='text-white text-2xl'>12</Text>
          </View>
          <Text className='mt-1 text-lg'>شهر</Text>
        </View>
        <View className='w-12 h-12 flex justify-center items-center  flex-1'>
          <View className='w-16 h-16 bg-primary flex justify-center items-center rounded-lg'>
            <Text className='text-white text-2xl'>18</Text>
          </View>
          <Text className='mt-1 text-lg'>شهر</Text>
        </View>
        <View className='w-12 h-12 flex justify-center items-center  flex-1'>
          <View className='w-16 h-16 bg-primary flex justify-center items-center rounded-lg'>
            <Text className='text-white text-2xl'>20</Text>
          </View>
          <Text className='mt-1 text-lg'>شهر</Text>
        </View>
      </View>
      <View className='flex flex-row my-8'>
        <View className='w-12 h-12 flex justify-center items-center  flex-1'>
          <View className='w-16 h-16 bg-primary flex justify-center items-center rounded-lg'>
            <Text className='text-white text-2xl'>26</Text>
          </View>
          <Text className='mt-1 text-lg'>شهر</Text>
        </View>
        <View className='w-12 h-12 flex justify-center items-center  flex-1'>
          <View className='w-16 h-16 bg-primary flex justify-center items-center rounded-lg'>
            <Text className='text-white text-2xl'>30</Text>
          </View>
          <Text className='mt-1 text-lg'>شهر</Text>
        </View>
        <View className='w-12 h-12 flex justify-center items-center  flex-1'>
          <View className='w-16 h-16 bg-primary flex justify-center items-center rounded-lg'>
            <Text className='text-white text-2xl'>36</Text>
          </View>
          <Text className='mt-1 text-lg'>شهر</Text>
        </View>
      </View>
    </View>
  );
};

export default Installments;
