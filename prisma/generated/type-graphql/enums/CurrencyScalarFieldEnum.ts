import * as TypeGraphQL from "type-graphql";

export enum CurrencyScalarFieldEnum {
  id = "id",
  iso_code = "iso_code",
  factor = "factor",
  symbol = "symbol",
  position = "position",
  decimal_precision = "decimal_precision",
  created_at = "created_at",
  updated_at = "updated_at",
  item_rounding = "item_rounding",
  total_rounding = "total_rounding",
  tax_free_from = "tax_free_from"
}
TypeGraphQL.registerEnumType(CurrencyScalarFieldEnum, {
  name: "CurrencyScalarFieldEnum",
  description: undefined,
});
