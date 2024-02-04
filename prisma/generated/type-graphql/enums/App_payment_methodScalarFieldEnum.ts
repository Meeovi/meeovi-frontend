import * as TypeGraphQL from "type-graphql";

export enum App_payment_methodScalarFieldEnum {
  id = "id",
  app_id = "app_id",
  payment_method_id = "payment_method_id",
  app_name = "app_name",
  identifier = "identifier",
  pay_url = "pay_url",
  finalize_url = "finalize_url",
  validate_url = "validate_url",
  capture_url = "capture_url",
  refund_url = "refund_url",
  original_media_id = "original_media_id",
  created_at = "created_at",
  updated_at = "updated_at",
  recurring_url = "recurring_url"
}
TypeGraphQL.registerEnumType(App_payment_methodScalarFieldEnum, {
  name: "App_payment_methodScalarFieldEnum",
  description: undefined,
});
