import * as TypeGraphQL from "type-graphql";

export enum Product_sortingScalarFieldEnum {
  id = "id",
  url_key = "url_key",
  priority = "priority",
  active = "active",
  fields = "fields",
  created_at = "created_at",
  locked = "locked",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(Product_sortingScalarFieldEnum, {
  name: "Product_sortingScalarFieldEnum",
  description: undefined,
});
