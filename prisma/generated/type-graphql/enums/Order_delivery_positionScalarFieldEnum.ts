import * as TypeGraphQL from "type-graphql";

export enum Order_delivery_positionScalarFieldEnum {
  id = "id",
  version_id = "version_id",
  order_delivery_id = "order_delivery_id",
  order_delivery_version_id = "order_delivery_version_id",
  order_line_item_id = "order_line_item_id",
  order_line_item_version_id = "order_line_item_version_id",
  price = "price",
  total_price = "total_price",
  unit_price = "unit_price",
  quantity = "quantity",
  custom_fields = "custom_fields",
  created_at = "created_at",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(Order_delivery_positionScalarFieldEnum, {
  name: "Order_delivery_positionScalarFieldEnum",
  description: undefined,
});
