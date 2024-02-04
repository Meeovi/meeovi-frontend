import * as TypeGraphQL from "type-graphql";

export enum State_machine_transitionScalarFieldEnum {
  id = "id",
  action_name = "action_name",
  state_machine_id = "state_machine_id",
  from_state_id = "from_state_id",
  to_state_id = "to_state_id",
  custom_fields = "custom_fields",
  created_at = "created_at",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(State_machine_transitionScalarFieldEnum, {
  name: "State_machine_transitionScalarFieldEnum",
  description: undefined,
});
