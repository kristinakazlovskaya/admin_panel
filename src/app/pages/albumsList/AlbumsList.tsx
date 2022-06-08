import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { Box, Button, Heading, Flex } from "@chakra-ui/react";
import { useSearchParams, Link } from "react-router-dom";
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
import { operations, Types } from "./duck";

const AlbumsList: React.FC = () => {
  const [params, setParams] = useSearchParams();

  const [currentPage, setCurrentPage] = useState<number>(
    Number(params.get("page")) || 1
  );
  const [pageSize, setPageSize] = useState<number>(
    Number(params.get("limit")) || 10
  );

  const { loading, data } = useQuery<
    Types.GetAlbumsQuery,
    Types.GetAlbumsQueryVariables
  >(operations.getAlbums, {
    variables: { page: currentPage, limit: pageSize },
  });

  if (!data || loading) return <Spinner />;

  if (data?.albums?.data) {
    return (
      <Box py="4">
        <Flex mb="4" justify="space-between">
          <Heading>Albums</Heading>
          <Link to="../albums/create">
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
            <DeleteAction />
            <ShowAction />
          </Actions>
        </Table>
        <Box mt="2">
          <Pagination
            albumsCount={data.albums.meta?.totalCount || 0}
            setParams={setParams}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            pageSize={pageSize}
            setPageSize={setPageSize}
          />
        </Box>
      </Box>
    );
  }

  return <p>Error</p>;
};

export default AlbumsList;
