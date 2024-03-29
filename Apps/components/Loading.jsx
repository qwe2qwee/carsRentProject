import React from "react";
import { View, Text, ActivityIndicator } from "react-native";

const Loading = () => {
  return (
    <View className='justify-center items-center'>
      <ActivityIndicator size='large' color='#fff' />
      <Text className='text-white'>جاري التحميل</Text>
    </View>
  );
};

export default Loading;
