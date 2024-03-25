import { Client, Account, Databases, Storage } from "appwrite";

import {
  APPWRITE_URL,
  APPWRITE_PROJECT_ID,
  PPWRITE_USER_COL,
  APPWRITE_DATABASE_ID,
  APPWRITE_STORAGE_ID,
} from "@env";

export const appwriteConfig = {
  url: APPWRITE_URL,
  projectId: APPWRITE_PROJECT_ID,
  databaseId: APPWRITE_DATABASE_ID,
  storageId: APPWRITE_STORAGE_ID,
  userCollectionId: PPWRITE_USER_COL,
};

export const client = new Client();

client.setEndpoint(appwriteConfig.url);
client.setProject(appwriteConfig.projectId);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
