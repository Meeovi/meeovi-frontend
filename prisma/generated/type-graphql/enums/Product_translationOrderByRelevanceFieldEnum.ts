import * as TypeGraphQL from "type-graphql";

export enum Product_translationOrderByRelevanceFieldEnum {
  meta_description = "meta_description",
  name = "name",
  keywords = "keywords",
  description = "description",
  meta_title = "meta_title",
  pack_unit = "pack_unit",
  custom_fields = "custom_fields",
  slot_config = "slot_config",
  pack_unit_plural = "pack_unit_plural",
  custom_search_keywords = "custom_search_keywords"
}
TypeGraphQL.registerEnumType(Product_translationOrderByRelevanceFieldEnum, {
  name: "Product_translationOrderByRelevanceFieldEnum",
  description: undefined,
});
