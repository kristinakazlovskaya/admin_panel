import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { Box, Button, Heading, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {
  Spinner,
  Pagination,
  Column,
  Table,
  Actions,
  EditAction,
  DeleteAction,
  ShowAction,
} from "app/components";
import { useQueryParams } from "app/hooks";
import { operations, Types } from "./duck";

const AlbumsList: React.FC = () => {
  const [currentPage, limit] = useQueryParams("page", "limit");

  const { loading, data } = useQuery<
    Types.GetAlbumsQuery,
    Types.GetAlbumsQueryVariables
  >(operations.getAlbums, {
    variables: { page: Number(currentPage) || 1, limit: Number(limit) || 10 },
  });

  const [deleteAlbum, { loading: mutationLoading }] = useMutation<
    Types.DeleteAlbumMutation,
    Types.DeleteAlbumMutationVariables
  >(operations.deleteAlbum);

  const onDelete = (record: Record<string, unknown>) =>
    deleteAlbum({ variables: { id: String(record?.id) } });

  if (loading) return <Spinner />;

  if (data?.albums?.data) {
    return (
      <>
        <Flex mb="4" justify="space-between">
          <Heading>Albums</Heading>
          <Link to="create">
            <Button colorScheme="teal" my="2">
              Create album
            </Button>
          </Link>
        </Flex>
        <Table data={data.albums.data}>
          <Column label="ID" dataKey="id" />
          <Column label="Title" dataKey="title" />
          <Column label="Username" dataKey="user.username" />
          <Column label="Number of photos" dataKey="photos.data.length" />
          <Actions>
            <EditAction />
            <DeleteAction
              onDelete={onDelete}
              loading={mutationLoading}
              alertHeading="Delete album"
            />
            <ShowAction />
          </Actions>
        </Table>
        <Box mt="2">
          <Pagination totalCount={data.albums.meta?.totalCount || 0} />
        </Box>
      </>
    );
  }

  return <p>Error</p>;
};

export default AlbumsList;
