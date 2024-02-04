import * as TypeGraphQL from "type-graphql";

export enum Newsletter_recipientOrderByRelevanceFieldEnum {
  email = "email",
  title = "title",
  first_name = "first_name",
  last_name = "last_name",
  zip_code = "zip_code",
  city = "city",
  street = "street",
  status = "status",
  hash = "hash",
  custom_fields = "custom_fields"
}
TypeGraphQL.registerEnumType(Newsletter_recipientOrderByRelevanceFieldEnum, {
  name: "Newsletter_recipientOrderByRelevanceFieldEnum",
  description: undefined,
});
