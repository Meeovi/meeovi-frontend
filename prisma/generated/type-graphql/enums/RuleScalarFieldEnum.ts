import * as TypeGraphQL from "type-graphql";

export enum RuleScalarFieldEnum {
  id = "id",
  name = "name",
  description = "description",
  priority = "priority",
  payload = "payload",
  invalid = "invalid",
  areas = "areas",
  module_types = "module_types",
  custom_fields = "custom_fields",
  created_at = "created_at",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(RuleScalarFieldEnum, {
  name: "RuleScalarFieldEnum",
  description: undefined,
});
