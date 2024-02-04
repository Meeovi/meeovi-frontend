import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { BoolNullableFilter } from "../inputs/BoolNullableFilter";
import { BytesFilter } from "../inputs/BytesFilter";
import { BytesNullableFilter } from "../inputs/BytesNullableFilter";
import { Cms_pageNullableRelationFilter } from "../inputs/Cms_pageNullableRelationFilter";
import { Customer_wishlist_productListRelationFilter } from "../inputs/Customer_wishlist_productListRelationFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { DecimalNullableFilter } from "../inputs/DecimalNullableFilter";
import { FloatNullableFilter } from "../inputs/FloatNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { Main_categoryListRelationFilter } from "../inputs/Main_categoryListRelationFilter";
import { Order_line_itemListRelationFilter } from "../inputs/Order_line_itemListRelationFilter";
import { ProductListRelationFilter } from "../inputs/ProductListRelationFilter";
import { ProductNullableRelationFilter } from "../inputs/ProductNullableRelationFilter";
import { Product_categoryListRelationFilter } from "../inputs/Product_categoryListRelationFilter";
import { Product_category_treeListRelationFilter } from "../inputs/Product_category_treeListRelationFilter";
import { Product_configurator_settingListRelationFilter } from "../inputs/Product_configurator_settingListRelationFilter";
import { Product_cross_sellingListRelationFilter } from "../inputs/Product_cross_sellingListRelationFilter";
import { Product_cross_selling_assigned_productsListRelationFilter } from "../inputs/Product_cross_selling_assigned_productsListRelationFilter";
import { Product_custom_field_setListRelationFilter } from "../inputs/Product_custom_field_setListRelationFilter";
import { Product_downloadListRelationFilter } from "../inputs/Product_downloadListRelationFilter";
import { Product_feature_setNullableRelationFilter } from "../inputs/Product_feature_setNullableRelationFilter";
import { Product_manufacturerNullableRelationFilter } from "../inputs/Product_manufacturerNullableRelationFilter";
import { Product_mediaListRelationFilter } from "../inputs/Product_mediaListRelationFilter";
import { Product_optionListRelationFilter } from "../inputs/Product_optionListRelationFilter";
import { Product_priceListRelationFilter } from "../inputs/Product_priceListRelationFilter";
import { Product_propertyListRelationFilter } from "../inputs/Product_propertyListRelationFilter";
import { Product_reviewListRelationFilter } from "../inputs/Product_reviewListRelationFilter";
import { Product_search_keywordListRelationFilter } from "../inputs/Product_search_keywordListRelationFilter";
import { Product_stream_mappingListRelationFilter } from "../inputs/Product_stream_mappingListRelationFilter";
import { Product_tagListRelationFilter } from "../inputs/Product_tagListRelationFilter";
import { Product_translationListRelationFilter } from "../inputs/Product_translationListRelationFilter";
import { Product_visibilityListRelationFilter } from "../inputs/Product_visibilityListRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { Swag_paypal_pos_sales_channel_inventoryListRelationFilter } from "../inputs/Swag_paypal_pos_sales_channel_inventoryListRelationFilter";
import { Swag_paypal_pos_sales_channel_run_logListRelationFilter } from "../inputs/Swag_paypal_pos_sales_channel_run_logListRelationFilter";
import { TaxNullableRelationFilter } from "../inputs/TaxNullableRelationFilter";
import { UnitNullableRelationFilter } from "../inputs/UnitNullableRelationFilter";

