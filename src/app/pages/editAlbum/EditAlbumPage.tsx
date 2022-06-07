import React, { useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { Flex, Box, Heading, Button } from "@chakra-ui/react";
import { Link, useParams, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { Form, Input, Select, Spinner } from "app/components";
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

const EditAlbumPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { loading: usersLoading, data: usersData } = useQuery<
    getUsersTypes.GetUsersQuery,
    getUsersTypes.GetUsersQueryVariables
  >(getUsersOperation.getUsers);

  const { loading: albumLoading, data: albumData } = useQuery<
    Types.GetAlbumQuery,
    Types.GetAlbumQueryVariables
  >(operations.getAlbum, {
    variables: { id: id ?? "" },
  });

  const [updateAlbum, { data: mutationData, loading: mutationLoading }] =
    useMutation<Types.UpdateAlbumMutation, Types.UpdateAlbumMutationVariables>(
      operations.updateAlbum
    );

  useEffect(() => {
    if (mutationData?.updateAlbum) navigate("/admin_panel/albums");
  }, [mutationData?.updateAlbum, navigate]);

  if (!usersData || usersLoading || !albumData || albumLoading)
    return <Spinner />;

  if (usersData?.users?.data && albumData?.album) {
    return (
      <Flex h="100vh" align="center" justify="center">
        <Box p="10" w="500px" bgColor="white" borderRadius="lg">
          <Heading mb="6" size="md">
            Edit album
          </Heading>
          <Form
            onSubmit={(values) => {
              updateAlbum({
                variables: {
                  title: values.title,
                  userId: values.user,
                  id: id ?? "",
                },
              });
            }}
            validationSchema={schema}
            defaultValues={{
              title: albumData.album.title,
              user: albumData.album.user?.id,
            }}
          >
            <Input name="title" label="Title" />
            <Select
              name="user"
              label="User"
              data={usersData.users.data}
              dataValueKey="id"
              dataLabelKey="username"
            />
            <Flex justify="end" mt="6">
              <Link to="/admin_panel/albums">
                <Button>Cancel</Button>
              </Link>
              <Button
                isLoading={mutationLoading}
                ml="3"
                colorScheme="teal"
                type="submit"
              >
                Edit
              </Button>
            </Flex>
          </Form>
        </Box>
      </Flex>
    );
  }

  return <p>Error</p>;
};

export default EditAlbumPage;
