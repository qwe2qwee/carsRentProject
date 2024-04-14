import React from "react";
import { View, Text, ScrollView } from "react-native";

const Features = () => {
  return (
    <ScrollView>
      <View className='flex flex-row mt-3'>
        <View className='bg-[#4EB7D2] flex-1  m-2 w-56 h-20 rounded-sm '>
          <View className='p-2 '>
            <Text className='text-xl text-secondary font-bold'>
              سيارة معتمدة
            </Text>
            <Text className='text-white'>
              سيارة من وكلاء معتمدين مع أعلى جودة وموثوقية
            </Text>
          </View>
        </View>
        <View className='bg-[#DB6C6C] flex-1  m-2 w-56 h-20 rounded-sm '>
          <View className='p-2 '>
            <Text className='text-xl text-secondary font-bold'>
              تأمين أساسي
            </Text>
            <Text className='text-white'>تغطية أساسية في حال وقوع حوادث </Text>
          </View>
        </View>
      </View>
      <View className='flex flex-row'>
        <View className='bg-[#DBD76C] flex-1  m-2 w-56 h-20 rounded-sm '>
          <View className='p-2 '>
            <Text className='text-xl text-secondary font-bold'>
              إلغاء مجاني
            </Text>
            <Text className='text-white'>
              يمكنك الإلغاء في أي وقت بعد الشهر الأول بدون غرامة
            </Text>
          </View>
        </View>
        <View className='bg-[#6CDBBD] flex-1  m-2 w-56 h-20 rounded-sm '>
          <View className='p-2 '>
            <Text className='text-xl text-secondary font-bold'>الصيانة</Text>
            <Text className='text-white'>صيانة روتينية بدون تكلفة إضافية </Text>
          </View>
        </View>
      </View>
      <View className='flex flex-row'>
        <View className='bg-[#C96CDB] flex-1  m-2 w-56 h-20 rounded-sm '>
          <View className='p-2 '>
            <Text className='text-xl text-secondary font-bold'>أوراق أقل</Text>
            <Text className='text-white'>
              لا حاجة لشهادة تعريف بالراتب أو درجة ائتمان لتمتلك
            </Text>
          </View>
        </View>
        <View className='bg-[#DBA76C] flex-1  m-2 w-56 h-20 rounded-sm '>
          <View className='p-2 '>
            <Text className='text-xl text-secondary font-bold'>
              استبدال السيارة
            </Text>
            <Text className='text-white'>
              احصل على سيارة للقيادة في حالة وقوع حادث / صيانة{" "}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Features;
