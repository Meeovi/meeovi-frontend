import * as TypeGraphQL from "type-graphql";

export enum Cms_blockOrderByRelevanceFieldEnum {
  section_position = "section_position",
  type = "type",
  name = "name",
  margin_top = "margin_top",
  margin_bottom = "margin_bottom",
  margin_left = "margin_left",
  margin_right = "margin_right",
  background_color = "background_color",
  background_media_mode = "background_media_mode",
  visibility = "visibility",
  css_class = "css_class",
  custom_fields = "custom_fields"
}
TypeGraphQL.registerEnumType(Cms_blockOrderByRelevanceFieldEnum, {
  name: "Cms_blockOrderByRelevanceFieldEnum",
  description: undefined,
});
