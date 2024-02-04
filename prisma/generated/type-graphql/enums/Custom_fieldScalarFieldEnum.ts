import * as TypeGraphQL from "type-graphql";

export enum Custom_fieldScalarFieldEnum {
  id = "id",
  name = "name",
  type = "type",
  config = "config",
  active = "active",
  set_id = "set_id",
  created_at = "created_at",
  updated_at = "updated_at",
  allow_customer_write = "allow_customer_write",
  allow_cart_expose = "allow_cart_expose"
}
TypeGraphQL.registerEnumType(Custom_fieldScalarFieldEnum, {
  name: "Custom_fieldScalarFieldEnum",
  description: undefined,
});
