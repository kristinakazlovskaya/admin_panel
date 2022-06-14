import React from "react";
import { Container, Flex, Box, Heading, Button } from "@chakra-ui/react";
import { Form, Input } from "app/components/";
import { useAuth } from "app/hooks";
import schema from "./duck";

const LoginPage: React.FC = () => {
  const { signIn } = useAuth();

  const onSubmit = () => signIn();

  return (
    <Container
      maxW="container.xxl"
      bgGradient="linear(to-r, green.100, pink.300)"
    >
      <Flex h="100vh" align="center" justify="center">
        <Box p={10} w="500px" bgColor="white" borderRadius="lg">
          <Heading mb="4" textAlign="center">
            Log In
          </Heading>
          <Form onSubmit={onSubmit} validationSchema={schema}>
            <Input name="email" label="Email" />
            <Input name="password" label="Password" type="password" />
            <Button w="full" mt="4" colorScheme="teal" type="submit">
              Log In
            </Button>
          </Form>
        </Box>
      </Flex>
    </Container>
  );
};

export default LoginPage;
