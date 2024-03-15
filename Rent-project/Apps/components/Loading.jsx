import React from "react";
import { View, Text, ActivityIndicator } from "react-native";

const Loading = () => {
  return (
    <View className='justify-center items-center flex-1 bg-primary'>
      <ActivityIndicator size='large' color='#fff' />
      <Text>Loading</Text>
    </View>
  );
};

export default Loading;
