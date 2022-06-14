import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { Flex, Box, Heading, Button, useToast } from "@chakra-ui/react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { BackButton, Form, Input, Select, Spinner } from "app/components";
import {
  operations as getUsersOperation,
  Types as getUsersTypes,
} from "../../duck";
import { operations, Types, schema } from "./duck";

const EditAlbumPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const toast = useToast();

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

  const [updateAlbum, { loading: mutationLoading }] = useMutation<
    Types.UpdateAlbumMutation,
    Types.UpdateAlbumMutationVariables
  >(operations.updateAlbum);

  if (usersLoading || albumLoading) return <Spinner />;

  if (usersData?.users?.data && albumData?.album) {
    return (
      <>
        <Flex justify="space-between">
          <Heading mb="4">Edit album</Heading>
          <BackButton />
        </Flex>

        <Box w="500px">
          <Form
            onSubmit={async (values) => {
              try {
                await updateAlbum({
                  variables: {
                    title: values.title,
                    userId: values.user,
                    id: id ?? "",
                  },
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
            <Input
              name="title"
              label="Title"
              defaultValue={albumData.album.title || ""}
              bg="white"
            />
            <Select
              name="user"
              label="User"
              options={usersData.users.data}
              optionsValueKey="id"
              optionsLabelKey="username"
              defaultValue={albumData.album.user?.id || ""}
              bg="white"
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

export default EditAlbumPage;
