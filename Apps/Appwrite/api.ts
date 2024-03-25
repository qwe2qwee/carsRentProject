import { ID, Query } from "appwrite";

import {
  IUpdatePost,
  INewPost,
  INewUser,
  IUpdateUser,
} from "../../types/index";
import { account, appwriteConfig, databases } from "./config";
import AsyncStorage from "@react-native-async-storage/async-storage";

// ============================================================
// AUTH
// ============================================================

// ============================== SIGN UP
export async function createUserAccount(user: INewUser) {
  try {
    // ... الكود الموجود (التحقق من صحة البيانات، معالجة الأخطاء، إلخ)

    const newAccount = await account.create(
      ID.unique(),
      user.email,
      user.password,
      user.name
    );

    if (!newAccount) {
      throw new Error("فشل في إنشاء حساب المستخدم");
    }

    const newUser = await saveUserToDB({
      id: newAccount.$id,
      name: newAccount.name,
      email: newAccount.email,
      phone_number: user.phoneNumber,
    });

    return newUser;
  } catch (error) {
    // ... معالجة الأخطاء الموجودة
  }
}

// ============================== SAVE USER TO DB
export async function saveUserToDB(user: {
  id: string;
  email: string;
  name: string;
  phone_number: string;
}) {
  try {
    const newUser = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      user.id,
      user
    );

    return newUser;
  } catch (error) {
    console.log(error);
  }
}

// ============================== SIGN IN
export async function signInAccount(user: { email: string; password: string }) {
  try {
    // 1. التحقق من صحة إدخال المستخدم
    if (!user.email || !user.password) {
      throw new Error("بريد إلكتروني أو كلمة مرور غير صحيحة"); // أو تقديم رسالة خطأ أكثر دقة
    }

    // 2. محاولة إنشاء الجلسة
    const session = await account.createEmailPasswordSession(
      user.email,
      user.password
    );

    // 3. تخزين معرف الجلسة بشكل آمن
    await AsyncStorage.setItem("cookieFallback", session.$id);

    // 4. إرجاع كائن الجلسة
    return session;
  } catch (error) {
    // 5. معالجة الأخطاء بذكاء
    console.error("فشل تسجيل الدخول:", error); // تسجيل الدخول للتصحيح
    throw error; // إعادة طرحها للسماح بالمعالجة في الكود المُستدعي
  }
}

// ============================== GET ACCOUNT (بافتراض وجود كائن "account")
export async function getAccount() {
  try {
    const currentAccount = await account.get();
    return currentAccount;
  } catch (error) {
    console.error("خطأ في جلب الحساب:", error);
    throw error; // إعادة رمي للتعامل مع الكود المتصل (اختياري)
  }
}

// ============================== GET USER
export async function getCurrentUser() {
  try {
    const currentAccount = await getAccount();

    if (!currentAccount) throw Error;

    // const currentUser = await databases.listDocuments(
    //   appwriteConfig.databaseId,
    //   appwriteConfig.userCollectionId,
    // );

    const currentUser = await databases.getDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      currentAccount.$id
    );

    if (!currentUser) throw Error;
    console.log(currentUser);

    return currentUser;
  } catch (error) {
    console.log(error);
    return null;
  }
}

// ============================== SIGN OUT
export async function signOutAccount() {
  try {
    const session = await account.deleteSession("current");

    return session;
  } catch (error) {
    console.log(error);
  }
}

// // ============================================================
// // POSTS
// // ============================================================

// // ============================== CREATE POST
// export async function createPost(post: INewPost) {
//   try {
//     // Upload file to appwrite storage
//     const uploadedFile = await uploadFile(post.file[0]);

//     if (!uploadedFile) throw Error;

//     // Get file url
//     const fileUrl = getFilePreview(uploadedFile.$id);
//     if (!fileUrl) {
//       await deleteFile(uploadedFile.$id);
//       throw Error;
//     }

//     // Convert tags into array
//     const tags = post.tags?.replace(/ /g, "").split(",") || [];

//     // Create post
//     const newPost = await databases.createDocument(
//       appwriteConfig.databaseId,
//       appwriteConfig.postCollectionId,
//       ID.unique(),
//       {
//         creator: post.userId,
//         caption: post.caption,
//         imageUrl: fileUrl,
//         imageId: uploadedFile.$id,
//         location: post.location,
//         tags: tags,
//       }
//     );

//     if (!newPost) {
//       await deleteFile(uploadedFile.$id);
//       throw Error;
//     }

//     return newPost;
//   } catch (error) {
//     console.log(error);
//   }
// }

