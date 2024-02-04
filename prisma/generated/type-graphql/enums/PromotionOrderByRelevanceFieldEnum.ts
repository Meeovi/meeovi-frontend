import * as TypeGraphQL from "type-graphql";

export enum PromotionOrderByRelevanceFieldEnum {
  orders_per_customer_count = "orders_per_customer_count",
  code = "code",
  exclusion_ids = "exclusion_ids",
  individual_code_pattern = "individual_code_pattern"
}
TypeGraphQL.registerEnumType(PromotionOrderByRelevanceFieldEnum, {
  name: "PromotionOrderByRelevanceFieldEnum",
  description: undefined,
});
