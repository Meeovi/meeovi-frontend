import * as TypeGraphQL from "type-graphql";

export enum TaxOrderByRelevanceFieldEnum {
  name = "name",
  custom_fields = "custom_fields"
}
TypeGraphQL.registerEnumType(TaxOrderByRelevanceFieldEnum, {
  name: "TaxOrderByRelevanceFieldEnum",
  description: undefined,
});
