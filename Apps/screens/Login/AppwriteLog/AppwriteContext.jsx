import React, { createContext, useState, useContext } from "react";

const AppwriteContext = createContext({
  appwrite: null, // Initialize with null to avoid potential errors
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});

export const AppwriteProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const appwrite = useContext(AppwriteContext) || new AppwriteService(); // Fallback for nested contexts

  return (
    <AppwriteContext.Provider value={{ appwrite, isLoggedIn, setIsLoggedIn }}>
      {children}
    </AppwriteContext.Provider>
  );
};

export default AppwriteContext;
