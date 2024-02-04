import * as TypeGraphQL from "type-graphql";

export enum App_cms_blockScalarFieldEnum {
  id = "id",
  app_id = "app_id",
  name = "name",
  block = "block",
  template = "template",
  styles = "styles",
  created_at = "created_at",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(App_cms_blockScalarFieldEnum, {
  name: "App_cms_blockScalarFieldEnum",
  description: undefined,
});
