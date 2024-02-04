import * as TypeGraphQL from "type-graphql";

export enum Tax_providerScalarFieldEnum {
  id = "id",
  active = "active",
  priority = "priority",
  identifier = "identifier",
  availability_rule_id = "availability_rule_id",
  app_id = "app_id",
  process_url = "process_url",
  created_at = "created_at",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(Tax_providerScalarFieldEnum, {
  name: "Tax_providerScalarFieldEnum",
  description: undefined,
});
