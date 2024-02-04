import * as TypeGraphQL from "type-graphql";

export enum Directus_usersScalarFieldEnum {
  id = "id",
  first_name = "first_name",
  last_name = "last_name",
  email = "email",
  password = "password",
  location = "location",
  title = "title",
  description = "description",
  tags = "tags",
  avatar = "avatar",
  language = "language",
  theme = "theme",
  tfa_secret = "tfa_secret",
  status = "status",
  role = "role",
  token = "token",
  last_access = "last_access",
  last_page = "last_page",
  provider = "provider",
  external_identifier = "external_identifier",
  auth_data = "auth_data",
  email_notifications = "email_notifications"
}
TypeGraphQL.registerEnumType(Directus_usersScalarFieldEnum, {
  name: "Directus_usersScalarFieldEnum",
  description: undefined,
});
