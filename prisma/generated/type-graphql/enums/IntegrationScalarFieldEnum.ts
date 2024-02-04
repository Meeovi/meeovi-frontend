import * as TypeGraphQL from "type-graphql";

export enum IntegrationScalarFieldEnum {
  id = "id",
  write_access = "write_access",
  access_key = "access_key",
  secret_access_key = "secret_access_key",
  label = "label",
  admin = "admin",
  custom_fields = "custom_fields",
  created_at = "created_at",
  updated_at = "updated_at",
  last_usage_at = "last_usage_at",
  deleted_at = "deleted_at"
}
TypeGraphQL.registerEnumType(IntegrationScalarFieldEnum, {
  name: "IntegrationScalarFieldEnum",
  description: undefined,
});
