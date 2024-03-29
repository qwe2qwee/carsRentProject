import React from "react";
import { View, Text } from "react-native";
import Loading from "../components/Loading";

const Support = () => {
  return (
    <View className='flex h-full w-full justify-center items-center bg-amber-50'>
      <Text className='text-red-600'>الدعم الفني</Text>
      <Loading />
    </View>
  );
};

export default Support;
