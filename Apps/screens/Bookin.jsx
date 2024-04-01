import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import Lable from "../components/BookingCom/Lable";
import MangePage from "../components/BookingCom/MangePage";
import ColorsSelect from "../components/BookingCom/ColorsSelect";

const Bookin = () => {
  const [activeButton, setActiveButton] = useState(true); // Initial active button

  let ownerS, ownerT, rentS, rentT;

  if (activeButton) {
    ownerS =
      "bg-primary text-primary h-12 w-40 flex justify-center items-center rounded-l-3xl rounded-r-3xl";
    ownerT = "text-white text-2xl";
    rentS = "h-12 w-40  flex justify-center items-center rounded-r-3xl";
    rentT = "text-2xl text-primary";
  } else {
    ownerS =
      "bg-white text-primary h-12 w-40 flex justify-center items-center rounded-l-3xl ";
    rentS =
      "h-12 w-40  flex justify-center items-center rounded-l-3xl rounded-r-3xl bg-primary";
    ownerT = "text-primary text-2xl";
    rentT = "text-2xl text-white";
  }

  return (
    <View className='flex justify-start items-center bg-[#F6F6F8] flex-1 relative '>
      <View className='mt-20'>
        <Text className=' text-xl text-primary font-bold'>خيارات الحجز</Text>
      </View>

      <Lable title='إختار نوع الحجز' />

      <View className='flex flex-row bg-white rounded-3xl '>
        <Pressable
          onPress={() => {
            console.log("ايجار");
            setActiveButton(true);
          }}
          className={ownerS}>
          <Text className={ownerT}>ايجار</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            console.log("تمليك");
            setActiveButton(false);
          }}
          className={rentS}>
          <Text className={rentT}>تمليك</Text>
        </Pressable>
      </View>
      <MangePage page={activeButton} />
      <ColorsSelect />
    </View>
  );
};

export default Bookin;
