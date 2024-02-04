import * as TypeGraphQL from "type-graphql";

export enum UnitScalarFieldEnum {
  id = "id",
  created_at = "created_at",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(UnitScalarFieldEnum, {
  name: "UnitScalarFieldEnum",
  description: undefined,
});
