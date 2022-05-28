import React from "react";
import { Container, Flex, Box, Heading, Button } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Form from "../components/form";
import Input from "../components/input";
import useAuth from "../hooks/useAuth";

const schema = yup
  .object({
    email: yup
      .string()
      .required("This is required")
      .email("Must be a valid email"),
    password: yup.string().required("This is required"),
  })
  .required();

const LoginPage: React.FC = () => {
  const { signIn } = useAuth();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit(() => signIn());

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
          <Form onSubmit={onSubmit}>
            <Input
              name="email"
              label="Email"
              error={errors.email}
              rules={{
                pattern:
                  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              }}
              register={register}
            />
            <Input
              mt="2"
              name="password"
              label="Password"
              error={errors.password}
              register={register}
            />
            <Button
              w="full"
              mt={4}
              colorScheme="teal"
              isLoading={isSubmitting}
              type="submit"
            >
              Log In
            </Button>
          </Form>
        </Box>
      </Flex>
    </Container>
  );
};

export default LoginPage;
