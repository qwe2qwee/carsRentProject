import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import Lable from "./Lable"; // Assuming Lable is a custom component for labels

const installments = [12, 24, 30, 36]; // More descriptive variable name

const OwnerPage = () => {
  const [selectedInstallment, setSelectedInstallment] = useState(null); // Track selected installment

  const handlePress = (installment) => {
    setSelectedInstallment(installment);
    // Add any additional logic to handle selection, e.g., sending data to backend
  };

  return (
    <View className='flex flex-1'>
      <Lable title='اختر عدد الاقساط' />
      <View className='w-full bg-secondary h-32 flex flex-row justify-center items-center'>
        {installments.map((installment) => (
          <Pressable // Use Pressable for interactive buttons
            key={installment} // Important for performance with dynamic lists
            className={`w-16 h-16 flex justify-center items-center mx-2 rounded-md 
            ${
              selectedInstallment === installment
                ? "bg-primary text-white"
                : "bg-[#1FB8B7] text-white"
            }`}
            onPress={() => handlePress(installment)}>
            <Text
              className={`${
                selectedInstallment === installment
                  ? " text-white"
                  : " text-white"
              }`}>
              {installment}
            </Text>
          </Pressable>
        ))}
      </View>
      <Text>{selectedInstallment}</Text>
    </View>
  );
};

export default OwnerPage;
