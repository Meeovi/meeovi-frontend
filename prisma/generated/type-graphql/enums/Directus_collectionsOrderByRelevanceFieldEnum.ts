import * as TypeGraphQL from "type-graphql";

export enum Directus_collectionsOrderByRelevanceFieldEnum {
  collection = "collection",
  icon = "icon",
  note = "note",
  display_template = "display_template",
  translations = "translations",
  archive_field = "archive_field",
  archive_value = "archive_value",
  unarchive_value = "unarchive_value",
  sort_field = "sort_field",
  accountability = "accountability",
  color = "color",
  item_duplication_fields = "item_duplication_fields",
  group = "group",
  collapse = "collapse",
  preview_url = "preview_url"
}
TypeGraphQL.registerEnumType(Directus_collectionsOrderByRelevanceFieldEnum, {
  name: "Directus_collectionsOrderByRelevanceFieldEnum",
  description: undefined,
});
