/* eslint-disable */
import * as Types from "../../../../schema.generated";

export type GetAlbumsQueryVariables = Types.Exact<{
  page?: Types.Maybe<Types.Scalars["Int"]>;
  limit?: Types.Maybe<Types.Scalars["Int"]>;
}>;

export type GetAlbumsQuery = {
  albums?: Types.Maybe<{
    data?: Types.Maybe<
      Array<
        Types.Maybe<
          Pick<Types.Album, "id" | "title"> & {
            user?: Types.Maybe<Pick<Types.User, "id" | "username">>;
            photos?: Types.Maybe<{
              data?: Types.Maybe<Array<Types.Maybe<Pick<Types.Photo, "id">>>>;
            }>;
          }
        >
      >
    >;
    meta?: Types.Maybe<Pick<Types.PageMetadata, "totalCount">>;
  }>;
};

export type DeleteAlbumMutationVariables = Types.Exact<{
  id: Types.Scalars["ID"];
}>;

export type DeleteAlbumMutation = Pick<Types.Mutation, "deleteAlbum">;
