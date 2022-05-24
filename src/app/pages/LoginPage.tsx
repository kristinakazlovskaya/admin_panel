import React from "react";
import { Container, Flex, Box, Heading } from "@chakra-ui/react";
import LoginForm from "../components/LoginForm";

const LoginPage: React.FC = () => {
  return (
    <Container
      maxW="container.xxl"
      bgGradient="linear(to-r, green.100, pink.300)"
    >
      <Flex h="100vh" align="center" justify="center">
        <Box p={10} w="500px" bgColor="white" borderRadius="lg">
          <Heading size="lg" textAlign="center">
            Log In
          </Heading>
          <LoginForm />
        </Box>
      </Flex>
    </Container>
  );
};

export default LoginPage;
