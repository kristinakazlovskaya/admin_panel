import React from "react";
import { Outlet } from "react-router-dom";

const MainPage: React.FC = () => {
  return (
    <>
      <aside>Main page sidebar</aside>
      <Outlet />
    </>
  );
};

export default MainPage;
