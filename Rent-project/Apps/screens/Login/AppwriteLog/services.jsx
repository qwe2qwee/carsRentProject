import { ID, Account, Client } from "appwrite";
import Snackbar from "react-native-snackbar";
import Config from "react-native-config";

const appwriteClient = new Client();

const APPWRITE_ENDPOINT = Config.APPWRITE_ENDPOINT;

const APPWRITE_PROJECT_ID = Config.APPWRITE_PROJECT_ID;

class AppwriteService {
  account;

  constructor() {
    appwriteClient
      .setEndpoint(APPWRITE_ENDPOINT)
      .setProject(APPWRITE_PROJECT_ID);

    this.account = new Account(appwriteClient);
  }

  //     create a new record of user

  async createAccount({ email, password, name, phoneNumber }) {
    try {
      const userAccount = this.account.create(
        ID.unique(),
        name,
        phoneNumber,
        email,
        password
      );
      if (userAccount) {
        // login from login feature
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      Snackbar.show({
        text: error,
        duration: Snackbar.LENGTH_LONG,
      });
      console.log("Appwrite service :: createAccount() :: " + error);
    }
  }

  // login serverces
  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      Snackbar.show({
        text: error,
        duration: Snackbar.LENGTH_LONG,
      });
      console.log("Appwrite service :: loginAccount() :: " + error);
    }
  }

  // get the current user
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite service :: getCurrentAccount() :: " + error);
    }
  }

  async logout() {
    try {
      return await this.account.deleteSession("current");
    } catch (error) {
      console.log("Appwrite service :: deletssionAccount() :: " + error);
    }
  }
}

export default AppwriteService;
