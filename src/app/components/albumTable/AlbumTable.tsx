import React from "react";
import { useQuery } from "@apollo/client";
import Table from "../table";
import { operations, Types } from "./duck";

const AlbumTable: React.FC = () => {
  const { loading, error, data } = useQuery<
    Types.GetAlbumsQuery,
    Types.GetAlbumsQueryVariables
  >(operations.getAlbums);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error!(</p>;

  if (data?.albums?.data) {
    const content = data.albums.data.map((album) => ({
      id: album?.id,
      title: album?.title,
      username: album?.user?.username,
      pagesCount: album?.photos?.data?.length,
      actions: "[actions]",
    }));

    const headers = ["ID", "Title", "Username", "Number of photos", ""];

    return <Table headers={headers} content={content} />;
  }

  return <code>data.albums = null</code>;
};

export default AlbumTable;
