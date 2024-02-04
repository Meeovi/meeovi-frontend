import * as TypeGraphQL from "type-graphql";

export enum Adyen_paymentScalarFieldEnum {
  id = "id",
  pspreference = "pspreference",
  original_reference = "original_reference",
  merchant_reference = "merchant_reference",
  merchant_order_reference = "merchant_order_reference",
  order_transaction_id = "order_transaction_id",
  payment_method = "payment_method",
  amount_value = "amount_value",
  amount_currency = "amount_currency",
  additional_data = "additional_data",
  capture_mode = "capture_mode",
  created_at = "created_at",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(Adyen_paymentScalarFieldEnum, {
  name: "Adyen_paymentScalarFieldEnum",
  description: undefined,
});
