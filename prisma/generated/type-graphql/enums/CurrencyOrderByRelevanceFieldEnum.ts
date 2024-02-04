import * as TypeGraphQL from "type-graphql";

export enum CurrencyOrderByRelevanceFieldEnum {
  iso_code = "iso_code",
  symbol = "symbol",
  item_rounding = "item_rounding",
  total_rounding = "total_rounding"
}
TypeGraphQL.registerEnumType(CurrencyOrderByRelevanceFieldEnum, {
  name: "CurrencyOrderByRelevanceFieldEnum",
  description: undefined,
});
