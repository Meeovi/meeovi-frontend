import * as TypeGraphQL from "type-graphql";

export enum PluginScalarFieldEnum {
  id = "id",
  name = "name",
  base_class = "base_class",
  composer_name = "composer_name",
  active = "active",
  managed_by_composer = "managed_by_composer",
  path = "path",
  autoload = "autoload",
  author = "author",
  copyright = "copyright",
  license = "license",
  version = "version",
  upgrade_version = "upgrade_version",
  icon = "icon",
  installed_at = "installed_at",
  upgraded_at = "upgraded_at",
  created_at = "created_at",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(PluginScalarFieldEnum, {
  name: "PluginScalarFieldEnum",
  description: undefined,
});
