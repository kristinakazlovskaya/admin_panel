/* eslint-disable */
import * as Types from "../../../../schema.generated";

export type UpdateAlbumMutationVariables = Types.Exact<{
  id: Types.Scalars["ID"];
  userId: Types.Scalars["ID"];
  title: Types.Scalars["String"];
}>;

export type UpdateAlbumMutation = {
  updateAlbum?: Types.Maybe<
    Pick<Types.Album, "id" | "title"> & {
      user?: Types.Maybe<Pick<Types.User, "id">>;
    }
  >;
};

export type GetAlbumQueryVariables = Types.Exact<{
  id: Types.Scalars["ID"];
}>;

export type GetAlbumQuery = {
  album?: Types.Maybe<
    Pick<Types.Album, "id" | "title"> & {
      user?: Types.Maybe<Pick<Types.User, "id">>;
    }
  >;
};
