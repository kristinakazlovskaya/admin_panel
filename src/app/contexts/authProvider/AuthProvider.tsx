import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isAuthorized } from "./duck";

interface AuthContextInterface {
  isAuthorizedUser: boolean;
  signIn: () => void;
  signOut: () => void;
}

export const AuthContext = createContext(
  null as unknown as AuthContextInterface
);

const AuthProvider: React.FC = ({ children }) => {
  const [isAuthorizedUser, setIsUser] = useState<boolean>(isAuthorized);

  const navigate = useNavigate();

  const signIn = () => {
    localStorage.setItem("fake-token", new Date().toString());
    setIsUser(true);
    navigate("albums", { replace: true });
  };

  const signOut = () => {
    localStorage.removeItem("fake-token");
    setIsUser(false);
  };

  const value = { isAuthorizedUser, signIn, signOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
