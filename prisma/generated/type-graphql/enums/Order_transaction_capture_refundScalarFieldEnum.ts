import * as TypeGraphQL from "type-graphql";

export enum Order_transaction_capture_refundScalarFieldEnum {
  id = "id",
  version_id = "version_id",
  capture_id = "capture_id",
  capture_version_id = "capture_version_id",
  state_id = "state_id",
  reason = "reason",
  amount = "amount",
  custom_fields = "custom_fields",
  external_reference = "external_reference",
  created_at = "created_at",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(Order_transaction_capture_refundScalarFieldEnum, {
  name: "Order_transaction_capture_refundScalarFieldEnum",
  description: undefined,
});