@TypeGraphQL.InputType("ProductWhereInput", {})
export class ProductWhereInput {
  @TypeGraphQL.Field(_type => [ProductWhereInput], {
    nullable: true
  })
  AND?: ProductWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductWhereInput], {
    nullable: true
  })
  OR?: ProductWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductWhereInput], {
    nullable: true
  })
  NOT?: ProductWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  version_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  auto_increment?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  product_number?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  active?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  parent_id?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  parent_version_id?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  tax_id?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  product_manufacturer_id?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  product_manufacturer_version_id?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  delivery_time_id?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  deliveryTime?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  product_media_id?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  product_media_version_id?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  cms_page_id?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  cms_page_version_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  unit_id?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  product_feature_set_id?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  category_tree?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  category_ids?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  stream_ids?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  option_ids?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  property_ids?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  manufacturer?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  cover?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  media?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  prices?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  visibilities?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  properties?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  categories?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  translations?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  price?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  listing_prices?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  manufacturer_number?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  ean?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  sales?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  stock?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  available_stock?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  available?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  restock_time?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolNullableFilter, {
    nullable: true
  })
  is_closeout?: BoolNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  purchase_steps?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  max_purchase?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  min_purchase?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalNullableFilter, {
    nullable: true
  })
  purchase_unit?: DecimalNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalNullableFilter, {
    nullable: true
  })
  reference_unit?: DecimalNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolNullableFilter, {
    nullable: true
  })
  shipping_free?: BoolNullableFilter | undefined;

  @TypeGraphQL.Field(_type => FloatNullableFilter, {
    nullable: true
  })
  purchase_price?: FloatNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  purchase_prices?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolNullableFilter, {
    nullable: true
  })
  mark_as_topseller?: BoolNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalNullableFilter, {
    nullable: true
  })
  weight?: DecimalNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalNullableFilter, {
    nullable: true
  })
  width?: DecimalNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalNullableFilter, {
    nullable: true
  })
  height?: DecimalNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DecimalNullableFilter, {
    nullable: true
  })
  length?: DecimalNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  release_date?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  tag_ids?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  tags?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  variant_restrictions?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  configurator_group_config?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  main_variant_id?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  created_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => FloatNullableFilter, {
    nullable: true
  })
  rating_average?: FloatNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  display_group?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  child_count?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  crossSellings?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  featureSet?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  customFieldSets?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolNullableFilter, {
    nullable: true
  })
  custom_field_set_selection_active?: BoolNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  canonical_product_id?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  canonicalProduct?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  cmsPage?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  cheapest_price?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  cheapest_price_accessor?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  states?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolNullableFilter, {
    nullable: true
  })
  display_parent?: BoolNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  variant_listing_config?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => Customer_wishlist_productListRelationFilter, {
    nullable: true
  })
  customer_wishlist_product?: Customer_wishlist_productListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Main_categoryListRelationFilter, {
    nullable: true
  })
  main_category?: Main_categoryListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Order_line_itemListRelationFilter, {
    nullable: true
  })
  order_line_item?: Order_line_itemListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ProductNullableRelationFilter, {
    nullable: true
  })
  product_product_canonical_product_idToproduct?: ProductNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ProductListRelationFilter, {
    nullable: true
  })
  other_product_product_canonical_product_idToproduct?: ProductListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Cms_pageNullableRelationFilter, {
    nullable: true
  })
  cms_page?: Cms_pageNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Product_feature_setNullableRelationFilter, {
    nullable: true
  })
  product_feature_set?: Product_feature_setNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ProductNullableRelationFilter, {
    nullable: true
  })
  product_product_main_variant_idToproduct?: ProductNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ProductListRelationFilter, {
    nullable: true
  })
  other_product_product_main_variant_idToproduct?: ProductListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ProductNullableRelationFilter, {
    nullable: true
  })
  product_product_parent_id_parent_version_idToproduct?: ProductNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ProductListRelationFilter, {
    nullable: true
  })
  other_product_product_parent_id_parent_version_idToproduct?: ProductListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TaxNullableRelationFilter, {
    nullable: true
  })
  tax?: TaxNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => UnitNullableRelationFilter, {
    nullable: true
  })
  unit?: UnitNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Product_manufacturerNullableRelationFilter, {
    nullable: true
  })
  product_manufacturer?: Product_manufacturerNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Product_categoryListRelationFilter, {
    nullable: true
  })
  product_category?: Product_categoryListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Product_category_treeListRelationFilter, {
    nullable: true
  })
  product_category_tree?: Product_category_treeListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Product_configurator_settingListRelationFilter, {
    nullable: true
  })
  product_configurator_setting?: Product_configurator_settingListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Product_cross_sellingListRelationFilter, {
    nullable: true
  })
  product_cross_selling?: Product_cross_sellingListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Product_cross_selling_assigned_productsListRelationFilter, {
    nullable: true
  })
  product_cross_selling_assigned_products?: Product_cross_selling_assigned_productsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Product_custom_field_setListRelationFilter, {
    nullable: true
  })
  product_custom_field_set?: Product_custom_field_setListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Product_downloadListRelationFilter, {
    nullable: true
  })
  product_download?: Product_downloadListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Product_mediaListRelationFilter, {
    nullable: true
  })
  product_media?: Product_mediaListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Product_optionListRelationFilter, {
    nullable: true
  })
  product_option?: Product_optionListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Product_priceListRelationFilter, {
    nullable: true
  })
  product_price?: Product_priceListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Product_propertyListRelationFilter, {
    nullable: true
  })
  product_property?: Product_propertyListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Product_reviewListRelationFilter, {
    nullable: true
  })
  product_review?: Product_reviewListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Product_search_keywordListRelationFilter, {
    nullable: true
  })
  product_search_keyword?: Product_search_keywordListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Product_stream_mappingListRelationFilter, {
    nullable: true
  })
  product_stream_mapping?: Product_stream_mappingListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Product_tagListRelationFilter, {
    nullable: true
  })
  product_tag?: Product_tagListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Product_translationListRelationFilter, {
    nullable: true
  })
  product_translation?: Product_translationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Product_visibilityListRelationFilter, {
    nullable: true
  })
  product_visibility?: Product_visibilityListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Swag_paypal_pos_sales_channel_inventoryListRelationFilter, {
    nullable: true
  })
  swag_paypal_pos_sales_channel_inventory?: Swag_paypal_pos_sales_channel_inventoryListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Swag_paypal_pos_sales_channel_run_logListRelationFilter, {
    nullable: true
  })
  swag_paypal_pos_sales_channel_run_log?: Swag_paypal_pos_sales_channel_run_logListRelationFilter | undefined;
}
