// import React, { useState } from "react";
// import { View, Text, TouchableOpacity, Image } from "react-native";
// import  from "react-native-image-picker";

// const PhotoSelection = () => {
//   const [idImage, setIdImage] = useState(null);
//   const [licenseImage, setLicenseImage] = useState(null);

//   const imagePickerOptions = {
//     title: "اختر صورة", // Title in Arabic: "اختر صورة" (Choose Photo)
//     storageOptions: {
//       skipBackup: true, // Prevent photos from backing up to iCloud/Google Photos
//       path: "images", // Optional: Specify a folder to store the selected image
//     },
//   };
  

//   const pickImage = (type) => {
//     ImagePicker.showImagePicker(imagePickerOptions, (response) => {
//       if (response.didCancel) {
//         console.log("User cancelled image picker");
//       } else if (response.error) {
//         console.error("ImagePicker Error:", response.error);
//       } else {
//         const source = { uri: response.uri };
//         if (type === "id") {
//           setIdImage(source);
//         } else {
//           setLicenseImage(source);
//         }
//       }
//     });
//   };

//   return (
//     <View className='bg-slate-600 w-full h-40 flex flex-row justify-around items-center'>
//       <TouchableOpacity
//         className='bg-slate-100 w-32 h-32 rounded-xl flex items-center justify-center'
//         onPress={() => pickImage("id")}>
//         {idImage ? (
//           <Image source={idImage} style={{ width: "100%", height: "100%" }} />
//         ) : (
//           <Text>الهوية</Text>
//         )}
//       </TouchableOpacity>
//       <TouchableOpacity
//         className='bg-slate-100 w-32 h-32 rounded-xl flex items-center justify-center'
//         onPress={() => pickImage("license")}>
//         {licenseImage ? (
//           <Image
//             source={licenseImage}
//             style={{ width: "100%", height: "100%" }}
//           />
//         ) : (
//           <Text>الرخصة</Text>
//         )}
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default PhotoSelection;