// // ============================== UPLOAD FILE
// export async function uploadFile(file: File) {
//   try {
//     const uploadedFile = await storage.createFile(
//       appwriteConfig.storageId,
//       ID.unique(),
//       file
//     );

//     return uploadedFile;
//   } catch (error) {
//     console.log(error);
//   }
// }

// // ============================== GET FILE URL
// export function getFilePreview(fileId: string) {
//   try {
//     const fileUrl = storage.getFilePreview(
//       appwriteConfig.storageId,
//       fileId,
//       2000,
//       2000,
//       "top",
//       100
//     );

//     if (!fileUrl) throw Error;

//     return fileUrl;
//   } catch (error) {
//     console.log(error);
//   }
// }

// // ============================== DELETE FILE
// export async function deleteFile(fileId: string) {
//   try {
//     await storage.deleteFile(appwriteConfig.storageId, fileId);

//     return { status: "ok" };
//   } catch (error) {
//     console.log(error);
//   }
// }

// // ============================== GET POSTS
// export async function searchPosts(searchTerm: string) {
//   try {
//     const posts = await databases.listDocuments(
//       appwriteConfig.databaseId,
//       appwriteConfig.postCollectionId,
//       [Query.search("caption", searchTerm)]
//     );

//     if (!posts) throw Error;

//     return posts;
//   } catch (error) {
//     console.log(error);
//   }
// }

// export async function getInfinitePosts({ pageParam }: { pageParam: number }) {
//   const queries: any[] = [Query.orderDesc("$updatedAt"), Query.limit(9)];

//   if (pageParam) {
//     queries.push(Query.cursorAfter(pageParam.toString()));
//   }

//   try {
//     const posts = await databases.listDocuments(
//       appwriteConfig.databaseId,
//       appwriteConfig.postCollectionId,
//       queries
//     );

//     if (!posts) throw Error;

//     return posts;
//   } catch (error) {
//     console.log(error);
//   }
// }

// // ============================== GET POST BY ID
// export async function getPostById(postId?: string) {
//   if (!postId) throw Error;

//   try {
//     const post = await databases.getDocument(
//       appwriteConfig.databaseId,
//       appwriteConfig.postCollectionId,
//       postId
//     );

//     if (!post) throw Error;

//     return post;
//   } catch (error) {
//     console.log(error);
//   }
// }

// // ============================== UPDATE POST
// export async function updatePost(post: IUpdatePost) {
//   const hasFileToUpdate = post.file.length > 0;

//   try {
//     let image = {
//       imageUrl: post.imageUrl,
//       imageId: post.imageId,
//     };

//     if (hasFileToUpdate) {
//       // Upload new file to appwrite storage
//       const uploadedFile = await uploadFile(post.file[0]);
//       if (!uploadedFile) throw Error;

//       // Get new file url
//       const fileUrl = getFilePreview(uploadedFile.$id);
//       if (!fileUrl) {
//         await deleteFile(uploadedFile.$id);
//         throw Error;
//       }

//       image = { ...image, imageUrl: fileUrl, imageId: uploadedFile.$id };
//     }

//     // Convert tags into array
//     const tags = post.tags?.replace(/ /g, "").split(",") || [];

//     //  Update post
//     const updatedPost = await databases.updateDocument(
//       appwriteConfig.databaseId,
//       appwriteConfig.postCollectionId,
//       post.postId,
//       {
//         caption: post.caption,
//         imageUrl: image.imageUrl,
//         imageId: image.imageId,
//         location: post.location,
//         tags: tags,
//       }
//     );

//     // Failed to update
//     if (!updatedPost) {
//       // Delete new file that has been recently uploaded
//       if (hasFileToUpdate) {
//         await deleteFile(image.imageId);
//       }

//       // If no new file uploaded, just throw error
//       throw Error;
//     }

//     // Safely delete old file after successful update
//     if (hasFileToUpdate) {
//       await deleteFile(post.imageId);
//     }

//     return updatedPost;
//   } catch (error) {
//     console.log(error);
//   }
// }

// // ============================== DELETE POST
// export async function deletePost(postId?: string, imageId?: string) {
//   if (!postId || !imageId) return;

//   try {
//     const statusCode = await databases.deleteDocument(
//       appwriteConfig.databaseId,
//       appwriteConfig.postCollectionId,
//       postId
//     );

//     if (!statusCode) throw Error;

//     await deleteFile(imageId);

//     return { status: "Ok" };
//   } catch (error) {
//     console.log(error);
//   }
// }

