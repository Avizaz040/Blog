import { createContext, useState } from 'react';


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showWriteBlogs, setShowWriteBlogs] = useState(false);
  const [theme, setTheme] = useState("light");

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, showWriteBlogs, setShowWriteBlogs, theme, setTheme }}>
      {children}
    </AuthContext.Provider>
  );
};
