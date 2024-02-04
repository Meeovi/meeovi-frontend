import * as TypeGraphQL from "type-graphql";

export enum ThemeOrderByRelevanceFieldEnum {
  technical_name = "technical_name",
  name = "name",
  author = "author",
  base_config = "base_config",
  config_values = "config_values",
  theme_json = "theme_json"
}
TypeGraphQL.registerEnumType(ThemeOrderByRelevanceFieldEnum, {
  name: "ThemeOrderByRelevanceFieldEnum",
  description: undefined,
});
