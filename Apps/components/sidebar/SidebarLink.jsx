import React from "react";
import { Pressable, Text, View,TouchableOpacity } from "react-native";

const SidebarLink = ({ label, onPress, icon }) => {
  return (
    <View className='m-4 border-b-[1px] border-texttt '>
      <TouchableOpacity
        onPress={onPress}
        className='  py-3 flex  flex-row-reverse text-right  items-center '>
        {icon}
        <Text className='mx-2 text-texttt'>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SidebarLink;
