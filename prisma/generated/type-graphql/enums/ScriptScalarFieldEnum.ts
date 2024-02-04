import * as TypeGraphQL from "type-graphql";

export enum ScriptScalarFieldEnum {
  id = "id",
  script = "script",
  hook = "hook",
  name = "name",
  active = "active",
  app_id = "app_id",
  created_at = "created_at",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(ScriptScalarFieldEnum, {
  name: "ScriptScalarFieldEnum",
  description: undefined,
});
