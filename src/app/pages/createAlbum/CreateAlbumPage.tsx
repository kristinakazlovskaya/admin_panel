import React, { useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { Button, Heading, Box, Flex } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { Select, Input, Form, Spinner } from "app/components";
import {
  operations as getUsersOperation,
  Types as getUsersTypes,
} from "../duck";
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
      <Flex h="100vh" align="center" justify="center">
        <Box p="10" w="500px" bgColor="white" borderRadius="lg">
          <Heading mb="6" size="md">
            Create album
          </Heading>
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
            <Flex mt="6" justify="end">
              <Link to="/admin_panel/albums">
                <Button>Cancel</Button>
              </Link>
              <Button
                isLoading={mutationLoading}
                ml="3"
                colorScheme="teal"
                type="submit"
              >
                Submit
              </Button>
            </Flex>
          </Form>
        </Box>
      </Flex>
    );
  }

  return <p>Error</p>;
};

export default CreateAlbumPage;
