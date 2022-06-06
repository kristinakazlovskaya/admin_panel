import React, { useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { Button, Heading, Box, Flex } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { SubmitButton, Select, Input, Form, Spinner } from "app/components";
import { operations, Types } from "./duck";

const schema = yup
  .object({
    title: yup.string().required("This is required").min(3).max(64),
    user: yup.string().required("This is required"),
  })
  .required();

const CreateAlbumPage: React.FC = () => {
  const navigate = useNavigate();

  const { loading, data } = useQuery<
    Types.GetUsersQuery,
    Types.GetUsersQueryVariables
  >(operations.getUsers);

  const [createAlbum, { data: mutationData, loading: mutationLoading }] =
    useMutation<Types.CreateAlbumMutation, Types.CreateAlbumMutationVariables>(
      operations.createAlbum
    );

  useEffect(() => {
    if (mutationData?.createAlbum) navigate("/admin_panel/albums");
  }, [mutationData?.createAlbum, navigate]);

  if (!data || loading) return <Spinner />;

  if (data.users?.data) {
    return (
      <Flex h="100vh" align="center" justify="center">
        <Box p="10" w="500px" bgColor="white" borderRadius="lg">
          <Heading mb="4" size="sm" textAlign="center">
            Create album
          </Heading>
          <Form
            onSubmit={() => {
              createAlbum({ variables: { title: "test", userId: "1" } });
            }}
            validationSchema={schema}
          >
            <Input name="title" label="Title" />
            <Select
              name="user"
              label="User"
              data={data.users.data}
              dataValueKey="id"
              dataLabelKey="username"
            />
            <Flex justify="end">
              <SubmitButton
                isLoading={mutationLoading}
                mt="4"
                mr="2"
                colorScheme="teal"
                type="submit"
              >
                Submit
              </SubmitButton>
              <Link to="/admin_panel/albums">
                <Button mt="4">Cancel</Button>
              </Link>
            </Flex>
          </Form>
        </Box>
      </Flex>
    );
  }

  return <code>data.users = null</code>;
};

export default CreateAlbumPage;

// get values from inputs and pass them to useMutation
