import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { Box, Button } from "@chakra-ui/react";
import { useSearchParams, Link } from "react-router-dom";
import {
  Spinner,
  Pagination,
  Column,
  Table,
  Actions,
  EditAction,
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
    const content = data.albums.data.map((album) => ({
      id: album?.id,
      title: album?.title,
      username: album?.user?.username,
      pagesCount: album?.photos?.data?.length,
    }));

    return (
      <Box py="4">
        <Table data={content}>
          <Column label="ID" dataKey="id" />
          <Column label="Title" dataKey="title" />
          <Column label="Username" dataKey="username" />
          <Column label="Number of photos" dataKey="pagesCount" />
          <Actions>
            <EditAction />
          </Actions>
        </Table>
        <Link to="../albums/create">
          <Button colorScheme="teal" my="2">
            Create album
          </Button>
        </Link>
        <Pagination
          albumsCount={data.albums.meta?.totalCount || 0}
          setParams={setParams}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          pageSize={pageSize}
          setPageSize={setPageSize}
        />
      </Box>
    );
  }

  return <p>Error</p>;
};

export default AlbumsList;
