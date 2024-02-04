import * as TypeGraphQL from "type-graphql";

export enum Cms_blockScalarFieldEnum {
  id = "id",
  version_id = "version_id",
  cms_section_id = "cms_section_id",
  cms_section_version_id = "cms_section_version_id",
  position = "position",
  section_position = "section_position",
  type = "type",
  name = "name",
  locked = "locked",
  margin_top = "margin_top",
  margin_bottom = "margin_bottom",
  margin_left = "margin_left",
  margin_right = "margin_right",
  background_color = "background_color",
  background_media_id = "background_media_id",
  background_media_mode = "background_media_mode",
  visibility = "visibility",
  css_class = "css_class",
  custom_fields = "custom_fields",
  created_at = "created_at",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(Cms_blockScalarFieldEnum, {
  name: "Cms_blockScalarFieldEnum",
  description: undefined,
});
