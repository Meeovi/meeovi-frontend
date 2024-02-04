import * as TypeGraphQL from "type-graphql";

export enum AppScalarFieldEnum {
  id = "id",
  name = "name",
  path = "path",
  author = "author",
  copyright = "copyright",
  license = "license",
  privacy = "privacy",
  version = "version",
  base_app_url = "base_app_url",
  active = "active",
  allow_disable = "allow_disable",
  configurable = "configurable",
  icon = "icon",
  app_secret = "app_secret",
  modules = "modules",
  main_module = "main_module",
  cookies = "cookies",
  allowed_hosts = "allowed_hosts",
  integration_id = "integration_id",
  acl_role_id = "acl_role_id",
  created_at = "created_at",
  updated_at = "updated_at",
  template_load_priority = "template_load_priority"
}
TypeGraphQL.registerEnumType(AppScalarFieldEnum, {
  name: "AppScalarFieldEnum",
  description: undefined,
});
