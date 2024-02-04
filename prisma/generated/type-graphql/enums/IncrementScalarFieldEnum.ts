import * as TypeGraphQL from "type-graphql";

export enum IncrementScalarFieldEnum {
  pool = "pool",
  cluster = "cluster",
  key = "key",
  count = "count",
  created_at = "created_at",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(IncrementScalarFieldEnum, {
  name: "IncrementScalarFieldEnum",
  description: undefined,
});
