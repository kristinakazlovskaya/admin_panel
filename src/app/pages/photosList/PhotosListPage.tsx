import React from "react";
import { useQuery } from "@apollo/client";
import { Image, Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import {
  Spinner,
  Table,
  Column,
  Actions,
  Pagination,
  ShowPhotoAction,
} from "app/components";
import { useQueryParams } from "app/hooks";
import { Types, operations } from "./duck";

const PhotosListPage: React.FC = () => {
  const { id } = useParams();
  const [currentPage, limit] = useQueryParams("page", "limit");

  const { data, loading } = useQuery<
    Types.GetPhotosQuery,
    Types.GetPhotosQueryVariables
  >(operations.getPhotos, {
    variables: {
      id: id || "",
      page: Number(currentPage) || 1,
      limit: Number(limit) || 10,
    },
  });

  if (loading) return <Spinner />;

  if (data?.album?.photos?.data) {
    return (
      <>
        <Table data={data.album.photos?.data}>
          <Column dataKey="id" label="ID" />
          <Column dataKey="title" label="Title" />
          <Column
            dataKey="thumbnailUrl"
            label="Preview"
            render={(value) => (
              <Image boxSize="50px" src={value} alt="Photo preview" />
            )}
          />
          <Actions>
            <ShowPhotoAction />
          </Actions>
        </Table>
        <Box mt="2">
          <Pagination totalCount={data.album.photos.meta?.totalCount || 0} />
        </Box>
      </>
    );
  }

  return <p>Error</p>;
};

export default PhotosListPage;
