import * as TypeGraphQL from "type-graphql";

export enum ProductOrderByRelevanceFieldEnum {
  product_number = "product_number",
  category_tree = "category_tree",
  category_ids = "category_ids",
  stream_ids = "stream_ids",
  option_ids = "option_ids",
  property_ids = "property_ids",
  price = "price",
  listing_prices = "listing_prices",
  manufacturer_number = "manufacturer_number",
  ean = "ean",
  purchase_prices = "purchase_prices",
  tag_ids = "tag_ids",
  variant_restrictions = "variant_restrictions",
  configurator_group_config = "configurator_group_config",
  display_group = "display_group",
  cheapest_price = "cheapest_price",
  cheapest_price_accessor = "cheapest_price_accessor",
  states = "states",
  variant_listing_config = "variant_listing_config"
}
TypeGraphQL.registerEnumType(ProductOrderByRelevanceFieldEnum, {
  name: "ProductOrderByRelevanceFieldEnum",
  description: undefined,
});
