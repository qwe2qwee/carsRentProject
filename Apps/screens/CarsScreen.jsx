import React, { useState } from "react";
import { View, Text, Image, Pressable, ScrollView} from "react-native";

import CarsList from "../components/CarsCom/CarsList";

const CarsScreen = () => {

  const [grid, setGrid] = useState(false);


  return (
    <View className='flex flex-1 bg-zinc-600 justify-center items-center '>
      <View className='h-36 bg-black w-full'>
        <Text>CarsScreen</Text>
      </View>
      <CarsList grid={grid}/>
    </View>
  );
};

export default CarsScreen;
