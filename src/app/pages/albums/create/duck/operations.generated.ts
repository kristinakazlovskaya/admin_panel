/* eslint-disable */
import * as Types from "../../../../../schema.generated";

export type CreateAlbumMutationVariables = Types.Exact<{
  title: Types.Scalars["String"];
  userId: Types.Scalars["ID"];
}>;

export type CreateAlbumMutation = {
  createAlbum?: Types.Maybe<
    Pick<Types.Album, "id" | "title"> & {
      user?: Types.Maybe<Pick<Types.User, "id">>;
    }
  >;
};
