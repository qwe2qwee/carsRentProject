import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";

const OptionRent = () => {
  const [Selectedplan, setSelectedplan] = useState("");
  const [SelectedLong, setSelectedLong] = useState("daily");

  const options = [
    { key: "daily", value: "يومي" },
    { key: "weekly", value: "اسبوعي" },
    { key: "monthly", value: "شهري" },
  ];

  const longchoose = {
    daily: [
      { key: "1", value: "1" },
      { key: "2", value: "2" },
      { key: "3", value: "3" },
      { key: "4", value: "4" },
      { key: "5", value: "5" },
      { key: "6", value: "6" },
      { key: "7", value: "7" },
      { key: "8", value: "8" },
      { key: "9", value: "9" },
      { key: "10", value: "10" },
    ],
    weekly: [
      { key: "11", value: "11" },
      { key: "12", value: "12" },
      { key: "13", value: "13" },
      { key: "14", value: "14" },
      { key: "15", value: "15" },
      { key: "16", value: "16" },
      { key: "17", value: "17" },
      { key: "18", value: "18" },
      { key: "19", value: "19" },
      { key: "20", value: "20" },
    ],
    monthly: [
      { key: "21", value: "21" },
      { key: "22", value: "22" },
      { key: "23", value: "23" },
      { key: "24", value: "24" },
      { key: "25", value: "25" },
      ,
    ],
  };
  return (
    <View className='flex justify-center mt-5 w-full px-10 '>
      <ScrollView>
        <SelectList
          setSelected={(val) => {
            setSelectedplan(val);
          }}
          data={options}
          save='key'
          search={false}
          label='na'
          placeholder='اختر نوع الحجز'
          dropdownTextStyles={{ textAlign: "center" }}
        />

        <View className='mt-6'>
          {Selectedplan && (
            <SelectList
              setSelected={(val) => setSelectedLong(val)}
              data={longchoose[Selectedplan]}
              save='value'
              search={false}
              label='na'
              placeholder='اختر مدة الحجز'
              dropdownTextStyles={{
                textAlign: "center",
                display: "flex",
                flexDirection: "row",
              }}
            />
          )}
        </View>

        <Text className='w-full items-center'>{Selectedplan}</Text>
        <Text className='w-full items-center'>{SelectedLong}</Text>
      </ScrollView>
    </View>
  );
};

export default OptionRent;
