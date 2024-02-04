import * as TypeGraphQL from "type-graphql";

export enum PluginOrderByRelevanceFieldEnum {
  name = "name",
  base_class = "base_class",
  composer_name = "composer_name",
  path = "path",
  autoload = "autoload",
  author = "author",
  copyright = "copyright",
  license = "license",
  version = "version",
  upgrade_version = "upgrade_version"
}
TypeGraphQL.registerEnumType(PluginOrderByRelevanceFieldEnum, {
  name: "PluginOrderByRelevanceFieldEnum",
  description: undefined,
});
