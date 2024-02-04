import * as TypeGraphQL from "type-graphql";

export enum App_flow_actionScalarFieldEnum {
  id = "id",
  app_id = "app_id",
  name = "name",
  badge = "badge",
  url = "url",
  delayable = "delayable",
  parameters = "parameters",
  config = "config",
  headers = "headers",
  requirements = "requirements",
  icon = "icon",
  sw_icon = "sw_icon",
  created_at = "created_at",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(App_flow_actionScalarFieldEnum, {
  name: "App_flow_actionScalarFieldEnum",
  description: undefined,
});
