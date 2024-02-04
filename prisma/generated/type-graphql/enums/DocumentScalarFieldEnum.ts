import * as TypeGraphQL from "type-graphql";

export enum DocumentScalarFieldEnum {
  id = "id",
  document_type_id = "document_type_id",
  referenced_document_id = "referenced_document_id",
  file_type = "file_type",
  order_id = "order_id",
  order_version_id = "order_version_id",
  config = "config",
  sent = "sent",
  "static" = "static",
  deep_link_code = "deep_link_code",
  document_media_file_id = "document_media_file_id",
  custom_fields = "custom_fields",
  created_at = "created_at",
  updated_at = "updated_at",
  document_number = "document_number"
}
TypeGraphQL.registerEnumType(DocumentScalarFieldEnum, {
  name: "DocumentScalarFieldEnum",
  description: undefined,
});
