import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_pageOrderByWithRelationAndSearchRelevanceInput } from "../inputs/Cms_pageOrderByWithRelationAndSearchRelevanceInput";
import { Customer_wishlist_productOrderByRelationAggregateInput } from "../inputs/Customer_wishlist_productOrderByRelationAggregateInput";
import { Main_categoryOrderByRelationAggregateInput } from "../inputs/Main_categoryOrderByRelationAggregateInput";
import { Order_line_itemOrderByRelationAggregateInput } from "../inputs/Order_line_itemOrderByRelationAggregateInput";
import { ProductOrderByRelationAggregateInput } from "../inputs/ProductOrderByRelationAggregateInput";
import { ProductOrderByRelevanceInput } from "../inputs/ProductOrderByRelevanceInput";
import { Product_categoryOrderByRelationAggregateInput } from "../inputs/Product_categoryOrderByRelationAggregateInput";
import { Product_category_treeOrderByRelationAggregateInput } from "../inputs/Product_category_treeOrderByRelationAggregateInput";
import { Product_configurator_settingOrderByRelationAggregateInput } from "../inputs/Product_configurator_settingOrderByRelationAggregateInput";
import { Product_cross_sellingOrderByRelationAggregateInput } from "../inputs/Product_cross_sellingOrderByRelationAggregateInput";
import { Product_cross_selling_assigned_productsOrderByRelationAggregateInput } from "../inputs/Product_cross_selling_assigned_productsOrderByRelationAggregateInput";
import { Product_custom_field_setOrderByRelationAggregateInput } from "../inputs/Product_custom_field_setOrderByRelationAggregateInput";
import { Product_downloadOrderByRelationAggregateInput } from "../inputs/Product_downloadOrderByRelationAggregateInput";
import { Product_feature_setOrderByWithRelationAndSearchRelevanceInput } from "../inputs/Product_feature_setOrderByWithRelationAndSearchRelevanceInput";
import { Product_manufacturerOrderByWithRelationAndSearchRelevanceInput } from "../inputs/Product_manufacturerOrderByWithRelationAndSearchRelevanceInput";
import { Product_mediaOrderByRelationAggregateInput } from "../inputs/Product_mediaOrderByRelationAggregateInput";
import { Product_optionOrderByRelationAggregateInput } from "../inputs/Product_optionOrderByRelationAggregateInput";
import { Product_priceOrderByRelationAggregateInput } from "../inputs/Product_priceOrderByRelationAggregateInput";
import { Product_propertyOrderByRelationAggregateInput } from "../inputs/Product_propertyOrderByRelationAggregateInput";
import { Product_reviewOrderByRelationAggregateInput } from "../inputs/Product_reviewOrderByRelationAggregateInput";
import { Product_search_keywordOrderByRelationAggregateInput } from "../inputs/Product_search_keywordOrderByRelationAggregateInput";
import { Product_stream_mappingOrderByRelationAggregateInput } from "../inputs/Product_stream_mappingOrderByRelationAggregateInput";
import { Product_tagOrderByRelationAggregateInput } from "../inputs/Product_tagOrderByRelationAggregateInput";
import { Product_translationOrderByRelationAggregateInput } from "../inputs/Product_translationOrderByRelationAggregateInput";
import { Product_visibilityOrderByRelationAggregateInput } from "../inputs/Product_visibilityOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { Swag_paypal_pos_sales_channel_inventoryOrderByRelationAggregateInput } from "../inputs/Swag_paypal_pos_sales_channel_inventoryOrderByRelationAggregateInput";
import { Swag_paypal_pos_sales_channel_run_logOrderByRelationAggregateInput } from "../inputs/Swag_paypal_pos_sales_channel_run_logOrderByRelationAggregateInput";
import { TaxOrderByWithRelationAndSearchRelevanceInput } from "../inputs/TaxOrderByWithRelationAndSearchRelevanceInput";
import { UnitOrderByWithRelationAndSearchRelevanceInput } from "../inputs/UnitOrderByWithRelationAndSearchRelevanceInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ProductOrderByWithRelationAndSearchRelevanceInput", {})
export class ProductOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  version_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  auto_increment?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  product_number?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  active?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  parent_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  parent_version_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  tax_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  product_manufacturer_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  product_manufacturer_version_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  delivery_time_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  deliveryTime?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  product_media_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  product_media_version_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  cms_page_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  cms_page_version_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  unit_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  product_feature_set_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  category_tree?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  category_ids?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  stream_ids?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  option_ids?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  property_ids?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  manufacturer?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  cover?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  media?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  prices?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  visibilities?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  properties?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  categories?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  translations?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  price?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  listing_prices?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  manufacturer_number?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  ean?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  sales?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  stock?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  available_stock?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  available?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  restock_time?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  is_closeout?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  purchase_steps?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  max_purchase?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  min_purchase?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  purchase_unit?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  reference_unit?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  shipping_free?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  purchase_price?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  purchase_prices?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  mark_as_topseller?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  weight?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  width?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  height?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  length?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  release_date?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  tag_ids?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  tags?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  variant_restrictions?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  configurator_group_config?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  main_variant_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  created_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  rating_average?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  display_group?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  child_count?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  crossSellings?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  featureSet?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  customFieldSets?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  custom_field_set_selection_active?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  canonical_product_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  canonicalProduct?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  cmsPage?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  cheapest_price?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  cheapest_price_accessor?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  states?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  display_parent?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  variant_listing_config?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Customer_wishlist_productOrderByRelationAggregateInput, {
    nullable: true
  })
  customer_wishlist_product?: Customer_wishlist_productOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Main_categoryOrderByRelationAggregateInput, {
    nullable: true
  })
  main_category?: Main_categoryOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Order_line_itemOrderByRelationAggregateInput, {
    nullable: true
  })
  order_line_item?: Order_line_itemOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProductOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  product_product_canonical_product_idToproduct?: ProductOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => ProductOrderByRelationAggregateInput, {
    nullable: true
  })
  other_product_product_canonical_product_idToproduct?: ProductOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Cms_pageOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  cms_page?: Cms_pageOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Product_feature_setOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  product_feature_set?: Product_feature_setOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => ProductOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  product_product_main_variant_idToproduct?: ProductOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => ProductOrderByRelationAggregateInput, {
    nullable: true
  })
  other_product_product_main_variant_idToproduct?: ProductOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProductOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  product_product_parent_id_parent_version_idToproduct?: ProductOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => ProductOrderByRelationAggregateInput, {
    nullable: true
  })
  other_product_product_parent_id_parent_version_idToproduct?: ProductOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TaxOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  tax?: TaxOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => UnitOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  unit?: UnitOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Product_manufacturerOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  product_manufacturer?: Product_manufacturerOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Product_categoryOrderByRelationAggregateInput, {
    nullable: true
  })
  product_category?: Product_categoryOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_category_treeOrderByRelationAggregateInput, {
    nullable: true
  })
  product_category_tree?: Product_category_treeOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_configurator_settingOrderByRelationAggregateInput, {
    nullable: true
  })
  product_configurator_setting?: Product_configurator_settingOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_cross_sellingOrderByRelationAggregateInput, {
    nullable: true
  })
  product_cross_selling?: Product_cross_sellingOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_cross_selling_assigned_productsOrderByRelationAggregateInput, {
    nullable: true
  })
  product_cross_selling_assigned_products?: Product_cross_selling_assigned_productsOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_custom_field_setOrderByRelationAggregateInput, {
    nullable: true
  })
  product_custom_field_set?: Product_custom_field_setOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_downloadOrderByRelationAggregateInput, {
    nullable: true
  })
  product_download?: Product_downloadOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_mediaOrderByRelationAggregateInput, {
    nullable: true
  })
  product_media?: Product_mediaOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_optionOrderByRelationAggregateInput, {
    nullable: true
  })
  product_option?: Product_optionOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_priceOrderByRelationAggregateInput, {
    nullable: true
  })
  product_price?: Product_priceOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_propertyOrderByRelationAggregateInput, {
    nullable: true
  })
  product_property?: Product_propertyOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_reviewOrderByRelationAggregateInput, {
    nullable: true
  })
  product_review?: Product_reviewOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_search_keywordOrderByRelationAggregateInput, {
    nullable: true
  })
  product_search_keyword?: Product_search_keywordOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_stream_mappingOrderByRelationAggregateInput, {
    nullable: true
  })
  product_stream_mapping?: Product_stream_mappingOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_tagOrderByRelationAggregateInput, {
    nullable: true
  })
  product_tag?: Product_tagOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_translationOrderByRelationAggregateInput, {
    nullable: true
  })
  product_translation?: Product_translationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_visibilityOrderByRelationAggregateInput, {
    nullable: true
  })
  product_visibility?: Product_visibilityOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Swag_paypal_pos_sales_channel_inventoryOrderByRelationAggregateInput, {
    nullable: true
  })
  swag_paypal_pos_sales_channel_inventory?: Swag_paypal_pos_sales_channel_inventoryOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Swag_paypal_pos_sales_channel_run_logOrderByRelationAggregateInput, {
    nullable: true
  })
  swag_paypal_pos_sales_channel_run_log?: Swag_paypal_pos_sales_channel_run_logOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProductOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: ProductOrderByRelevanceInput | undefined;
}
