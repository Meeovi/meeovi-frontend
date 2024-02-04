import * as TypeGraphQL from "type-graphql";

export enum Order_transactionScalarFieldEnum {
  id = "id",
  version_id = "version_id",
  order_id = "order_id",
  order_version_id = "order_version_id",
  state_id = "state_id",
  payment_method_id = "payment_method_id",
  amount = "amount",
  custom_fields = "custom_fields",
  created_at = "created_at",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(Order_transactionScalarFieldEnum, {
  name: "Order_transactionScalarFieldEnum",
  description: undefined,
});
