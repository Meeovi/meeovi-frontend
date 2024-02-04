import * as TypeGraphQL from "type-graphql";

export enum Order_deliveryScalarFieldEnum {
  id = "id",
  version_id = "version_id",
  order_id = "order_id",
  order_version_id = "order_version_id",
  state_id = "state_id",
  shipping_order_address_id = "shipping_order_address_id",
  shipping_order_address_version_id = "shipping_order_address_version_id",
  shipping_method_id = "shipping_method_id",
  tracking_codes = "tracking_codes",
  shipping_date_earliest = "shipping_date_earliest",
  shipping_date_latest = "shipping_date_latest",
  shipping_costs = "shipping_costs",
  custom_fields = "custom_fields",
  created_at = "created_at",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(Order_deliveryScalarFieldEnum, {
  name: "Order_deliveryScalarFieldEnum",
  description: undefined,
});
