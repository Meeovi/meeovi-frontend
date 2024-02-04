import * as TypeGraphQL from "type-graphql";

export enum CartScalarFieldEnum {
  token = "token",
  name = "name",
  cart = "cart",
  price = "price",
  line_item_count = "line_item_count",
  currency_id = "currency_id",
  shipping_method_id = "shipping_method_id",
  payment_method_id = "payment_method_id",
  country_id = "country_id",
  customer_id = "customer_id",
  sales_channel_id = "sales_channel_id",
  rule_ids = "rule_ids",
  created_at = "created_at",
  updated_at = "updated_at",
  auto_increment = "auto_increment"
}
TypeGraphQL.registerEnumType(CartScalarFieldEnum, {
  name: "CartScalarFieldEnum",
  description: undefined,
});
