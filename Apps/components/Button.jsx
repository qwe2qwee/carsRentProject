import React from "react";
import { Text, TouchableOpacity, ActivityIndicator } from "react-native";
import Loading from "./Loading";

const Button = ({ title, onPress, className, loading }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className='bg-primary text-center rounded-md  '>
      {!loading && (
        <Text className='text-secondary text-center  p-3 py-4 rounded-md'>
          {title}
        </Text>
      )}
      {loading && (
        <ActivityIndicator size='large' color='#fff' className='p-2 py-2' />
      )}
    </TouchableOpacity>
  );
};

export default Button;
