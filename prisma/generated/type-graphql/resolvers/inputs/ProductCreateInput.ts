import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_pageCreateNestedOneWithoutProductInput } from "../inputs/Cms_pageCreateNestedOneWithoutProductInput";
import { Customer_wishlist_productCreateNestedManyWithoutProductInput } from "../inputs/Customer_wishlist_productCreateNestedManyWithoutProductInput";
import { Main_categoryCreateNestedManyWithoutProductInput } from "../inputs/Main_categoryCreateNestedManyWithoutProductInput";
import { Order_line_itemCreateNestedManyWithoutProductInput } from "../inputs/Order_line_itemCreateNestedManyWithoutProductInput";
import { ProductCreateNestedManyWithoutProduct_product_canonical_product_idToproductInput } from "../inputs/ProductCreateNestedManyWithoutProduct_product_canonical_product_idToproductInput";
import { ProductCreateNestedManyWithoutProduct_product_main_variant_idToproductInput } from "../inputs/ProductCreateNestedManyWithoutProduct_product_main_variant_idToproductInput";
import { ProductCreateNestedManyWithoutProduct_product_parent_id_parent_version_idToproductInput } from "../inputs/ProductCreateNestedManyWithoutProduct_product_parent_id_parent_version_idToproductInput";
import { ProductCreateNestedOneWithoutOther_product_product_canonical_product_idToproductInput } from "../inputs/ProductCreateNestedOneWithoutOther_product_product_canonical_product_idToproductInput";
import { ProductCreateNestedOneWithoutOther_product_product_main_variant_idToproductInput } from "../inputs/ProductCreateNestedOneWithoutOther_product_product_main_variant_idToproductInput";
import { ProductCreateNestedOneWithoutOther_product_product_parent_id_parent_version_idToproductInput } from "../inputs/ProductCreateNestedOneWithoutOther_product_product_parent_id_parent_version_idToproductInput";
import { Product_categoryCreateNestedManyWithoutProductInput } from "../inputs/Product_categoryCreateNestedManyWithoutProductInput";
import { Product_category_treeCreateNestedManyWithoutProductInput } from "../inputs/Product_category_treeCreateNestedManyWithoutProductInput";
import { Product_configurator_settingCreateNestedManyWithoutProductInput } from "../inputs/Product_configurator_settingCreateNestedManyWithoutProductInput";
import { Product_cross_sellingCreateNestedManyWithoutProductInput } from "../inputs/Product_cross_sellingCreateNestedManyWithoutProductInput";
import { Product_cross_selling_assigned_productsCreateNestedManyWithoutProductInput } from "../inputs/Product_cross_selling_assigned_productsCreateNestedManyWithoutProductInput";
import { Product_custom_field_setCreateNestedManyWithoutProductInput } from "../inputs/Product_custom_field_setCreateNestedManyWithoutProductInput";
import { Product_downloadCreateNestedManyWithoutProductInput } from "../inputs/Product_downloadCreateNestedManyWithoutProductInput";
import { Product_feature_setCreateNestedOneWithoutProductInput } from "../inputs/Product_feature_setCreateNestedOneWithoutProductInput";
import { Product_manufacturerCreateNestedOneWithoutProductInput } from "../inputs/Product_manufacturerCreateNestedOneWithoutProductInput";
import { Product_mediaCreateNestedManyWithoutProductInput } from "../inputs/Product_mediaCreateNestedManyWithoutProductInput";
import { Product_optionCreateNestedManyWithoutProductInput } from "../inputs/Product_optionCreateNestedManyWithoutProductInput";
import { Product_priceCreateNestedManyWithoutProductInput } from "../inputs/Product_priceCreateNestedManyWithoutProductInput";
import { Product_propertyCreateNestedManyWithoutProductInput } from "../inputs/Product_propertyCreateNestedManyWithoutProductInput";
import { Product_reviewCreateNestedManyWithoutProductInput } from "../inputs/Product_reviewCreateNestedManyWithoutProductInput";
import { Product_search_keywordCreateNestedManyWithoutProductInput } from "../inputs/Product_search_keywordCreateNestedManyWithoutProductInput";
import { Product_stream_mappingCreateNestedManyWithoutProductInput } from "../inputs/Product_stream_mappingCreateNestedManyWithoutProductInput";
import { Product_tagCreateNestedManyWithoutProductInput } from "../inputs/Product_tagCreateNestedManyWithoutProductInput";
import { Product_translationCreateNestedManyWithoutProductInput } from "../inputs/Product_translationCreateNestedManyWithoutProductInput";
import { Product_visibilityCreateNestedManyWithoutProductInput } from "../inputs/Product_visibilityCreateNestedManyWithoutProductInput";
import { Swag_paypal_pos_sales_channel_inventoryCreateNestedManyWithoutProductInput } from "../inputs/Swag_paypal_pos_sales_channel_inventoryCreateNestedManyWithoutProductInput";
import { Swag_paypal_pos_sales_channel_run_logCreateNestedManyWithoutProductInput } from "../inputs/Swag_paypal_pos_sales_channel_run_logCreateNestedManyWithoutProductInput";
import { TaxCreateNestedOneWithoutProductInput } from "../inputs/TaxCreateNestedOneWithoutProductInput";
import { UnitCreateNestedOneWithoutProductInput } from "../inputs/UnitCreateNestedOneWithoutProductInput";

