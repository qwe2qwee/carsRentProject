import React from "react";
import { View, Image, useWindowDimensions } from "react-native";

const Onboarding = ({ Url }) => {
  const width = useWindowDimensions();

  return (
    <View
      className='bg-black flex justify-center items-center'
      style={{ width: width.width }}>
      <Image source={Url} resizeMode='cover' />
    </View>
  );
};

export default Onboarding;
