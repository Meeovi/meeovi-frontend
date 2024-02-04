import * as TypeGraphQL from "type-graphql";

export enum Tax_ruleScalarFieldEnum {
  id = "id",
  tax_id = "tax_id",
  tax_rule_type_id = "tax_rule_type_id",
  country_id = "country_id",
  tax_rate = "tax_rate",
  data = "data",
  active_from = "active_from",
  created_at = "created_at",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(Tax_ruleScalarFieldEnum, {
  name: "Tax_ruleScalarFieldEnum",
  description: undefined,
});
