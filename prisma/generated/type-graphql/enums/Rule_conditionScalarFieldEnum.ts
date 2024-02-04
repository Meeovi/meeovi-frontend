import * as TypeGraphQL from "type-graphql";

export enum Rule_conditionScalarFieldEnum {
  id = "id",
  type = "type",
  rule_id = "rule_id",
  script_id = "script_id",
  parent_id = "parent_id",
  value = "value",
  position = "position",
  custom_fields = "custom_fields",
  created_at = "created_at",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(Rule_conditionScalarFieldEnum, {
  name: "Rule_conditionScalarFieldEnum",
  description: undefined,
});
