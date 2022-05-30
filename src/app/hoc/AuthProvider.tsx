import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

interface AuthContextInterface {
  user: boolean;
  signIn: () => void;
  signOut: () => void;
}

export interface AuthProviderProps {
  children: React.ReactElement;
}

export const AuthContext = createContext(
  null as unknown as AuthContextInterface
);

const isAuthorized = (): boolean => {
  if (localStorage.getItem("fake-token")) {
    return true;
  }

  return false;
};

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<boolean>(isAuthorized);

  const navigate = useNavigate();

  const signIn = () => {
    localStorage.setItem("fake-token", new Date().toString());
    setUser(true);
    navigate("/admin_panel", { replace: true });
  };

  const signOut = () => {
    localStorage.removeItem("fake-token");
    setUser(false);
  };

  const value: AuthContextInterface = { user, signIn, signOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
