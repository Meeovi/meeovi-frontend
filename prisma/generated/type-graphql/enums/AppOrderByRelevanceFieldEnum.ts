import * as TypeGraphQL from "type-graphql";

export enum AppOrderByRelevanceFieldEnum {
  name = "name",
  path = "path",
  author = "author",
  copyright = "copyright",
  license = "license",
  privacy = "privacy",
  version = "version",
  base_app_url = "base_app_url",
  app_secret = "app_secret",
  modules = "modules",
  main_module = "main_module",
  cookies = "cookies",
  allowed_hosts = "allowed_hosts"
}
TypeGraphQL.registerEnumType(AppOrderByRelevanceFieldEnum, {
  name: "AppOrderByRelevanceFieldEnum",
  description: undefined,
});
