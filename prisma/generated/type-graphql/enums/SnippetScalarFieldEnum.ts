import * as TypeGraphQL from "type-graphql";

export enum SnippetScalarFieldEnum {
  id = "id",
  translation_key = "translation_key",
  value = "value",
  author = "author",
  snippet_set_id = "snippet_set_id",
  custom_fields = "custom_fields",
  created_at = "created_at",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(SnippetScalarFieldEnum, {
  name: "SnippetScalarFieldEnum",
  description: undefined,
});
