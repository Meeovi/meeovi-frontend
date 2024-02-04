import * as TypeGraphQL from "type-graphql";

export enum Shipping_methodScalarFieldEnum {
  id = "id",
  active = "active",
  position = "position",
  availability_rule_id = "availability_rule_id",
  media_id = "media_id",
  delivery_time_id = "delivery_time_id",
  tax_type = "tax_type",
  tax_id = "tax_id",
  created_at = "created_at",
  updated_at = "updated_at",
  technical_name = "technical_name"
}
TypeGraphQL.registerEnumType(Shipping_methodScalarFieldEnum, {
  name: "Shipping_methodScalarFieldEnum",
  description: undefined,
});
