import React, { useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { Flex, Box, Heading, Button } from "@chakra-ui/react";
import { Link, useParams, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { BackButton, Form, Input, Select, Spinner } from "app/components";
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
      <Box py="4">
        <Flex justify="space-between">
          <Heading mb="4">Edit album</Heading>
          <BackButton />
        </Flex>

        <Box w="500px">
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
          >
            <Input
              name="title"
              label="Title"
              defaultValue={albumData.album.title || ""}
            />
            <Select
              name="user"
              label="User"
              data={usersData.users.data}
              dataValueKey="id"
              dataLabelKey="username"
              defaultValue={albumData.album.user?.id || ""}
            />

            <Box mt="4">
              <Button
                isLoading={mutationLoading}
                colorScheme="teal"
                type="submit"
                mr="2"
              >
                Edit
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

export default EditAlbumPage;
