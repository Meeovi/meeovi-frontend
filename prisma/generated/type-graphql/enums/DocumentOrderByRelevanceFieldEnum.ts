import * as TypeGraphQL from "type-graphql";

export enum DocumentOrderByRelevanceFieldEnum {
  file_type = "file_type",
  config = "config",
  deep_link_code = "deep_link_code",
  custom_fields = "custom_fields",
  document_number = "document_number"
}
TypeGraphQL.registerEnumType(DocumentOrderByRelevanceFieldEnum, {
  name: "DocumentOrderByRelevanceFieldEnum",
  description: undefined,
});
