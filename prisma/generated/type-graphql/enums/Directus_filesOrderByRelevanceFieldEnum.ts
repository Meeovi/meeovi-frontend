import * as TypeGraphQL from "type-graphql";

export enum Directus_filesOrderByRelevanceFieldEnum {
  id = "id",
  storage = "storage",
  filename_disk = "filename_disk",
  filename_download = "filename_download",
  title = "title",
  type = "type",
  folder = "folder",
  uploaded_by = "uploaded_by",
  modified_by = "modified_by",
  charset = "charset",
  embed = "embed",
  description = "description",
  location = "location",
  tags = "tags",
  metadata = "metadata"
}
TypeGraphQL.registerEnumType(Directus_filesOrderByRelevanceFieldEnum, {
  name: "Directus_filesOrderByRelevanceFieldEnum",
  description: undefined,
});
