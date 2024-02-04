import * as TypeGraphQL from "type-graphql";

export enum MediaOrderByRelevanceFieldEnum {
  mime_type = "mime_type",
  file_extension = "file_extension",
  meta_data = "meta_data",
  file_name = "file_name",
  path = "path"
}
TypeGraphQL.registerEnumType(MediaOrderByRelevanceFieldEnum, {
  name: "MediaOrderByRelevanceFieldEnum",
  description: undefined,
});
