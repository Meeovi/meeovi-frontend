import * as TypeGraphQL from "type-graphql";

export enum CountryOrderByRelevanceFieldEnum {
  iso = "iso",
  iso3 = "iso3",
  vat_id_pattern = "vat_id_pattern",
  customer_tax = "customer_tax",
  company_tax = "company_tax",
  advanced_postal_code_pattern = "advanced_postal_code_pattern",
  default_postal_code_pattern = "default_postal_code_pattern"
}
TypeGraphQL.registerEnumType(CountryOrderByRelevanceFieldEnum, {
  name: "CountryOrderByRelevanceFieldEnum",
  description: undefined,
});
