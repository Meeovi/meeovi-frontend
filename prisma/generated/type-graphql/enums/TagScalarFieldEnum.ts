import * as TypeGraphQL from "type-graphql";

export enum TagScalarFieldEnum {
  id = "id",
  name = "name",
  created_at = "created_at",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(TagScalarFieldEnum, {
  name: "TagScalarFieldEnum",
  description: undefined,
});
