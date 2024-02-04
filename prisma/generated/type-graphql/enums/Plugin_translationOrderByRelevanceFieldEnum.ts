import * as TypeGraphQL from "type-graphql";

export enum Plugin_translationOrderByRelevanceFieldEnum {
  label = "label",
  description = "description",
  manufacturer_link = "manufacturer_link",
  support_link = "support_link",
  changelog = "changelog",
  custom_fields = "custom_fields"
}
TypeGraphQL.registerEnumType(Plugin_translationOrderByRelevanceFieldEnum, {
  name: "Plugin_translationOrderByRelevanceFieldEnum",
  description: undefined,
});
