import * as TypeGraphQL from "type-graphql";

export enum Order_transaction_captureScalarFieldEnum {
  id = "id",
  version_id = "version_id",
  order_transaction_id = "order_transaction_id",
  order_transaction_version_id = "order_transaction_version_id",
  state_id = "state_id",
  external_reference = "external_reference",
  amount = "amount",
  custom_fields = "custom_fields",
  created_at = "created_at",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(Order_transaction_captureScalarFieldEnum, {
  name: "Order_transaction_captureScalarFieldEnum",
  description: undefined,
});
