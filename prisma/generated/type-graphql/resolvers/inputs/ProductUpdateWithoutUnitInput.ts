import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { BytesFieldUpdateOperationsInput } from "../inputs/BytesFieldUpdateOperationsInput";
import { Cms_pageUpdateOneWithoutProductNestedInput } from "../inputs/Cms_pageUpdateOneWithoutProductNestedInput";
import { Customer_wishlist_productUpdateManyWithoutProductNestedInput } from "../inputs/Customer_wishlist_productUpdateManyWithoutProductNestedInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { Main_categoryUpdateManyWithoutProductNestedInput } from "../inputs/Main_categoryUpdateManyWithoutProductNestedInput";
import { NullableBoolFieldUpdateOperationsInput } from "../inputs/NullableBoolFieldUpdateOperationsInput";
import { NullableBytesFieldUpdateOperationsInput } from "../inputs/NullableBytesFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableDecimalFieldUpdateOperationsInput } from "../inputs/NullableDecimalFieldUpdateOperationsInput";
import { NullableFloatFieldUpdateOperationsInput } from "../inputs/NullableFloatFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { Order_line_itemUpdateManyWithoutProductNestedInput } from "../inputs/Order_line_itemUpdateManyWithoutProductNestedInput";
import { ProductUpdateManyWithoutProduct_product_canonical_product_idToproductNestedInput } from "../inputs/ProductUpdateManyWithoutProduct_product_canonical_product_idToproductNestedInput";
import { ProductUpdateManyWithoutProduct_product_main_variant_idToproductNestedInput } from "../inputs/ProductUpdateManyWithoutProduct_product_main_variant_idToproductNestedInput";
import { ProductUpdateManyWithoutProduct_product_parent_id_parent_version_idToproductNestedInput } from "../inputs/ProductUpdateManyWithoutProduct_product_parent_id_parent_version_idToproductNestedInput";
import { ProductUpdateOneWithoutOther_product_product_canonical_product_idToproductNestedInput } from "../inputs/ProductUpdateOneWithoutOther_product_product_canonical_product_idToproductNestedInput";
import { ProductUpdateOneWithoutOther_product_product_main_variant_idToproductNestedInput } from "../inputs/ProductUpdateOneWithoutOther_product_product_main_variant_idToproductNestedInput";
import { ProductUpdateOneWithoutOther_product_product_parent_id_parent_version_idToproductNestedInput } from "../inputs/ProductUpdateOneWithoutOther_product_product_parent_id_parent_version_idToproductNestedInput";
import { Product_categoryUpdateManyWithoutProductNestedInput } from "../inputs/Product_categoryUpdateManyWithoutProductNestedInput";
import { Product_category_treeUpdateManyWithoutProductNestedInput } from "../inputs/Product_category_treeUpdateManyWithoutProductNestedInput";
import { Product_configurator_settingUpdateManyWithoutProductNestedInput } from "../inputs/Product_configurator_settingUpdateManyWithoutProductNestedInput";
import { Product_cross_sellingUpdateManyWithoutProductNestedInput } from "../inputs/Product_cross_sellingUpdateManyWithoutProductNestedInput";
import { Product_cross_selling_assigned_productsUpdateManyWithoutProductNestedInput } from "../inputs/Product_cross_selling_assigned_productsUpdateManyWithoutProductNestedInput";
import { Product_custom_field_setUpdateManyWithoutProductNestedInput } from "../inputs/Product_custom_field_setUpdateManyWithoutProductNestedInput";
import { Product_downloadUpdateManyWithoutProductNestedInput } from "../inputs/Product_downloadUpdateManyWithoutProductNestedInput";
import { Product_feature_setUpdateOneWithoutProductNestedInput } from "../inputs/Product_feature_setUpdateOneWithoutProductNestedInput";
import { Product_manufacturerUpdateOneWithoutProductNestedInput } from "../inputs/Product_manufacturerUpdateOneWithoutProductNestedInput";
import { Product_mediaUpdateManyWithoutProductNestedInput } from "../inputs/Product_mediaUpdateManyWithoutProductNestedInput";
import { Product_optionUpdateManyWithoutProductNestedInput } from "../inputs/Product_optionUpdateManyWithoutProductNestedInput";
import { Product_priceUpdateManyWithoutProductNestedInput } from "../inputs/Product_priceUpdateManyWithoutProductNestedInput";
import { Product_propertyUpdateManyWithoutProductNestedInput } from "../inputs/Product_propertyUpdateManyWithoutProductNestedInput";
import { Product_reviewUpdateManyWithoutProductNestedInput } from "../inputs/Product_reviewUpdateManyWithoutProductNestedInput";
import { Product_search_keywordUpdateManyWithoutProductNestedInput } from "../inputs/Product_search_keywordUpdateManyWithoutProductNestedInput";
import { Product_stream_mappingUpdateManyWithoutProductNestedInput } from "../inputs/Product_stream_mappingUpdateManyWithoutProductNestedInput";
import { Product_tagUpdateManyWithoutProductNestedInput } from "../inputs/Product_tagUpdateManyWithoutProductNestedInput";
import { Product_translationUpdateManyWithoutProductNestedInput } from "../inputs/Product_translationUpdateManyWithoutProductNestedInput";
import { Product_visibilityUpdateManyWithoutProductNestedInput } from "../inputs/Product_visibilityUpdateManyWithoutProductNestedInput";
import { Swag_paypal_pos_sales_channel_inventoryUpdateManyWithoutProductNestedInput } from "../inputs/Swag_paypal_pos_sales_channel_inventoryUpdateManyWithoutProductNestedInput";
import { Swag_paypal_pos_sales_channel_run_logUpdateManyWithoutProductNestedInput } from "../inputs/Swag_paypal_pos_sales_channel_run_logUpdateManyWithoutProductNestedInput";
import { TaxUpdateOneWithoutProductNestedInput } from "../inputs/TaxUpdateOneWithoutProductNestedInput";

