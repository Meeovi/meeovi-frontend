import * as TypeGraphQL from "type-graphql";

export enum Product_search_configScalarFieldEnum {
  id = "id",
  language_id = "language_id",
  and_logic = "and_logic",
  min_search_length = "min_search_length",
  excluded_terms = "excluded_terms",
  created_at = "created_at",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(Product_search_configScalarFieldEnum, {
  name: "Product_search_configScalarFieldEnum",
  description: undefined,
});
