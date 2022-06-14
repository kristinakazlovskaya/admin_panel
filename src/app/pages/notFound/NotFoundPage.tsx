import React from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useAuth } from "app/hooks";

const NotFoundPage: React.FC = () => {
  const auth = useAuth();

  return (
    <Flex h="100vh" direction="column" justify="center" align="center">
      <Heading as="h1" size="4xl">
        404
      </Heading>
      <Heading as="h2">Not Found</Heading>
      <Text>
        Go to{" "}
        <Link
          to={
            auth.isAuthorizedUser ? "/admin_panel/albums" : "/admin_panel/login"
          }
          style={{ textDecoration: "underline", color: "teal" }}
        >
          home page
        </Link>
      </Text>
    </Flex>
  );
};

export default NotFoundPage;
