import * as TypeGraphQL from "type-graphql";

export enum App_translationScalarFieldEnum {
  app_id = "app_id",
  language_id = "language_id",
  label = "label",
  description = "description",
  privacy_policy_extensions = "privacy_policy_extensions",
  custom_fields = "custom_fields",
  created_at = "created_at",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(App_translationScalarFieldEnum, {
  name: "App_translationScalarFieldEnum",
  description: undefined,
});
