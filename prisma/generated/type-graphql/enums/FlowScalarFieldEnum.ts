import * as TypeGraphQL from "type-graphql";

export enum FlowScalarFieldEnum {
  id = "id",
  app_flow_event_id = "app_flow_event_id",
  name = "name",
  description = "description",
  event_name = "event_name",
  priority = "priority",
  payload = "payload",
  invalid = "invalid",
  active = "active",
  custom_fields = "custom_fields",
  created_at = "created_at",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(FlowScalarFieldEnum, {
  name: "FlowScalarFieldEnum",
  description: undefined,
});
