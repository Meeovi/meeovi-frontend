import * as TypeGraphQL from "type-graphql";

export enum Product_reviewOrderByRelevanceFieldEnum {
  external_user = "external_user",
  external_email = "external_email",
  title = "title",
  content = "content",
  comment = "comment",
  custom_fields = "custom_fields"
}
TypeGraphQL.registerEnumType(Product_reviewOrderByRelevanceFieldEnum, {
  name: "Product_reviewOrderByRelevanceFieldEnum",
  description: undefined,
});
