import * as TypeGraphQL from "type-graphql";

export enum Adyen_notificationOrderByRelevanceFieldEnum {
  pspreference = "pspreference",
  original_reference = "original_reference",
  merchant_reference = "merchant_reference",
  event_code = "event_code",
  payment_method = "payment_method",
  amount_value = "amount_value",
  amount_currency = "amount_currency",
  reason = "reason",
  additional_data = "additional_data",
  error_message = "error_message"
}
TypeGraphQL.registerEnumType(Adyen_notificationOrderByRelevanceFieldEnum, {
  name: "Adyen_notificationOrderByRelevanceFieldEnum",
  description: undefined,
});
