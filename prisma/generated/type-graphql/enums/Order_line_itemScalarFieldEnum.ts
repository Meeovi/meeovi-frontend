import * as TypeGraphQL from "type-graphql";

export enum Order_line_itemScalarFieldEnum {
  id = "id",
  version_id = "version_id",
  order_id = "order_id",
  order_version_id = "order_version_id",
  parent_id = "parent_id",
  parent_version_id = "parent_version_id",
  identifier = "identifier",
  referenced_id = "referenced_id",
  product_id = "product_id",
  product_version_id = "product_version_id",
  promotion_id = "promotion_id",
  states = "states",
  label = "label",
  description = "description",
  cover_id = "cover_id",
  quantity = "quantity",
  unit_price = "unit_price",
  total_price = "total_price",
  type = "type",
  payload = "payload",
  price_definition = "price_definition",
  price = "price",
  stackable = "stackable",
  removable = "removable",
  good = "good",
  position = "position",
  custom_fields = "custom_fields",
  created_at = "created_at",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(Order_line_itemScalarFieldEnum, {
  name: "Order_line_itemScalarFieldEnum",
  description: undefined,
});
