import * as TypeGraphQL from "type-graphql";

export enum Custom_entityScalarFieldEnum {
  id = "id",
  name = "name",
  fields = "fields",
  app_id = "app_id",
  created_at = "created_at",
  updated_at = "updated_at",
  flags = "flags",
  plugin_id = "plugin_id",
  custom_fields_aware = "custom_fields_aware",
  label_property = "label_property",
  deleted_at = "deleted_at"
}
TypeGraphQL.registerEnumType(Custom_entityScalarFieldEnum, {
  name: "Custom_entityScalarFieldEnum",
  description: undefined,
});
