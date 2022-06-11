import React, { useState } from "react";
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
  const [error, setError] = useState<Error | null>(null);

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

  if (error) return <p>Something went wrong :(</p>;

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
              } catch (err) {
                if (err instanceof Error) setError(err);
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
