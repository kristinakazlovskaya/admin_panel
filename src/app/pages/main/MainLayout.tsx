import React from "react";
import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";

const MainLayout: React.FC = () => {
  return (
    <Box minH="100vh" bgGradient="linear(to-r, green.100, pink.300)">
      <Sidebar />
      <Box ml={{ base: 40, md: 60 }} p="4">
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
