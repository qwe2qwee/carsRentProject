import React from "react";
import { View, Text } from "react-native";

const Lable = ({title}) => {
  return (
    <View className='relative w-full mt-5 h-10'>
      <Text className='absolute right-4 text-texttt'>{title} </Text>
    </View>
  );
};

export default Lable;
