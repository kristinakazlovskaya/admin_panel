import React from "react";
import {
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
  Heading,
  BoxProps,
  Button,
  Spacer,
} from "@chakra-ui/react";
import { IconType } from "react-icons";
import { IoCreateOutline } from "react-icons/io5";
import { MdOutlinePhotoAlbum } from "react-icons/md";
import useAuth from "../hooks/useAuth";
import NavItem from "./NavItem";

interface LinkItemProps {
  name: string;
  icon: IconType;
  path: string;
}

const LinkItems: Array<LinkItemProps> = [
  { name: "Albums", icon: MdOutlinePhotoAlbum, path: "albums" },
  { name: "Create album", icon: IoCreateOutline, path: "albums/create" },
];

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onClose, ...rest }) => {
  const { signOut } = useAuth();

  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      px={4}
      {...rest}
    >
      <Flex direction="column" h="100vh">
        <Flex h="20" alignItems="center" justifyContent="space-between">
          <Heading size="md">Admin Panel</Heading>
          <CloseButton
            display={{ base: "flex", md: "none" }}
            onClick={onClose}
          />
        </Flex>
        {LinkItems.map((link) => (
          <NavItem key={link.name} icon={link.icon} path={link.path}>
            {link.name}
          </NavItem>
        ))}
        <Spacer />
        <Button w="full" mb={4} colorScheme="teal" onClick={signOut}>
          Log Out
        </Button>
      </Flex>
    </Box>
  );
};

export default Sidebar;
