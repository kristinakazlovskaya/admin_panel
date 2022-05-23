import React from "react";
import useAuth from "../hooks/useAuth";

const LoginPage: React.FC = () => {
  const auth = useAuth();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    auth.signIn();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input id="email" name="email" />
      <label htmlFor="username">Email</label>
      <input id="password" name="password" type="password" />
      <label htmlFor="password">Пароль</label>
      <input type="submit" value="Войти" />
    </form>
  );
};

export default LoginPage;
