import * as TypeGraphQL from "type-graphql";

export enum Adyen_refundScalarFieldEnum {
  id = "id",
  order_transaction_id = "order_transaction_id",
  psp_reference = "psp_reference",
  source = "source",
  status = "status",
  created_at = "created_at",
  updated_at = "updated_at",
  amount = "amount"
}
TypeGraphQL.registerEnumType(Adyen_refundScalarFieldEnum, {
  name: "Adyen_refundScalarFieldEnum",
  description: undefined,
});
