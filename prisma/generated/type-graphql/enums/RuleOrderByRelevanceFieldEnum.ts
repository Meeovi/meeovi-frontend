import * as TypeGraphQL from "type-graphql";

export enum RuleOrderByRelevanceFieldEnum {
  name = "name",
  description = "description",
  areas = "areas",
  module_types = "module_types",
  custom_fields = "custom_fields"
}
TypeGraphQL.registerEnumType(RuleOrderByRelevanceFieldEnum, {
  name: "RuleOrderByRelevanceFieldEnum",
  description: undefined,
});
