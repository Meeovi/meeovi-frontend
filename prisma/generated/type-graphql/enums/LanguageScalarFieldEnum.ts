import * as TypeGraphQL from "type-graphql";

export enum LanguageScalarFieldEnum {
  id = "id",
  name = "name",
  parent_id = "parent_id",
  swag_language_pack_language_id = "swag_language_pack_language_id",
  locale_id = "locale_id",
  translation_code_id = "translation_code_id",
  custom_fields = "custom_fields",
  created_at = "created_at",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(LanguageScalarFieldEnum, {
  name: "LanguageScalarFieldEnum",
  description: undefined,
});