@TypeGraphQL.InputType("ProductUpdateWithoutUnitInput", {})
export class ProductUpdateWithoutUnitInput {
  @TypeGraphQL.Field(_type => BytesFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: BytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BytesFieldUpdateOperationsInput, {
    nullable: true
  })
  version_id?: BytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  product_number?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput, {
    nullable: true
  })
  active?: NullableIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableBytesFieldUpdateOperationsInput, {
    nullable: true
  })
  delivery_time_id?: NullableBytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableBytesFieldUpdateOperationsInput, {
    nullable: true
  })
  deliveryTime?: NullableBytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableBytesFieldUpdateOperationsInput, {
    nullable: true
  })
  product_media_id?: NullableBytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableBytesFieldUpdateOperationsInput, {
    nullable: true
  })
  product_media_version_id?: NullableBytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  category_tree?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  category_ids?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  stream_ids?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  option_ids?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  property_ids?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableBytesFieldUpdateOperationsInput, {
    nullable: true
  })
  manufacturer?: NullableBytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableBytesFieldUpdateOperationsInput, {
    nullable: true
  })
  cover?: NullableBytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableBytesFieldUpdateOperationsInput, {
    nullable: true
  })
  media?: NullableBytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableBytesFieldUpdateOperationsInput, {
    nullable: true
  })
  prices?: NullableBytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableBytesFieldUpdateOperationsInput, {
    nullable: true
  })
  visibilities?: NullableBytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableBytesFieldUpdateOperationsInput, {
    nullable: true
  })
  properties?: NullableBytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableBytesFieldUpdateOperationsInput, {
    nullable: true
  })
  categories?: NullableBytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableBytesFieldUpdateOperationsInput, {
    nullable: true
  })
  translations?: NullableBytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  price?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  listing_prices?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  manufacturer_number?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  ean?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  sales?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  stock?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput, {
    nullable: true
  })
  available_stock?: NullableIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  available?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput, {
    nullable: true
  })
  restock_time?: NullableIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput, {
    nullable: true
  })
  is_closeout?: NullableBoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput, {
    nullable: true
  })
  purchase_steps?: NullableIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput, {
    nullable: true
  })
  max_purchase?: NullableIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput, {
    nullable: true
  })
  min_purchase?: NullableIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDecimalFieldUpdateOperationsInput, {
    nullable: true
  })
  purchase_unit?: NullableDecimalFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDecimalFieldUpdateOperationsInput, {
    nullable: true
  })
  reference_unit?: NullableDecimalFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput, {
    nullable: true
  })
  shipping_free?: NullableBoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableFloatFieldUpdateOperationsInput, {
    nullable: true
  })
  purchase_price?: NullableFloatFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  purchase_prices?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput, {
    nullable: true
  })
  mark_as_topseller?: NullableBoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDecimalFieldUpdateOperationsInput, {
    nullable: true
  })
  weight?: NullableDecimalFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDecimalFieldUpdateOperationsInput, {
    nullable: true
  })
  width?: NullableDecimalFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDecimalFieldUpdateOperationsInput, {
    nullable: true
  })
  height?: NullableDecimalFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDecimalFieldUpdateOperationsInput, {
    nullable: true
  })
  length?: NullableDecimalFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  release_date?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  tag_ids?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableBytesFieldUpdateOperationsInput, {
    nullable: true
  })
  tags?: NullableBytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  variant_restrictions?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  configurator_group_config?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  created_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updated_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableFloatFieldUpdateOperationsInput, {
    nullable: true
  })
  rating_average?: NullableFloatFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  display_group?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput, {
    nullable: true
  })
  child_count?: NullableIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableBytesFieldUpdateOperationsInput, {
    nullable: true
  })
  crossSellings?: NullableBytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableBytesFieldUpdateOperationsInput, {
    nullable: true
  })
  featureSet?: NullableBytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableBytesFieldUpdateOperationsInput, {
    nullable: true
  })
  customFieldSets?: NullableBytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput, {
    nullable: true
  })
  custom_field_set_selection_active?: NullableBoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableBytesFieldUpdateOperationsInput, {
    nullable: true
  })
  canonicalProduct?: NullableBytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableBytesFieldUpdateOperationsInput, {
    nullable: true
  })
  cmsPage?: NullableBytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  cheapest_price?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  cheapest_price_accessor?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  states?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput, {
    nullable: true
  })
  display_parent?: NullableBoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  variant_listing_config?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => Customer_wishlist_productUpdateManyWithoutProductNestedInput, {
    nullable: true
  })
  customer_wishlist_product?: Customer_wishlist_productUpdateManyWithoutProductNestedInput | undefined;

  @TypeGraphQL.Field(_type => Main_categoryUpdateManyWithoutProductNestedInput, {
    nullable: true
  })
  main_category?: Main_categoryUpdateManyWithoutProductNestedInput | undefined;

  @TypeGraphQL.Field(_type => Order_line_itemUpdateManyWithoutProductNestedInput, {
    nullable: true
  })
  order_line_item?: Order_line_itemUpdateManyWithoutProductNestedInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpdateOneWithoutOther_product_product_canonical_product_idToproductNestedInput, {
    nullable: true
  })
  product_product_canonical_product_idToproduct?: ProductUpdateOneWithoutOther_product_product_canonical_product_idToproductNestedInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpdateManyWithoutProduct_product_canonical_product_idToproductNestedInput, {
    nullable: true
  })
  other_product_product_canonical_product_idToproduct?: ProductUpdateManyWithoutProduct_product_canonical_product_idToproductNestedInput | undefined;

  @TypeGraphQL.Field(_type => Cms_pageUpdateOneWithoutProductNestedInput, {
    nullable: true
  })
  cms_page?: Cms_pageUpdateOneWithoutProductNestedInput | undefined;

  @TypeGraphQL.Field(_type => Product_feature_setUpdateOneWithoutProductNestedInput, {
    nullable: true
  })
  product_feature_set?: Product_feature_setUpdateOneWithoutProductNestedInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpdateOneWithoutOther_product_product_main_variant_idToproductNestedInput, {
    nullable: true
  })
  product_product_main_variant_idToproduct?: ProductUpdateOneWithoutOther_product_product_main_variant_idToproductNestedInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpdateManyWithoutProduct_product_main_variant_idToproductNestedInput, {
    nullable: true
  })
  other_product_product_main_variant_idToproduct?: ProductUpdateManyWithoutProduct_product_main_variant_idToproductNestedInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpdateOneWithoutOther_product_product_parent_id_parent_version_idToproductNestedInput, {
    nullable: true
  })
  product_product_parent_id_parent_version_idToproduct?: ProductUpdateOneWithoutOther_product_product_parent_id_parent_version_idToproductNestedInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpdateManyWithoutProduct_product_parent_id_parent_version_idToproductNestedInput, {
    nullable: true
  })
  other_product_product_parent_id_parent_version_idToproduct?: ProductUpdateManyWithoutProduct_product_parent_id_parent_version_idToproductNestedInput | undefined;

  @TypeGraphQL.Field(_type => TaxUpdateOneWithoutProductNestedInput, {
    nullable: true
  })
  tax?: TaxUpdateOneWithoutProductNestedInput | undefined;

  @TypeGraphQL.Field(_type => Product_manufacturerUpdateOneWithoutProductNestedInput, {
    nullable: true
  })
  product_manufacturer?: Product_manufacturerUpdateOneWithoutProductNestedInput | undefined;

  @TypeGraphQL.Field(_type => Product_categoryUpdateManyWithoutProductNestedInput, {
    nullable: true
  })
  product_category?: Product_categoryUpdateManyWithoutProductNestedInput | undefined;

  @TypeGraphQL.Field(_type => Product_category_treeUpdateManyWithoutProductNestedInput, {
    nullable: true
  })
  product_category_tree?: Product_category_treeUpdateManyWithoutProductNestedInput | undefined;

  @TypeGraphQL.Field(_type => Product_configurator_settingUpdateManyWithoutProductNestedInput, {
    nullable: true
  })
  product_configurator_setting?: Product_configurator_settingUpdateManyWithoutProductNestedInput | undefined;

  @TypeGraphQL.Field(_type => Product_cross_sellingUpdateManyWithoutProductNestedInput, {
    nullable: true
  })
  product_cross_selling?: Product_cross_sellingUpdateManyWithoutProductNestedInput | undefined;

  @TypeGraphQL.Field(_type => Product_cross_selling_assigned_productsUpdateManyWithoutProductNestedInput, {
    nullable: true
  })
  product_cross_selling_assigned_products?: Product_cross_selling_assigned_productsUpdateManyWithoutProductNestedInput | undefined;

  @TypeGraphQL.Field(_type => Product_custom_field_setUpdateManyWithoutProductNestedInput, {
    nullable: true
  })
  product_custom_field_set?: Product_custom_field_setUpdateManyWithoutProductNestedInput | undefined;

  @TypeGraphQL.Field(_type => Product_downloadUpdateManyWithoutProductNestedInput, {
    nullable: true
  })
  product_download?: Product_downloadUpdateManyWithoutProductNestedInput | undefined;

  @TypeGraphQL.Field(_type => Product_mediaUpdateManyWithoutProductNestedInput, {
    nullable: true
  })
  product_media?: Product_mediaUpdateManyWithoutProductNestedInput | undefined;

  @TypeGraphQL.Field(_type => Product_optionUpdateManyWithoutProductNestedInput, {
    nullable: true
  })
  product_option?: Product_optionUpdateManyWithoutProductNestedInput | undefined;

  @TypeGraphQL.Field(_type => Product_priceUpdateManyWithoutProductNestedInput, {
    nullable: true
  })
  product_price?: Product_priceUpdateManyWithoutProductNestedInput | undefined;

  @TypeGraphQL.Field(_type => Product_propertyUpdateManyWithoutProductNestedInput, {
    nullable: true
  })
  product_property?: Product_propertyUpdateManyWithoutProductNestedInput | undefined;

  @TypeGraphQL.Field(_type => Product_reviewUpdateManyWithoutProductNestedInput, {
    nullable: true
  })
  product_review?: Product_reviewUpdateManyWithoutProductNestedInput | undefined;

  @TypeGraphQL.Field(_type => Product_search_keywordUpdateManyWithoutProductNestedInput, {
    nullable: true
  })
  product_search_keyword?: Product_search_keywordUpdateManyWithoutProductNestedInput | undefined;

  @TypeGraphQL.Field(_type => Product_stream_mappingUpdateManyWithoutProductNestedInput, {
    nullable: true
  })
  product_stream_mapping?: Product_stream_mappingUpdateManyWithoutProductNestedInput | undefined;

  @TypeGraphQL.Field(_type => Product_tagUpdateManyWithoutProductNestedInput, {
    nullable: true
  })
  product_tag?: Product_tagUpdateManyWithoutProductNestedInput | undefined;

  @TypeGraphQL.Field(_type => Product_translationUpdateManyWithoutProductNestedInput, {
    nullable: true
  })
  product_translation?: Product_translationUpdateManyWithoutProductNestedInput | undefined;

  @TypeGraphQL.Field(_type => Product_visibilityUpdateManyWithoutProductNestedInput, {
    nullable: true
  })
  product_visibility?: Product_visibilityUpdateManyWithoutProductNestedInput | undefined;

  @TypeGraphQL.Field(_type => Swag_paypal_pos_sales_channel_inventoryUpdateManyWithoutProductNestedInput, {
    nullable: true
  })
  swag_paypal_pos_sales_channel_inventory?: Swag_paypal_pos_sales_channel_inventoryUpdateManyWithoutProductNestedInput | undefined;

  @TypeGraphQL.Field(_type => Swag_paypal_pos_sales_channel_run_logUpdateManyWithoutProductNestedInput, {
    nullable: true
  })
  swag_paypal_pos_sales_channel_run_log?: Swag_paypal_pos_sales_channel_run_logUpdateManyWithoutProductNestedInput | undefined;
}
