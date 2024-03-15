import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  Pressable,
  StatusBar,
} from "react-native";
import Button from "../../components/Button";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Snackbar from "react-native-snackbar";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../routes/AuthStack";
import AppwriteContext from "./AppwriteLog/AppwriteContext";

const SignUpScreen = ({navigation} = NativeStackScreenProps) => {
  const { appwrite, setIsLoggedIn } = useContext(AppwriteContext);
  const [error, setError] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);

  const handleSignup = () => {
    if (
      name.length < 1 ||
      email.length < 1 ||
      password.length < 1 ||
      phoneNumber.length < 1
    ) {
      setError("All fields are required");
    } else {
      const user = {
        email,
        password,
        name,
        phoneNumber,
      };
      appwrite
        .createAccount(user)
        .then((response) => {
          if (response) {
            setIsLoggedIn(true);
            Snackbar.show({
              text: "Signup success",
              duration: Snackbar.LENGTH_SHORT,
            });
          }
        })
        .catch((e) => {
          console.log(e);
          setError(e.message);
        });
    }
  };

  return (
    <View className='flex-1 bg-primary'>
      <StatusBar barStyle='light-content' backgroundColor={"#FF6600"} />
      <Text className='text-secondary p-14 font-bold text-5xl mb-8'>دخول</Text>
      <View className='bg-secondary flex-1 pt-16 px-8 rounded-t-3xl'>
        <Text className='text-primary text-[40px] font-bold'> مرحبا بك</Text>
        <Text className='text-gray-600 mr-6'>إنشاء حساب</Text>
        <TextInput
          className='w-full border-solid border-b-2 h-9 border-b-thridC my-5'
          placeholder='Name'
          value={name}
          onChangeText={setName}
        />
        <TextInput
          className='w-full border-solid border-b-2 h-9 border-b-thridC my-5'
          placeholder='Email'
          value={email}
          onChangeText={setEmail}
          keyboardType='email-address'
          autoCapitalize='none'
        />
        <TextInput
          className='w-full border-solid border-b-2 h-9 border-b-thridC my-5'
          placeholder='Phone Number'
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType='phone-pad'
          maxLength={10}
        />
        <TextInput
          className='w-full border-solid border-b-2 h-9 border-b-thridC my-5 pr-8'
          placeholder='Password'
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword} // Toggle based on state
        />
        <Button title='انشاء' onPress={handleSignup} />
        <View className=' flex flex-row justify-between mt-5'>
          <Pressable onPress={() => console.log("just visit")}>
            <Text className='box text-primary'>دخول كزائر</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('Login')}>
            <Text className='box'>لدي حساب</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default SignUpScreen;
