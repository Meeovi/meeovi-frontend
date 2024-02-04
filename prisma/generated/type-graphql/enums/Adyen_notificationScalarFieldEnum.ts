import * as TypeGraphQL from "type-graphql";

export enum Adyen_notificationScalarFieldEnum {
  id = "id",
  pspreference = "pspreference",
  original_reference = "original_reference",
  merchant_reference = "merchant_reference",
  event_code = "event_code",
  success = "success",
  payment_method = "payment_method",
  amount_value = "amount_value",
  amount_currency = "amount_currency",
  reason = "reason",
  live = "live",
  additional_data = "additional_data",
  done = "done",
  processing = "processing",
  scheduled_processing_time = "scheduled_processing_time",
  error_count = "error_count",
  error_message = "error_message",
  created_at = "created_at",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(Adyen_notificationScalarFieldEnum, {
  name: "Adyen_notificationScalarFieldEnum",
  description: undefined,
});
