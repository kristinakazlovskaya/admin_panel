import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { Button, Heading, Box, Flex } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { Select, Input, Form, Spinner, BackButton } from "app/components";
import {
  operations as getUsersOperation,
  Types as getUsersTypes,
} from "../duck";
import { operations, Types } from "./duck";

const schema = yup
  .object({
    title: yup
      .string()
      .required("This is required")
      .min(3, "Must be at least 3 characters")
      .max(64, "Must be less than 64 characters"),
    user: yup.string().required("This is required"),
  })
  .required();

const CreateAlbumPage: React.FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<Error | null>(null);

  const { loading, data } = useQuery<
    getUsersTypes.GetUsersQuery,
    getUsersTypes.GetUsersQueryVariables
  >(getUsersOperation.getUsers);

  const [createAlbum, { loading: mutationLoading }] = useMutation<
    Types.CreateAlbumMutation,
    Types.CreateAlbumMutationVariables
  >(operations.createAlbum);

  if (error) return <p>Something went wrong :(</p>;

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
              } catch (err) {
                if (err instanceof Error) setError(err);
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
              <Link to="/admin_panel/albums">
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
