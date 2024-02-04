import * as TypeGraphQL from "type-graphql";

export enum App_payment_methodOrderByRelevanceFieldEnum {
  app_name = "app_name",
  identifier = "identifier",
  pay_url = "pay_url",
  finalize_url = "finalize_url",
  validate_url = "validate_url",
  capture_url = "capture_url",
  refund_url = "refund_url",
  recurring_url = "recurring_url"
}
TypeGraphQL.registerEnumType(App_payment_methodOrderByRelevanceFieldEnum, {
  name: "App_payment_methodOrderByRelevanceFieldEnum",
  description: undefined,
});
