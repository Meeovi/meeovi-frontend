import * as TypeGraphQL from "type-graphql";

export enum MediaScalarFieldEnum {
  id = "id",
  user_id = "user_id",
  media_folder_id = "media_folder_id",
  mime_type = "mime_type",
  file_extension = "file_extension",
  file_size = "file_size",
  meta_data = "meta_data",
  file_name = "file_name",
  media_type = "media_type",
  thumbnails_ro = "thumbnails_ro",
  "private" = "private",
  uploaded_at = "uploaded_at",
  created_at = "created_at",
  updated_at = "updated_at",
  path = "path"
}
TypeGraphQL.registerEnumType(MediaScalarFieldEnum, {
  name: "MediaScalarFieldEnum",
  description: undefined,
});
