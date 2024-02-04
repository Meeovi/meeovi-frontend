import * as TypeGraphQL from "type-graphql";

export enum IntegrationOrderByRelevanceFieldEnum {
  access_key = "access_key",
  secret_access_key = "secret_access_key",
  label = "label",
  custom_fields = "custom_fields"
}
TypeGraphQL.registerEnumType(IntegrationOrderByRelevanceFieldEnum, {
  name: "IntegrationOrderByRelevanceFieldEnum",
  description: undefined,
});
