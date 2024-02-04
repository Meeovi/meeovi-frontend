import * as TypeGraphQL from "type-graphql";

export enum SnippetOrderByRelevanceFieldEnum {
  translation_key = "translation_key",
  value = "value",
  author = "author",
  custom_fields = "custom_fields"
}
TypeGraphQL.registerEnumType(SnippetOrderByRelevanceFieldEnum, {
  name: "SnippetOrderByRelevanceFieldEnum",
  description: undefined,
});
