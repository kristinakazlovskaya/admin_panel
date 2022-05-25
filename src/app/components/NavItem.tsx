import React from "react";
import { Icon, Button, FlexProps } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { Link } from "react-router-dom";

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: React.ReactText;
  path: string;
}

const NavItem: React.FC<NavItemProps> = ({ icon, path, children }) => {
  return (
    <Link to={path}>
      <Button
        colorScheme="teal"
        variant="ghost"
        w="full"
        justifyContent="flex-start"
        leftIcon={<Icon as={icon} />}
        role="group"
        _hover={{
          bg: "teal",
          color: "white",
        }}
      >
        {children}
      </Button>
    </Link>
  );
};

export default NavItem;
