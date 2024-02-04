import * as TypeGraphQL from "type-graphql";

export enum ThemeScalarFieldEnum {
  id = "id",
  technical_name = "technical_name",
  name = "name",
  author = "author",
  preview_media_id = "preview_media_id",
  parent_theme_id = "parent_theme_id",
  base_config = "base_config",
  config_values = "config_values",
  active = "active",
  created_at = "created_at",
  updated_at = "updated_at",
  theme_json = "theme_json"
}
TypeGraphQL.registerEnumType(ThemeScalarFieldEnum, {
  name: "ThemeScalarFieldEnum",
  description: undefined,
});
