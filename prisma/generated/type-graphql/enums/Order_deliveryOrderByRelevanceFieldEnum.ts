import * as TypeGraphQL from "type-graphql";

export enum Order_deliveryOrderByRelevanceFieldEnum {
  tracking_codes = "tracking_codes",
  shipping_costs = "shipping_costs",
  custom_fields = "custom_fields"
}
TypeGraphQL.registerEnumType(Order_deliveryOrderByRelevanceFieldEnum, {
  name: "Order_deliveryOrderByRelevanceFieldEnum",
  description: undefined,
});
