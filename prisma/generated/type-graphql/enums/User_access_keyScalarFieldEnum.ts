import * as TypeGraphQL from "type-graphql";

export enum User_access_keyScalarFieldEnum {
  id = "id",
  user_id = "user_id",
  write_access = "write_access",
  access_key = "access_key",
  secret_access_key = "secret_access_key",
  last_usage_at = "last_usage_at",
  custom_fields = "custom_fields",
  created_at = "created_at",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(User_access_keyScalarFieldEnum, {
  name: "User_access_keyScalarFieldEnum",
  description: undefined,
});
