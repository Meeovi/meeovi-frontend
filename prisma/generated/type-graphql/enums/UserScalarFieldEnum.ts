import * as TypeGraphQL from "type-graphql";

export enum UserScalarFieldEnum {
  id = "id",
  username = "username",
  password = "password",
  first_name = "first_name",
  last_name = "last_name",
  title = "title",
  email = "email",
  active = "active",
  admin = "admin",
  avatar_id = "avatar_id",
  locale_id = "locale_id",
  store_token = "store_token",
  last_updated_password_at = "last_updated_password_at",
  time_zone = "time_zone",
  custom_fields = "custom_fields",
  created_at = "created_at",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(UserScalarFieldEnum, {
  name: "UserScalarFieldEnum",
  description: undefined,
});
