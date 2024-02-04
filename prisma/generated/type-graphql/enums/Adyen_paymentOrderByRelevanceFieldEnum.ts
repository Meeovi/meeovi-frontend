import * as TypeGraphQL from "type-graphql";

export enum Adyen_paymentOrderByRelevanceFieldEnum {
  pspreference = "pspreference",
  original_reference = "original_reference",
  merchant_reference = "merchant_reference",
  merchant_order_reference = "merchant_order_reference",
  payment_method = "payment_method",
  amount_currency = "amount_currency",
  additional_data = "additional_data",
  capture_mode = "capture_mode"
}
TypeGraphQL.registerEnumType(Adyen_paymentOrderByRelevanceFieldEnum, {
  name: "Adyen_paymentOrderByRelevanceFieldEnum",
  description: undefined,
});
