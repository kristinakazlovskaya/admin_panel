import React from "react";
import { Box, Flex, useColorModeValue, Button, Icon } from "@chakra-ui/react";
import { BiPhotoAlbum } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useAuth } from "app/hooks";

const Sidebar: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: 40, md: 60 }}
      pos="fixed"
      px="4"
    >
      <Flex direction="column" justifyContent="space-between" h="100vh">
        <Box mt="4">
          <Link to="albums">
            <Button
              colorScheme="teal"
              variant="ghost"
              w="full"
              justifyContent="flex-start"
              leftIcon={<Icon as={BiPhotoAlbum} />}
              role="group"
              _hover={{
                bg: "teal",
                color: "white",
              }}
            >
              Albums
            </Button>
          </Link>
        </Box>
        <Button w="full" mb={4} colorScheme="teal" onClick={signOut}>
          Log Out
        </Button>
      </Flex>
    </Box>
  );
};

export default Sidebar;
