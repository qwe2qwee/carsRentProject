import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import LineDetals from "../LineDetals";
import HomeBt from "../../HomeCom/HomeBt";

const Deatals = ({ route }) => {
  const receivedData = route.params?.data;
  console.log(receivedData.model + " fadee");

  return (
    <View className='flex flex-col h-full w-full justify-center '>
      <LineDetals
        leftT={receivedData.year}
        rightT='المودل'
        leftC={receivedData.manufacturer}
        rightC='النوع'
        leftB={receivedData.model}
        righB='الماركة'
      />
      <LineDetals
        leftT={receivedData.innerColor}
        rightT='الداخلي'
        leftC={receivedData.outColor}
        rightC='الخارجي'
        leftB={receivedData.category}
        righB='الفئة'
      />
      <LineDetals
        leftT={receivedData.cylinders}
        rightT='السلندرات'
        leftC={receivedData.typeGravel}
        rightC='نوع القير'
        leftB={receivedData.incoming}
        righB='الوارد'
      />
      <LineDetals
        leftT={receivedData.ability}
        rightT='القدرة'
        leftC={receivedData.engineSize}
        rightC='حجم المحرك'
        leftB={receivedData.pushType}
        righB='نوع الدفع'
      />

      <TouchableOpacity
        onPress={() => console.log("here is")}
        className='w-60 h-12 rounded-md bg-primary mt-10 mx-auto flex justify-center items-center '>
        <Text className='text-secondary text-2xl'>احجز الان</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Deatals;
