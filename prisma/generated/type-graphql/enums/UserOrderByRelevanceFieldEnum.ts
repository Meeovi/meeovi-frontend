import * as TypeGraphQL from "type-graphql";

export enum UserOrderByRelevanceFieldEnum {
  username = "username",
  password = "password",
  first_name = "first_name",
  last_name = "last_name",
  title = "title",
  email = "email",
  store_token = "store_token",
  time_zone = "time_zone",
  custom_fields = "custom_fields"
}
TypeGraphQL.registerEnumType(UserOrderByRelevanceFieldEnum, {
  name: "UserOrderByRelevanceFieldEnum",
  description: undefined,
});
