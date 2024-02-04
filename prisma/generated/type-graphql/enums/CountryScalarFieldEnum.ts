import * as TypeGraphQL from "type-graphql";

export enum CountryScalarFieldEnum {
  id = "id",
  iso = "iso",
  position = "position",
  tax_free = "tax_free",
  active = "active",
  iso3 = "iso3",
  display_state_in_registration = "display_state_in_registration",
  force_state_in_registration = "force_state_in_registration",
  company_tax_free = "company_tax_free",
  check_vat_id_pattern = "check_vat_id_pattern",
  vat_id_pattern = "vat_id_pattern",
  vat_id_required = "vat_id_required",
  customer_tax = "customer_tax",
  company_tax = "company_tax",
  advanced_postal_code_pattern = "advanced_postal_code_pattern",
  check_advanced_postal_code_pattern = "check_advanced_postal_code_pattern",
  check_postal_code_pattern = "check_postal_code_pattern",
  default_postal_code_pattern = "default_postal_code_pattern",
  postal_code_required = "postal_code_required",
  created_at = "created_at",
  updated_at = "updated_at",
  shipping_available = "shipping_available"
}
TypeGraphQL.registerEnumType(CountryScalarFieldEnum, {
  name: "CountryScalarFieldEnum",
  description: undefined,
});
