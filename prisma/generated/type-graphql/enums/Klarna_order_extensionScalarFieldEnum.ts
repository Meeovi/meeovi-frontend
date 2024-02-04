import * as TypeGraphQL from "type-graphql";

export enum Klarna_order_extensionScalarFieldEnum {
  id = "id",
  version_id = "version_id",
  order_id = "order_id",
  order_version_id = "order_version_id",
  order_address_hash = "order_address_hash",
  order_cart_hash = "order_cart_hash",
  order_cart_hash_version = "order_cart_hash_version",
  created_at = "created_at",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(Klarna_order_extensionScalarFieldEnum, {
  name: "Klarna_order_extensionScalarFieldEnum",
  description: undefined,
});
