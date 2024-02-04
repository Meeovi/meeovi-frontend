import * as TypeGraphQL from "type-graphql";

export enum Cms_sectionOrderByRelevanceFieldEnum {
  type = "type",
  name = "name",
  sizing_mode = "sizing_mode",
  mobile_behavior = "mobile_behavior",
  background_color = "background_color",
  background_media_mode = "background_media_mode",
  visibility = "visibility",
  css_class = "css_class",
  custom_fields = "custom_fields"
}
TypeGraphQL.registerEnumType(Cms_sectionOrderByRelevanceFieldEnum, {
  name: "Cms_sectionOrderByRelevanceFieldEnum",
  description: undefined,
});
