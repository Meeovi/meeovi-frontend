import * as TypeGraphQL from "type-graphql";

export enum CategoryScalarFieldEnum {
  id = "id",
  version_id = "version_id",
  auto_increment = "auto_increment",
  parent_id = "parent_id",
  parent_version_id = "parent_version_id",
  media_id = "media_id",
  cms_page_id = "cms_page_id",
  cms_page_version_id = "cms_page_version_id",
  product_stream_id = "product_stream_id",
  product_assignment_type = "product_assignment_type",
  path = "path",
  after_category_id = "after_category_id",
  after_category_version_id = "after_category_version_id",
  level = "level",
  active = "active",
  child_count = "child_count",
  display_nested_products = "display_nested_products",
  visible = "visible",
  type = "type",
  created_at = "created_at",
  updated_at = "updated_at",
  custom_entity_type_id = "custom_entity_type_id"
}
TypeGraphQL.registerEnumType(CategoryScalarFieldEnum, {
  name: "CategoryScalarFieldEnum",
  description: undefined,
});
