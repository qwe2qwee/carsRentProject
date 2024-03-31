import React from "react";
import { View, Text } from "react-native";
import Lable from "../Lable";
import OptionRent from "./OptionRent";

const RentPage = () => {
  return (
    <View className='flex flex-1  justify-start items-center w-full'>
      <Lable title='نوع الايجار'/>
      <OptionRent/>
    </View>
  );
};

export default RentPage;
