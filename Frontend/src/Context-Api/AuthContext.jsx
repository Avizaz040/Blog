import { createContext, useState, useEffect } from "react";
import checkAPI from "../Utils/Api"; // Assuming you have a utility function for API calls

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showWriteBlogs, setShowWriteBlogs] = useState(false);
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState("light");
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // Optionally validate token with backend
      setUser({ token }); // or get user info from backend
    }
  }, []);
  

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        showWriteBlogs,
        setShowWriteBlogs,
        theme,
        setTheme,
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
