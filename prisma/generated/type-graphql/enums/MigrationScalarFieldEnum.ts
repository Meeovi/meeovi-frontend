import * as TypeGraphQL from "type-graphql";

export enum MigrationScalarFieldEnum {
  "class" = "class",
  creation_timestamp = "creation_timestamp",
  update = "update",
  update_destructive = "update_destructive",
  message = "message"
}
TypeGraphQL.registerEnumType(MigrationScalarFieldEnum, {
  name: "MigrationScalarFieldEnum",
  description: undefined,
});
