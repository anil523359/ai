/* eslint-disable */
import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [role, setRole] = useState('');
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        role,
        setRole,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
