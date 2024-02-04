import * as TypeGraphQL from "type-graphql";

export enum OrderOrderByRelevanceFieldEnum {
  order_number = "order_number",
  price = "price",
  tax_status = "tax_status",
  shipping_costs = "shipping_costs",
  deep_link_code = "deep_link_code",
  custom_fields = "custom_fields",
  affiliate_code = "affiliate_code",
  campaign_code = "campaign_code",
  customer_comment = "customer_comment",
  item_rounding = "item_rounding",
  total_rounding = "total_rounding",
  rule_ids = "rule_ids",
  source = "source"
}
TypeGraphQL.registerEnumType(OrderOrderByRelevanceFieldEnum, {
  name: "OrderOrderByRelevanceFieldEnum",
  description: undefined,
});
