import * as TypeGraphQL from "type-graphql";

export enum CategoryOrderByRelevanceFieldEnum {
  product_assignment_type = "product_assignment_type",
  path = "path",
  type = "type"
}
TypeGraphQL.registerEnumType(CategoryOrderByRelevanceFieldEnum, {
  name: "CategoryOrderByRelevanceFieldEnum",
  description: undefined,
});
