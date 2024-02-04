import * as TypeGraphQL from "type-graphql";

export enum Log_entryScalarFieldEnum {
  id = "id",
  message = "message",
  level = "level",
  channel = "channel",
  context = "context",
  extra = "extra",
  created_at = "created_at",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(Log_entryScalarFieldEnum, {
  name: "Log_entryScalarFieldEnum",
  description: undefined,
});
