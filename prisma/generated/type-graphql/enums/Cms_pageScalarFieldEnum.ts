import * as TypeGraphQL from "type-graphql";

export enum Cms_pageScalarFieldEnum {
  id = "id",
  version_id = "version_id",
  type = "type",
  entity = "entity",
  preview_media_id = "preview_media_id",
  locked = "locked",
  css_class = "css_class",
  config = "config",
  created_at = "created_at",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(Cms_pageScalarFieldEnum, {
  name: "Cms_pageScalarFieldEnum",
  description: undefined,
});
