import * as TypeGraphQL from "type-graphql";

export enum User_configScalarFieldEnum {
  id = "id",
  user_id = "user_id",
  key = "key",
  value = "value",
  created_at = "created_at",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(User_configScalarFieldEnum, {
  name: "User_configScalarFieldEnum",
  description: undefined,
});
