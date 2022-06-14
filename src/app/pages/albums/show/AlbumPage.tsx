import React from "react";
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
import { useParams } from "react-router-dom";
import { Spinner, BackButton } from "app/components";
import { PhotosList } from "./components";
import { operations, Types } from "./duck";

const AlbumPage: React.FC = () => {
  const { id } = useParams();

  const { data, loading } = useQuery<
    Types.GetAlbumDataQuery,
    Types.GetAlbumDataQueryVariables
  >(operations.getAlbumData, {
    variables: {
      id: id || "",
    },
  });

  if (loading) return <Spinner />;

  if (!data?.album?.id) {
    return <Box>Error</Box>;
  }

  if (data.album) {
    return (
      <>
        <Flex justify="space-between" mb="4">
          <Heading>Album: {data.album.title}</Heading>
          <BackButton />
        </Flex>

        <Tabs variant="enclosed" colorScheme="teal">
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
              <PhotosList />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </>
    );
  }

  return <p>Error</p>;
};

export default AlbumPage;
