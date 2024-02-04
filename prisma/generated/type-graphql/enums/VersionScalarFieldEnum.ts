import * as TypeGraphQL from "type-graphql";

export enum VersionScalarFieldEnum {
  id = "id",
  name = "name",
  created_at = "created_at",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(VersionScalarFieldEnum, {
  name: "VersionScalarFieldEnum",
  description: undefined,
});