// // ============================== LIKE / UNLIKE POST
// export async function likePost(postId: string, likesArray: string[]) {
//   try {
//     const updatedPost = await databases.updateDocument(
//       appwriteConfig.databaseId,
//       appwriteConfig.postCollectionId,
//       postId,
//       {
//         likes: likesArray,
//       }
//     );

//     if (!updatedPost) throw Error;

//     return updatedPost;
//   } catch (error) {
//     console.log(error);
//   }
// }

// // ============================== SAVE POST
// export async function savePost(userId: string, postId: string) {
//   try {
//     const updatedPost = await databases.createDocument(
//       appwriteConfig.databaseId,
//       appwriteConfig.savesCollectionId,
//       ID.unique(),
//       {
//         user: userId,
//         post: postId,
//       }
//     );

//     if (!updatedPost) throw Error;

//     return updatedPost;
//   } catch (error) {
//     console.log(error);
//   }
// }
// // ============================== DELETE SAVED POST
// export async function deleteSavedPost(savedRecordId: string) {
//   try {
//     const statusCode = await databases.deleteDocument(
//       appwriteConfig.databaseId,
//       appwriteConfig.savesCollectionId,
//       savedRecordId
//     );

//     if (!statusCode) throw Error;

//     return { status: "Ok" };
//   } catch (error) {
//     console.log(error);
//   }
// }

// // ============================== GET USER'S POST
// export async function getUserPosts(userId?: string) {
//   if (!userId) return;

//   try {
//     const post = await databases.listDocuments(
//       appwriteConfig.databaseId,
//       appwriteConfig.postCollectionId,
//       [Query.equal("creator", userId), Query.orderDesc("$createdAt")]
//     );

//     if (!post) throw Error;

//     return post;
//   } catch (error) {
//     console.log(error);
//   }
// }

// // ============================== GET POPULAR POSTS (BY HIGHEST LIKE COUNT)
// export async function getRecentPosts() {
//   try {
//     const posts = await databases.listDocuments(
//       appwriteConfig.databaseId,
//       appwriteConfig.postCollectionId,
//       [Query.orderDesc("$createdAt"), Query.limit(20)]
//     );

//     if (!posts) throw Error;

//     return posts;
//   } catch (error) {
//     console.log(error);
//   }
// }

// // ============================================================
// // USER
// // ============================================================

// // ============================== GET USERS
// export async function getUsers(limit?: number) {
//   const queries: any[] = [Query.orderDesc("$createdAt")];

//   if (limit) {
//     queries.push(Query.limit(limit));
//   }

//   try {
//     const users = await databases.listDocuments(
//       appwriteConfig.databaseId,
//       appwriteConfig.userCollectionId,
//       queries
//     );

//     if (!users) throw Error;

//     return users;
//   } catch (error) {
//     console.log(error);
//   }
// }

// // ============================== GET USER BY ID
// export async function getUserById(userId: string) {
//   try {
//     const user = await databases.getDocument(
//       appwriteConfig.databaseId,
//       appwriteConfig.userCollectionId,
//       userId
//     );

//     if (!user) throw Error;

//     return user;
//   } catch (error) {
//     console.log(error);
//   }
// }

// // ============================== UPDATE USER
// export async function updateUser(user: IUpdateUser) {
//   const hasFileToUpdate = user.file.length > 0;
//   try {
//     let image = {
//       imageUrl: user.imageUrl,
//       imageId: user.imageId,
//     };

//     if (hasFileToUpdate) {
//       // Upload new file to appwrite storage
//       const uploadedFile = await uploadFile(user.file[0]);
//       if (!uploadedFile) throw Error;

//       // Get new file url
//       const fileUrl = getFilePreview(uploadedFile.$id);
//       if (!fileUrl) {
//         await deleteFile(uploadedFile.$id);
//         throw Error;
//       }

//       image = { ...image, imageUrl: fileUrl, imageId: uploadedFile.$id };
//     }

//     //  Update user
//     const updatedUser = await databases.updateDocument(
//       appwriteConfig.databaseId,
//       appwriteConfig.userCollectionId,
//       user.userId,
//       {
//         name: user.name,
//         bio: user.bio,
//         imageUrl: image.imageUrl,
//         imageId: image.imageId,
//       }
//     );

//     // Failed to update
//     if (!updatedUser) {
//       // Delete new file that has been recently uploaded
//       if (hasFileToUpdate) {
//         await deleteFile(image.imageId);
//       }
//       // If no new file uploaded, just throw error
//       throw Error;
//     }

//     // Safely delete old file after successful update
//     if (user.imageId && hasFileToUpdate) {
//       await deleteFile(user.imageId);
//     }

//     return updatedUser;
//   } catch (error) {
//     console.log(error);
//   }
// }
