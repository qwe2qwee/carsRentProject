import React from "react";
import { View, Text } from "react-native";
import Loading from "../components/Loading";

const Reservations = () => {
  return (
    <View className='flex h-full w-full justify-center items-center bg-orange-400'>
      <Text className='text-red-600'> حجوزاتي</Text>
      <Loading />
    </View>
  );
};

export default Reservations;