@TypeGraphQL.InputType("ProductCreateInput", {})
export class ProductCreateInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  version_id!: Buffer;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  auto_increment?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  product_number?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  active?: number | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  delivery_time_id?: Buffer | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  deliveryTime?: Buffer | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  product_media_id?: Buffer | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  product_media_version_id?: Buffer | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  category_tree?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  category_ids?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  stream_ids?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  option_ids?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  property_ids?: string | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  manufacturer?: Buffer | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  cover?: Buffer | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  media?: Buffer | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  prices?: Buffer | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  visibilities?: Buffer | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  properties?: Buffer | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  categories?: Buffer | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  translations?: Buffer | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  price?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  listing_prices?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  manufacturer_number?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ean?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  sales?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  stock!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  available_stock?: number | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  available?: boolean | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  restock_time?: number | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  is_closeout?: boolean | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  purchase_steps?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  max_purchase?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  min_purchase?: number | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  purchase_unit?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  reference_unit?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  shipping_free?: boolean | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  purchase_price?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  purchase_prices?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  mark_as_topseller?: boolean | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  weight?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  width?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  height?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  length?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  release_date?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tag_ids?: string | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  tags?: Buffer | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  variant_restrictions?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  configurator_group_config?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  rating_average?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  display_group?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  child_count?: number | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  crossSellings?: Buffer | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  featureSet?: Buffer | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  customFieldSets?: Buffer | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  custom_field_set_selection_active?: boolean | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  canonicalProduct?: Buffer | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  cmsPage?: Buffer | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  cheapest_price?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  cheapest_price_accessor?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  states?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  display_parent?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  variant_listing_config?: string | undefined;

  @TypeGraphQL.Field(_type => Customer_wishlist_productCreateNestedManyWithoutProductInput, {
    nullable: true
  })
  customer_wishlist_product?: Customer_wishlist_productCreateNestedManyWithoutProductInput | undefined;

  @TypeGraphQL.Field(_type => Main_categoryCreateNestedManyWithoutProductInput, {
    nullable: true
  })
  main_category?: Main_categoryCreateNestedManyWithoutProductInput | undefined;

  @TypeGraphQL.Field(_type => Order_line_itemCreateNestedManyWithoutProductInput, {
    nullable: true
  })
  order_line_item?: Order_line_itemCreateNestedManyWithoutProductInput | undefined;

  @TypeGraphQL.Field(_type => ProductCreateNestedOneWithoutOther_product_product_canonical_product_idToproductInput, {
    nullable: true
  })
  product_product_canonical_product_idToproduct?: ProductCreateNestedOneWithoutOther_product_product_canonical_product_idToproductInput | undefined;

  @TypeGraphQL.Field(_type => ProductCreateNestedManyWithoutProduct_product_canonical_product_idToproductInput, {
    nullable: true
  })
  other_product_product_canonical_product_idToproduct?: ProductCreateNestedManyWithoutProduct_product_canonical_product_idToproductInput | undefined;

  @TypeGraphQL.Field(_type => Cms_pageCreateNestedOneWithoutProductInput, {
    nullable: true
  })
  cms_page?: Cms_pageCreateNestedOneWithoutProductInput | undefined;

  @TypeGraphQL.Field(_type => Product_feature_setCreateNestedOneWithoutProductInput, {
    nullable: true
  })
  product_feature_set?: Product_feature_setCreateNestedOneWithoutProductInput | undefined;

  @TypeGraphQL.Field(_type => ProductCreateNestedOneWithoutOther_product_product_main_variant_idToproductInput, {
    nullable: true
  })
  product_product_main_variant_idToproduct?: ProductCreateNestedOneWithoutOther_product_product_main_variant_idToproductInput | undefined;

  @TypeGraphQL.Field(_type => ProductCreateNestedManyWithoutProduct_product_main_variant_idToproductInput, {
    nullable: true
  })
  other_product_product_main_variant_idToproduct?: ProductCreateNestedManyWithoutProduct_product_main_variant_idToproductInput | undefined;

  @TypeGraphQL.Field(_type => ProductCreateNestedOneWithoutOther_product_product_parent_id_parent_version_idToproductInput, {
    nullable: true
  })
  product_product_parent_id_parent_version_idToproduct?: ProductCreateNestedOneWithoutOther_product_product_parent_id_parent_version_idToproductInput | undefined;

  @TypeGraphQL.Field(_type => ProductCreateNestedManyWithoutProduct_product_parent_id_parent_version_idToproductInput, {
    nullable: true
  })
  other_product_product_parent_id_parent_version_idToproduct?: ProductCreateNestedManyWithoutProduct_product_parent_id_parent_version_idToproductInput | undefined;

  @TypeGraphQL.Field(_type => TaxCreateNestedOneWithoutProductInput, {
    nullable: true
  })
  tax?: TaxCreateNestedOneWithoutProductInput | undefined;

  @TypeGraphQL.Field(_type => UnitCreateNestedOneWithoutProductInput, {
    nullable: true
  })
  unit?: UnitCreateNestedOneWithoutProductInput | undefined;

  @TypeGraphQL.Field(_type => Product_manufacturerCreateNestedOneWithoutProductInput, {
    nullable: true
  })
  product_manufacturer?: Product_manufacturerCreateNestedOneWithoutProductInput | undefined;

  @TypeGraphQL.Field(_type => Product_categoryCreateNestedManyWithoutProductInput, {
    nullable: true
  })
  product_category?: Product_categoryCreateNestedManyWithoutProductInput | undefined;

  @TypeGraphQL.Field(_type => Product_category_treeCreateNestedManyWithoutProductInput, {
    nullable: true
  })
  product_category_tree?: Product_category_treeCreateNestedManyWithoutProductInput | undefined;

  @TypeGraphQL.Field(_type => Product_configurator_settingCreateNestedManyWithoutProductInput, {
    nullable: true
  })
  product_configurator_setting?: Product_configurator_settingCreateNestedManyWithoutProductInput | undefined;

  @TypeGraphQL.Field(_type => Product_cross_sellingCreateNestedManyWithoutProductInput, {
    nullable: true
  })
  product_cross_selling?: Product_cross_sellingCreateNestedManyWithoutProductInput | undefined;

  @TypeGraphQL.Field(_type => Product_cross_selling_assigned_productsCreateNestedManyWithoutProductInput, {
    nullable: true
  })
  product_cross_selling_assigned_products?: Product_cross_selling_assigned_productsCreateNestedManyWithoutProductInput | undefined;

  @TypeGraphQL.Field(_type => Product_custom_field_setCreateNestedManyWithoutProductInput, {
    nullable: true
  })
  product_custom_field_set?: Product_custom_field_setCreateNestedManyWithoutProductInput | undefined;

  @TypeGraphQL.Field(_type => Product_downloadCreateNestedManyWithoutProductInput, {
    nullable: true
  })
  product_download?: Product_downloadCreateNestedManyWithoutProductInput | undefined;

  @TypeGraphQL.Field(_type => Product_mediaCreateNestedManyWithoutProductInput, {
    nullable: true
  })
  product_media?: Product_mediaCreateNestedManyWithoutProductInput | undefined;

  @TypeGraphQL.Field(_type => Product_optionCreateNestedManyWithoutProductInput, {
    nullable: true
  })
  product_option?: Product_optionCreateNestedManyWithoutProductInput | undefined;

  @TypeGraphQL.Field(_type => Product_priceCreateNestedManyWithoutProductInput, {
    nullable: true
  })
  product_price?: Product_priceCreateNestedManyWithoutProductInput | undefined;

  @TypeGraphQL.Field(_type => Product_propertyCreateNestedManyWithoutProductInput, {
    nullable: true
  })
  product_property?: Product_propertyCreateNestedManyWithoutProductInput | undefined;

  @TypeGraphQL.Field(_type => Product_reviewCreateNestedManyWithoutProductInput, {
    nullable: true
  })
  product_review?: Product_reviewCreateNestedManyWithoutProductInput | undefined;

  @TypeGraphQL.Field(_type => Product_search_keywordCreateNestedManyWithoutProductInput, {
    nullable: true
  })
  product_search_keyword?: Product_search_keywordCreateNestedManyWithoutProductInput | undefined;

  @TypeGraphQL.Field(_type => Product_stream_mappingCreateNestedManyWithoutProductInput, {
    nullable: true
  })
  product_stream_mapping?: Product_stream_mappingCreateNestedManyWithoutProductInput | undefined;

  @TypeGraphQL.Field(_type => Product_tagCreateNestedManyWithoutProductInput, {
    nullable: true
  })
  product_tag?: Product_tagCreateNestedManyWithoutProductInput | undefined;

  @TypeGraphQL.Field(_type => Product_translationCreateNestedManyWithoutProductInput, {
    nullable: true
  })
  product_translation?: Product_translationCreateNestedManyWithoutProductInput | undefined;

  @TypeGraphQL.Field(_type => Product_visibilityCreateNestedManyWithoutProductInput, {
    nullable: true
  })
  product_visibility?: Product_visibilityCreateNestedManyWithoutProductInput | undefined;

  @TypeGraphQL.Field(_type => Swag_paypal_pos_sales_channel_inventoryCreateNestedManyWithoutProductInput, {
    nullable: true
  })
  swag_paypal_pos_sales_channel_inventory?: Swag_paypal_pos_sales_channel_inventoryCreateNestedManyWithoutProductInput | undefined;

  @TypeGraphQL.Field(_type => Swag_paypal_pos_sales_channel_run_logCreateNestedManyWithoutProductInput, {
    nullable: true
  })
  swag_paypal_pos_sales_channel_run_log?: Swag_paypal_pos_sales_channel_run_logCreateNestedManyWithoutProductInput | undefined;
}
