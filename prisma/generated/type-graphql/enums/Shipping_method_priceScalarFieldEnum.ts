import * as TypeGraphQL from "type-graphql";

export enum Shipping_method_priceScalarFieldEnum {
  id = "id",
  shipping_method_id = "shipping_method_id",
  calculation = "calculation",
  rule_id = "rule_id",
  calculation_rule_id = "calculation_rule_id",
  currency_price = "currency_price",
  quantity_start = "quantity_start",
  quantity_end = "quantity_end",
  custom_fields = "custom_fields",
  created_at = "created_at",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(Shipping_method_priceScalarFieldEnum, {
  name: "Shipping_method_priceScalarFieldEnum",
  description: undefined,
});
