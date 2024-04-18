import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import Lable from "../Lable";

const OptionRent = () => {
  const [Selectedplan, setSelectedplan] = useState("");
  const [SelectedLong, setSelectedLong] = useState("daily");

  console.log(" اخترت الخطة " + Selectedplan);
  console.log(" اخترت المدة " + SelectedLong);

  const options = [
    { key: "daily", value: "يومي" },
    { key: "weekly", value: "اسبوعي" },
    { key: "monthly", value: "شهري" },
  ];

  const longchoose = {
    daily: [
      { key: "1", value: "يوم" },
      { key: "2", value: "يومين" },
      { key: "3", value: "3 ايام" },
      { key: "4", value: "4 ايام" },
      { key: "5", value: "5 ايام" },
      { key: "6", value: "6 ايام" },
      { key: "7", value: "7 ايام" },
      { key: "8", value: "8 ايام" },
      { key: "9", value: "9 ايام" },
      { key: "10", value: "10 ايام" },
    ],
    weekly: [
      { key: "15", value: "اسبوع" },
      { key: "16", value: "اسبوعين" },
      { key: "17", value: "3 اسابيع" },
      { key: "18", value: "4 اسابيع" },
      { key: "19", value: "5 اسابيع" },
      { key: "20", value: "6 اسابيع" },
    ],
    monthly: [
      { key: "11", value: "شهر" },
      { key: "12", value: "شهرين" },
      { key: "13", value: "3 اشهر" },
      { key: "14", value: "4 اشهر" },
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

        {Selectedplan && (
          <View className=''>
            <Lable title='اختر العدد' />

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
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default OptionRent;
