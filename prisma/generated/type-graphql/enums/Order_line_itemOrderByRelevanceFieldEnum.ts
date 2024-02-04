import * as TypeGraphQL from "type-graphql";

export enum Order_line_itemOrderByRelevanceFieldEnum {
  identifier = "identifier",
  referenced_id = "referenced_id",
  states = "states",
  label = "label",
  description = "description",
  type = "type",
  payload = "payload",
  price_definition = "price_definition",
  price = "price",
  custom_fields = "custom_fields"
}
TypeGraphQL.registerEnumType(Order_line_itemOrderByRelevanceFieldEnum, {
  name: "Order_line_itemOrderByRelevanceFieldEnum",
  description: undefined,
});
