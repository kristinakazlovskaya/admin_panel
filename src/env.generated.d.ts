/* eslint-disable */

declare module "*/operations.gql" {
  import { DocumentNode } from "graphql";
  const defaultDocument: DocumentNode;
  export const createAlbum: DocumentNode;
  export const updateAlbum: DocumentNode;
  export const getAlbum: DocumentNode;
  export const getAlbums: DocumentNode;
  export const deleteAlbum: DocumentNode;
  export const getPhotos: DocumentNode;
  export const getAlbumData: DocumentNode;
  export const getUsers: DocumentNode;

  export default defaultDocument;
}
