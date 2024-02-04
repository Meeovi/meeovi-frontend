import * as TypeGraphQL from "type-graphql";

export enum Document_base_configScalarFieldEnum {
  id = "id",
  name = "name",
  filename_prefix = "filename_prefix",
  filename_suffix = "filename_suffix",
  document_number = "document_number",
  global = "global",
  document_type_id = "document_type_id",
  logo_id = "logo_id",
  config = "config",
  custom_fields = "custom_fields",
  created_at = "created_at",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(Document_base_configScalarFieldEnum, {
  name: "Document_base_configScalarFieldEnum",
  description: undefined,
});
