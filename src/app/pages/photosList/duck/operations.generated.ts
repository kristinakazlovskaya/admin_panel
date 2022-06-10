/* eslint-disable */
import * as Types from "../../../../schema.generated";

export type GetPhotosQueryVariables = Types.Exact<{
  id: Types.Scalars["ID"];
  page?: Types.Maybe<Types.Scalars["Int"]>;
  limit?: Types.Maybe<Types.Scalars["Int"]>;
}>;

export type GetPhotosQuery = {
  album?: Types.Maybe<
    Pick<Types.Album, "id"> & {
      photos?: Types.Maybe<{
        data?: Types.Maybe<
          Array<
            Types.Maybe<
              Pick<Types.Photo, "id" | "title" | "url" | "thumbnailUrl">
            >
          >
        >;
        meta?: Types.Maybe<Pick<Types.PageMetadata, "totalCount">>;
      }>;
    }
  >;
};
