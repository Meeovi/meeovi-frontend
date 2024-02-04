import * as TypeGraphQL from "type-graphql";

export enum CartOrderByRelevanceFieldEnum {
  token = "token",
  name = "name",
  cart = "cart",
  line_item_count = "line_item_count",
  rule_ids = "rule_ids"
}
TypeGraphQL.registerEnumType(CartOrderByRelevanceFieldEnum, {
  name: "CartOrderByRelevanceFieldEnum",
  description: undefined,
});
