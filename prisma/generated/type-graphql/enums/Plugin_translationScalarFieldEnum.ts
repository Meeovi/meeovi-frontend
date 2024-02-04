import * as TypeGraphQL from "type-graphql";

export enum Plugin_translationScalarFieldEnum {
  plugin_id = "plugin_id",
  language_id = "language_id",
  label = "label",
  description = "description",
  manufacturer_link = "manufacturer_link",
  support_link = "support_link",
  changelog = "changelog",
  custom_fields = "custom_fields",
  created_at = "created_at",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(Plugin_translationScalarFieldEnum, {
  name: "Plugin_translationScalarFieldEnum",
  description: undefined,
});
