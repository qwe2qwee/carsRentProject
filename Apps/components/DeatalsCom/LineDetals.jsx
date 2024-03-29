import React from "react";
import { View, Text } from "react-native";

const LineDetals = ({ leftT, rightT, leftC, rightC, leftB, righB }) => {
  return (
    <View className='flex w-full h-7 flex-row pb-3 my-3  '>
      <View className='bg-gray-200 p-2 flex-2 w-24 h-9 m-2 flex flex-row justify-center items-end  '>
        <Text className='text-primary mr-1 text-right flex-1'>{leftT}</Text>
        <Text className='flex-1 text-[9] text-right '>{rightT}</Text>
      </View>
      <View className='  flex-1 w-24 h-9 mx-1 my-2 border-x-[1px] border-black '>
        <View className='justify-center items-center flex flex-row bg-gray-200 p-2 mx-3 '>
          <Text className='text-primary mr-1  flex-1 text-right'>{leftC}</Text>
          <Text className='flex-1 text-[9] m-auto text-right '>{rightC}</Text>
        </View>
      </View>
      <View className='bg-gray-200 p-2 w-24 h-9 m-2 justify-center items-center flex flex-row'>
        <Text className='text-primary mr-1 flex-1 text-right '>{leftB}</Text>
        <Text className=' flex-1 text-[9] text-right '>{righB}</Text>
      </View>
    </View>
  );
};

export default LineDetals;
