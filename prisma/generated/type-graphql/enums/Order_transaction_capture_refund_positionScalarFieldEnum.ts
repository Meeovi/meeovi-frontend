import * as TypeGraphQL from "type-graphql";

export enum Order_transaction_capture_refund_positionScalarFieldEnum {
  id = "id",
  version_id = "version_id",
  refund_id = "refund_id",
  refund_version_id = "refund_version_id",
  order_line_item_id = "order_line_item_id",
  order_line_item_version_id = "order_line_item_version_id",
  quantity = "quantity",
  reason = "reason",
  external_reference = "external_reference",
  amount = "amount",
  custom_fields = "custom_fields",
  created_at = "created_at",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(Order_transaction_capture_refund_positionScalarFieldEnum, {
  name: "Order_transaction_capture_refund_positionScalarFieldEnum",
  description: undefined,
});
