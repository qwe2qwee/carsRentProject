import React from "react";
import { View, Text } from "react-native";
import RentPage from "./OptionsRent/RentPage";

const MangePage = ({ page }) => {
  return <View className='flex flex-1 w-full'>{page && <RentPage />}</View>;
};

export default MangePage;
