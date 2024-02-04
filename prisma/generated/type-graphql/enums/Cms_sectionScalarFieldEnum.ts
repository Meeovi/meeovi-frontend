import * as TypeGraphQL from "type-graphql";

export enum Cms_sectionScalarFieldEnum {
  id = "id",
  version_id = "version_id",
  cms_page_id = "cms_page_id",
  cms_page_version_id = "cms_page_version_id",
  position = "position",
  type = "type",
  name = "name",
  locked = "locked",
  sizing_mode = "sizing_mode",
  mobile_behavior = "mobile_behavior",
  background_color = "background_color",
  background_media_id = "background_media_id",
  background_media_mode = "background_media_mode",
  visibility = "visibility",
  css_class = "css_class",
  custom_fields = "custom_fields",
  created_at = "created_at",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(Cms_sectionScalarFieldEnum, {
  name: "Cms_sectionScalarFieldEnum",
  description: undefined,
});
