import * as TypeGraphQL from "type-graphql";

export enum State_machine_historyScalarFieldEnum {
  id = "id",
  state_machine_id = "state_machine_id",
  entity_name = "entity_name",
  entity_id = "entity_id",
  from_state_id = "from_state_id",
  to_state_id = "to_state_id",
  action_name = "action_name",
  user_id = "user_id",
  created_at = "created_at",
  updated_at = "updated_at",
  referenced_id = "referenced_id",
  referenced_version_id = "referenced_version_id"
}
TypeGraphQL.registerEnumType(State_machine_historyScalarFieldEnum, {
  name: "State_machine_historyScalarFieldEnum",
  description: undefined,
});
