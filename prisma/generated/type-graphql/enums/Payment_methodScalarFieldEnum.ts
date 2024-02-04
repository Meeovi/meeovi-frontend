import * as TypeGraphQL from "type-graphql";

export enum Payment_methodScalarFieldEnum {
  id = "id",
  handler_identifier = "handler_identifier",
  position = "position",
  active = "active",
  after_order_enabled = "after_order_enabled",
  availability_rule_id = "availability_rule_id",
  plugin_id = "plugin_id",
  media_id = "media_id",
  created_at = "created_at",
  updated_at = "updated_at",
  technical_name = "technical_name"
}
TypeGraphQL.registerEnumType(Payment_methodScalarFieldEnum, {
  name: "Payment_methodScalarFieldEnum",
  description: undefined,
});
