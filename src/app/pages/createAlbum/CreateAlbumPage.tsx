import React, { useEffect } from "react";
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

  const { loading, data } = useQuery<
    getUsersTypes.GetUsersQuery,
    getUsersTypes.GetUsersQueryVariables
  >(getUsersOperation.getUsers);

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
      <Box py="4">
        <Flex justify="space-between">
          <Heading mb="4">Create album</Heading>
          <BackButton />
        </Flex>

        <Box w="500px">
          <Form
            onSubmit={(values) => {
              createAlbum({
                variables: { title: values.title, userId: values.user },
              });
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
      </Box>
    );
  }

  return <p>Error</p>;
};

export default CreateAlbumPage;
