import React from "react";
import { View, Text } from "react-native";
import RentPage from "./OptionsRent/RentPage";
import OwnerPage from "./OwnerPage";

const MangePage = ({ page }) => {
  return (
    <View className='flex flex-1 w-full'>
      {page && <RentPage />}
      {!page && <OwnerPage />}
    </View>
  );
};

export default MangePage;
