import * as TypeGraphQL from "type-graphql";

export enum Sales_channelOrderByRelevanceFieldEnum {
  short_name = "short_name",
  configuration = "configuration",
  access_key = "access_key",
  maintenance_ip_whitelist = "maintenance_ip_whitelist",
  payment_method_ids = "payment_method_ids",
  tax_calculation_type = "tax_calculation_type"
}
TypeGraphQL.registerEnumType(Sales_channelOrderByRelevanceFieldEnum, {
  name: "Sales_channelOrderByRelevanceFieldEnum",
  description: undefined,
});
