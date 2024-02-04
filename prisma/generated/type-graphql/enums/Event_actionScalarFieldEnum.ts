import * as TypeGraphQL from "type-graphql";

export enum Event_actionScalarFieldEnum {
  id = "id",
  title = "title",
  event_name = "event_name",
  action_name = "action_name",
  config = "config",
  custom_fields = "custom_fields",
  active = "active",
  migrated_flow_id = "migrated_flow_id",
  created_at = "created_at",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(Event_actionScalarFieldEnum, {
  name: "Event_actionScalarFieldEnum",
  description: undefined,
});
