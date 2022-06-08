import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
  Box,
  Heading,
  Flex,
} from "@chakra-ui/react";
import { useParams, useSearchParams } from "react-router-dom";
import {
  Spinner,
  Table,
  Column,
  Actions,
  BackButton,
  Pagination,
  ShowPhotoAction,
} from "app/components";
import { operations, Types } from "./duck";

const AlbumPage: React.FC = () => {
  const { id } = useParams();

  const [params, setParams] = useSearchParams();

  const [currentPage, setCurrentPage] = useState<number>(
    Number(params.get("page")) || 1
  );
  const [pageSize, setPageSize] = useState<number>(
    Number(params.get("limit")) || 10
  );

  const { data, loading } = useQuery<
    Types.GetPhotosQuery,
    Types.GetPhotosQueryVariables
  >(operations.getPhotos, {
    variables: { id: id ?? "", page: currentPage, limit: pageSize },
  });

  if (!data || loading) return <Spinner />;

  if (!data.album?.id) {
    return <Box pt="4">Error</Box>;
  }

  if (data.album.photos?.data) {
    return (
      <Box py="4">
        <Flex justify="space-between" mb="4">
          <Heading>Album: {data.album.title}</Heading>
          <BackButton />
        </Flex>

        <Tabs defaultIndex={1} variant="enclosed" colorScheme="teal">
          <TabList mb="1em">
            <Tab>Basic</Tab>
            <Tab>Photos</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Text>ID: {data.album.id}</Text>
              <Text>
                User: {data.album.user?.name} ({data.album.user?.username})
              </Text>
            </TabPanel>
            <TabPanel>
              <Table data={data.album.photos?.data}>
                <Column dataKey="id" label="ID" />
                <Column dataKey="title" label="Title" />
                <Column dataKey="thumbnailUrl" label="Preview" />
                <Actions>
                  <ShowPhotoAction />
                </Actions>
              </Table>
              <Box mt="2">
                <Pagination
                  albumsCount={data.album.photos.meta?.totalCount || 0}
                  setParams={setParams}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  pageSize={pageSize}
                  setPageSize={setPageSize}
                />
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    );
  }

  return <p>Error</p>;
};

export default AlbumPage;
