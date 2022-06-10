/* eslint-disable */
import * as Types from "../../../../schema.generated";

export type GetAlbumDataQueryVariables = Types.Exact<{
  id: Types.Scalars["ID"];
}>;

export type GetAlbumDataQuery = {
  album?: Types.Maybe<
    Pick<Types.Album, "title" | "id"> & {
      user?: Types.Maybe<Pick<Types.User, "id" | "username" | "name">>;
    }
  >;
};
