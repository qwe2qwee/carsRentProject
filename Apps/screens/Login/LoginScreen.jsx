import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StatusBar,
  ScrollView,
} from "react-native";
import Button from "../../components/Button";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useSignInAccount } from "../../../lib/react-quary/qeuries";
import { useUserContext } from "../../../context/authcontext";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const { checkAuthUser, isLoading, isAuthenticated } = useUserContext();
  const [Loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const { mutateAsync: signInAccount } = useSignInAccount();

  const handleLogin = async () => {
    // Basic field validation with error handling
    if (!email.trim() || !password.trim()) {
      setError("الرجاء ملئ كل البيانات");
      return;
    }

    try {

      // Enhanced email validation using a regular expression
      const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!emailRegex.test(email)) {
        throw new Error("الايميل غير صالح");
      }

      const user = {
        email: email.trim(),
        password: password.trim(),
      };

      setLoading(true);

      const session = await signInAccount({
        email: user.email,
        password: user.password,
      });

      if (!session) {
        setError("الرجاء التحقق من صحة البيانات");
        // navigation.navigate("Login");
        setLoading(false);
        return;
      }
    } catch (error) {
      if (
        error.message ===
        "Invalid credentials. Please check the email and password."
      ) {
        setError("بريد إلكتروني أو كلمة مرور غير صحيحة");
        setLoading(false);
        return;
      }
      return;
    }

    const isLoggedIn = await checkAuthUser();

    console.log(isLoggedIn);

    try {
      if (isLoggedIn) {
        setEmail("");
        setPassword("");
        navigation.navigate("home");
        setLoading(false);
      } else {
        setLoading(false);
        return setError('"فشل تسجيل الدخول الرجاء المحاولة لاحقا"');
      }

      console.log("User created successfully:");
      setError("");
      // Handle successful signup (e.g., navigate to a confirmation screen)
    } catch (error) {
      console.error("Error creating user:", error);
      setError(error.message); // Update error message for user feedback
    }
  };

  return (
    <View className='flex-1 bg-primary'>
      <StatusBar barStyle='light-content' backgroundColor={"#FF6600"} />
      <View className='relative h-48'>
        <View className='absolute top-24 right-10 '>
          <Text className='text-secondary  font-bold text-2xl '>
            مرحبا بك في
          </Text>
          <Text className='text-right text-secondary mr-1'>LEAGO</Text>
        </View>
      </View>

      <View className='bg-secondary flex-1 pt-16 px-8 rounded-t-[40px]'>
        <ScrollView>
          <Text className='text-primary text-[30px] mb-10 mt-9 font-bold text-center'>
            تسجيل دخول
          </Text>

          <TextInput
            className='w-full border-solid border-b-2 h-9 border-b-thridC my-5'
            placeholder='Email'
            value={email}
            onChangeText={setEmail}
            keyboardType='email-address'
            autoCapitalize='none'
          />
          <View className='relative'>
            <TextInput
              className='w-full border-solid border-b-2 h-9 border-b-thridC my-5 mb-4 pr-8'
              placeholder='Password'
              value={password}
              onChangeText={setPassword}
              secureTextEntry={showPassword} // Toggle based on state
            />
            <Pressable
              onPress={() => {
                setShowPassword(!showPassword);
              }}
              className='h-5 w-5  absolute right-2 top-6'>
              <MaterialCommunityIcons name='eye-off' size={20} color='black' />
            </Pressable>
          </View>
          <Pressable
            onPress={() => navigation.navigate("otp")}
            className=' ml-48 '>
            <Text className=' text-primary mb-5 mt-0  text-right '>
              نسيت كلمة المرور ?
            </Text>
          </Pressable>

          <Button title='تسجيل دخول' onPress={handleLogin} loading={Loading} />
          <Text className='text-red-600'>{error}</Text>
          <View className=' flex flex-row-reverse justify-between mt-7'>
            <Pressable onPress={() => navigation.navigate("Signup")}>
              <Text className='box'>إنشاء حساب</Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default LoginScreen;
