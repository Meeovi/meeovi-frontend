import * as TypeGraphQL from "type-graphql";

export enum Flow_sequenceScalarFieldEnum {
  id = "id",
  flow_id = "flow_id",
  app_flow_action_id = "app_flow_action_id",
  parent_id = "parent_id",
  rule_id = "rule_id",
  action_name = "action_name",
  config = "config",
  position = "position",
  display_group = "display_group",
  true_case = "true_case",
  custom_fields = "custom_fields",
  created_at = "created_at",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(Flow_sequenceScalarFieldEnum, {
  name: "Flow_sequenceScalarFieldEnum",
  description: undefined,
});
