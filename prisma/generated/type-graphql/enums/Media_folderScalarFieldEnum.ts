import * as TypeGraphQL from "type-graphql";

export enum Media_folderScalarFieldEnum {
  id = "id",
  parent_id = "parent_id",
  default_folder_id = "default_folder_id",
  name = "name",
  child_count = "child_count",
  path = "path",
  media_folder_configuration_id = "media_folder_configuration_id",
  use_parent_configuration = "use_parent_configuration",
  custom_fields = "custom_fields",
  created_at = "created_at",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(Media_folderScalarFieldEnum, {
  name: "Media_folderScalarFieldEnum",
  description: undefined,
});
