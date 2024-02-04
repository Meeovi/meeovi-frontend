import * as TypeGraphQL from "type-graphql";

export enum App_templateScalarFieldEnum {
  id = "id",
  template = "template",
  path = "path",
  active = "active",
  app_id = "app_id",
  created_at = "created_at",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(App_templateScalarFieldEnum, {
  name: "App_templateScalarFieldEnum",
  description: undefined,
});
