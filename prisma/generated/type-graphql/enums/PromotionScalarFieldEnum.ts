import * as TypeGraphQL from "type-graphql";

export enum PromotionScalarFieldEnum {
  id = "id",
  active = "active",
  valid_from = "valid_from",
  valid_until = "valid_until",
  max_redemptions_global = "max_redemptions_global",
  max_redemptions_per_customer = "max_redemptions_per_customer",
  priority = "priority",
  order_count = "order_count",
  orders_per_customer_count = "orders_per_customer_count",
  exclusive = "exclusive",
  code = "code",
  use_codes = "use_codes",
  created_at = "created_at",
  updated_at = "updated_at",
  customer_restriction = "customer_restriction",
  prevent_combination = "prevent_combination",
  exclusion_ids = "exclusion_ids",
  use_individual_codes = "use_individual_codes",
  individual_code_pattern = "individual_code_pattern",
  use_setgroups = "use_setgroups"
}
TypeGraphQL.registerEnumType(PromotionScalarFieldEnum, {
  name: "PromotionScalarFieldEnum",
  description: undefined,
});
