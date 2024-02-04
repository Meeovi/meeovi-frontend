import * as TypeGraphQL from "type-graphql";

export enum Acl_roleScalarFieldEnum {
  id = "id",
  name = "name",
  description = "description",
  privileges = "privileges",
  created_at = "created_at",
  updated_at = "updated_at",
  deleted_at = "deleted_at"
}
TypeGraphQL.registerEnumType(Acl_roleScalarFieldEnum, {
  name: "Acl_roleScalarFieldEnum",
  description: undefined,
});
