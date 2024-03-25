import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ title, onPress, className }) => {
  return (
    <TouchableOpacity onPress={onPress} className='bg-primary text-center rounded-md  '>
      <Text className="text-secondary text-center  p-3 py-4 rounded-md">{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
