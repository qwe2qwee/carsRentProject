import { View, Text, TouchableOpacity } from "react-native";
import { useUserContext } from "../../context/authcontext";
import Loading from "../components/Loading";
import React, { useState, useEffect } from "react";
// import PhotoSelection from "../components/ProfileCom/PhotoSelection";

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
      <Text className='text-xl font-bold mb-4'>الملف الشخصي</Text>

      <View className='flex flex-col items-end py-8 px-4'>
        <View className='mb-4 flex-row-reverse text-right'>
          <Text className='text-base font-medium'>الاسم: </Text>
          <Text className='text-base font-medium'>{user.name}</Text>
        </View>
        <View className='mb-4 flex-row-reverse  text-right'>
          <Text className='text-base font-medium'>الايميل: </Text>
          <Text className='text-gray-700'>{user.email}</Text>
        </View>

        <View className='mb-4 flex flex-row-reverse text-right'>
          <Text className='text-base font-medium'>رقم الهاتف: </Text>
          <Text className='text-base font-medium'>{user.phone_number}</Text>
        </View>
        <View className='mb-4 flex-row-reverse'>
          <Text className='text-base font-medium'>نقاط الشراء </Text>
          <Text className='text-gray-700 flex justify-center items-center mr-1'>
            {user.points && user.points}
            {!user.points && "0"}
          </Text>
        </View>
      </View>
      <Text className='text-2xl mb-3'>إضافة الاوراق الأزمه</Text>

      <View className='bg-slate-600 w-full h-40 flex flex-row justify-around items-center'>
        <TouchableOpacity className='bg-slate-100 w-32 h-32 rounded-xl flex items-center justify-center'>
          <Text>الهوية</Text>
        </TouchableOpacity>
        <TouchableOpacity className='bg-slate-100 w-32 h-32 rounded-xl flex items-center justify-center'>
          <Text>الرخصة</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;
