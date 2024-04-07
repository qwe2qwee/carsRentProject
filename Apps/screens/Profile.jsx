import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { useUserContext } from "../../context/authcontext";
import Loading from "../components/Loading";
import React, { useState, useEffect } from "react";

const Profile = ({ route }) => {
  const { user } = useUserContext();
  const userId = route.params.userId;
  console.log(userId);

  const [name, setName] = useState(user.name);
  const [phoneNumber, setPhoneNumber] = useState(user.phone_number);
  const handleNameChange = (text) => setName(text);
  const handlePhoneNumberChange = (text) => setPhoneNumber(text);

  return (
    <View className='flex h-full w-full '>
      <View className='flex flex-col items-center py-8 px-4'>
        <Text className='text-xl font-bold mb-4'>الملف الشخصي</Text>
        <View className='mb-4 flex-row-reverse  text-right'>
          <Text className='text-base font-medium'>الايميل: </Text>
          <Text className='text-gray-700'>{user.email}</Text>
        </View>
        <View className='mb-4 flex-row-reverse text-right'>
          <Text className='text-base font-medium'>الاسم: </Text>
          <Text className='text-base font-medium'>{user.name}</Text>
        </View>
        <View className='mb-4 flex flex-row-reverse text-right'>
          <Text className='text-base font-medium'>رقم الهاتف: </Text>
          <Text className='text-base font-medium'>{user.phone_number}</Text>
        </View>
        <View className='mb-4 flex-row-reverse'>
          <Text className='text-base font-medium'>نقاط الشراء :</Text>
          <Text className='text-gray-700'></Text>
        </View>
      </View>
    </View>
  );
};

export default Profile;
