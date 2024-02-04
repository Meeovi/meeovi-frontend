import * as TypeGraphQL from "type-graphql";

export enum Directus_filesScalarFieldEnum {
  id = "id",
  storage = "storage",
  filename_disk = "filename_disk",
  filename_download = "filename_download",
  title = "title",
  type = "type",
  folder = "folder",
  uploaded_by = "uploaded_by",
  uploaded_on = "uploaded_on",
  modified_by = "modified_by",
  modified_on = "modified_on",
  charset = "charset",
  filesize = "filesize",
  width = "width",
  height = "height",
  duration = "duration",
  embed = "embed",
  description = "description",
  location = "location",
  tags = "tags",
  metadata = "metadata"
}
TypeGraphQL.registerEnumType(Directus_filesScalarFieldEnum, {
  name: "Directus_filesScalarFieldEnum",
  description: undefined,
});
