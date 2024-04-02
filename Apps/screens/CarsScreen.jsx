import React, { useState } from "react";
import { View, Text, Image, Pressable, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import CarsList from "../components/CarsCom/CarsList";
import { SelectList } from "react-native-dropdown-select-list";

const CarsScreen = () => {
  const [grid, setGrid] = useState(false);
  const [Selectedplan, setSelectedplan] = useState("");

  let gridd1, gridd2, icon1, icon2;

  if (grid) {
    gridd1 = "gray";
    gridd2 = "#FF6600";
  } else {
    gridd1 = "#FF6600";
    gridd2 = "gray";
  }

  const options = [
    { key: "12", value: "12 قسط" },
    { key: "16", value: "16 قسط" },
    { key: "20", value: "20 قسط" },
    { key: "30", value: "30 قسط" },
  ];

  const options2 = [
    { key: "new", value: "جديد" },
    { key: "inuse", value: "مستخدم" },
  ];

  const options3 = [
    { key: "1200", value: "1200" },
    { key: "2000", value: "2000" },
    { key: "2500", value: "2500" },
    { key: "3000", value: "3000" },
  ];

  return (
    <View className='flex flex-1 bg-[#F6F6F8] justify-center items-center '>
      <View className='h-36 bg-[#F6F6F8] w-full  flex flex-row justify-start items-end p-3'>
        <Pressable
          onPress={() => setGrid(false)}
          className='w-6 h-6 flex justify-center items-center rounded-sm'>
          <Ionicons name='grid' size={22} color={gridd1} />
        </Pressable>
        <Pressable
          onPress={() => setGrid(true)}
          className='w-6 h-6  flex justify-center items-center rounded-sm mx-2'>
          <FontAwesome name='th-list' size={24} color={gridd2} />
        </Pressable>
        <SelectList
          setSelected={(val) => {
            setSelectedplan(val);
          }}
          data={options}
          save='key'
          maxHeight={80}
          boxStyles={{
            backgroundColor: "#FF6600",
            height: 45,
            width: 90,
            borderRadius: 4,
            margin: 1,
            display: "flex",
            flexDirection: "row-reverse",
          }}
          inputStyles={{
            paddingTop: 0,
            paddingRight: 0,
            paddingBottom: 0,
            paddingLeft: 0,
            margin: 0,
            color: "white",
          }} // Customize padding for each side
          search={false}
          label='na'
          placeholder='الاقساط'
          dropdownTextStyles={{ textAlign: "center" }}
        />
        <SelectList
          setSelected={(val) => {
            setSelectedplan(val);
          }}
          data={options2}
          save='key'
          maxHeight={80}
          boxStyles={{
            backgroundColor: "#FF6600",
            height: 45,
            width: 90,
            borderRadius: 4,
            margin: 1,
            display: "flex",
            flexDirection: "row-reverse",
          }}
          inputStyles={{
            paddingTop: 0,
            paddingRight: 0,
            paddingBottom: 0,
            paddingLeft: 0,
            margin: 0,
            color: "white",
          }} // Customize padding for each side
          search={false}
          label='na'
          placeholder='الحالة'
          dropdownTextStyles={{ textAlign: "center" }}
        />
        <SelectList
          setSelected={(val) => {
            setSelectedplan(val);
          }}
          data={options3}
          save='key'
          maxHeight={80}
          boxStyles={{
            backgroundColor: "#FF6600",
            height: 45,
            width: 90,
            borderRadius: 4,
            margin: 1,
            display: "flex",
            flexDirection: "row-reverse",
          }}
          inputStyles={{
            paddingTop: 0,
            paddingRight: 0,
            paddingBottom: 0,
            paddingLeft: 0,
            margin: 0,
            color: "white",
          }} // Customize padding for each side
          search={false}
          label='na'
          placeholder='السعر'
          dropdownTextStyles={{ textAlign: "center" }}
        />
      </View>
      <CarsList grid={grid} />
    </View>
  );
};

export default CarsScreen;
