import * as TypeGraphQL from "type-graphql";

export enum Klarna_payment_request_logScalarFieldEnum {
  id = "id",
  klarna_order_id = "klarna_order_id",
  call_type = "call_type",
  request = "request",
  response = "response",
  idempotency_key = "idempotency_key",
  created_at = "created_at",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(Klarna_payment_request_logScalarFieldEnum, {
  name: "Klarna_payment_request_logScalarFieldEnum",
  description: undefined,
});
