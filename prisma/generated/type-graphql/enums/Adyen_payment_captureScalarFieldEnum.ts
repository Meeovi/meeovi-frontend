import * as TypeGraphQL from "type-graphql";

export enum Adyen_payment_captureScalarFieldEnum {
  id = "id",
  order_transaction_id = "order_transaction_id",
  psp_reference = "psp_reference",
  source = "source",
  status = "status",
  created_at = "created_at",
  updated_at = "updated_at",
  amount = "amount"
}
TypeGraphQL.registerEnumType(Adyen_payment_captureScalarFieldEnum, {
  name: "Adyen_payment_captureScalarFieldEnum",
  description: undefined,
});
