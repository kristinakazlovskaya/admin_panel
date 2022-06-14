import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { Button, Heading, Box, Flex, useToast } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { Select, Input, Form, Spinner, BackButton } from "app/components";
import {
  operations as getUsersOperation,
  Types as getUsersTypes,
} from "../../duck";
import { operations, Types, schema } from "./duck";

const CreateAlbumPage: React.FC = () => {
  const navigate = useNavigate();
  const toast = useToast();

  const { loading, data } = useQuery<
    getUsersTypes.GetUsersQuery,
    getUsersTypes.GetUsersQueryVariables
  >(getUsersOperation.getUsers);

  const [createAlbum, { loading: mutationLoading }] = useMutation<
    Types.CreateAlbumMutation,
    Types.CreateAlbumMutationVariables
  >(operations.createAlbum);

  if (loading) return <Spinner />;

  if (data?.users?.data) {
    return (
      <>
        <Flex justify="space-between">
          <Heading mb="4">Create album</Heading>
          <BackButton />
        </Flex>

        <Box w="500px">
          <Form
            onSubmit={async (values) => {
              try {
                await createAlbum({
                  variables: { title: values.title, userId: values.user },
                });
                navigate("..");
              } catch {
                toast({
                  title: "Network Error",
                  status: "error",
                  isClosable: true,
                });
              }
            }}
            validationSchema={schema}
          >
            <Input name="title" label="Title" bg="white" />
            <Select
              name="user"
              label="User"
              options={data.users.data}
              optionsValueKey="id"
              optionsLabelKey="username"
              bg="white"
            />
            <Box mt="4">
              <Button
                isLoading={mutationLoading}
                mr="2"
                colorScheme="teal"
                type="submit"
              >
                Submit
              </Button>
              <Link to="..">
                <Button>Cancel</Button>
              </Link>
            </Box>
          </Form>
        </Box>
      </>
    );
  }

  return <p>Error</p>;
};

export default CreateAlbumPage;
