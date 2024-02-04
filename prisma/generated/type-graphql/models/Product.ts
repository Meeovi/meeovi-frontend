import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Cms_page } from "../models/Cms_page";
import { Customer_wishlist_product } from "../models/Customer_wishlist_product";
import { Main_category } from "../models/Main_category";
import { Order_line_item } from "../models/Order_line_item";
import { Product_category } from "../models/Product_category";
import { Product_category_tree } from "../models/Product_category_tree";
import { Product_configurator_setting } from "../models/Product_configurator_setting";
import { Product_cross_selling } from "../models/Product_cross_selling";
import { Product_cross_selling_assigned_products } from "../models/Product_cross_selling_assigned_products";
import { Product_custom_field_set } from "../models/Product_custom_field_set";
import { Product_download } from "../models/Product_download";
import { Product_feature_set } from "../models/Product_feature_set";
import { Product_manufacturer } from "../models/Product_manufacturer";
import { Product_media } from "../models/Product_media";
import { Product_option } from "../models/Product_option";
import { Product_price } from "../models/Product_price";
import { Product_property } from "../models/Product_property";
import { Product_review } from "../models/Product_review";
import { Product_search_keyword } from "../models/Product_search_keyword";
import { Product_stream_mapping } from "../models/Product_stream_mapping";
import { Product_tag } from "../models/Product_tag";
import { Product_translation } from "../models/Product_translation";
import { Product_visibility } from "../models/Product_visibility";
import { Swag_paypal_pos_sales_channel_inventory } from "../models/Swag_paypal_pos_sales_channel_inventory";
import { Swag_paypal_pos_sales_channel_run_log } from "../models/Swag_paypal_pos_sales_channel_run_log";
import { Tax } from "../models/Tax";
import { Unit } from "../models/Unit";
import { ProductCount } from "../resolvers/outputs/ProductCount";

@TypeGraphQL.ObjectType("Product", {})
export class Product {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  version_id!: Buffer;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  auto_increment!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  product_number?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  active?: number | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  parent_id?: Buffer | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  parent_version_id?: Buffer | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  tax_id?: Buffer | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  product_manufacturer_id?: Buffer | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  product_manufacturer_version_id?: Buffer | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  delivery_time_id?: Buffer | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  deliveryTime?: Buffer | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  product_media_id?: Buffer | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  product_media_version_id?: Buffer | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  cms_page_id?: Buffer | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  cms_page_version_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  unit_id?: Buffer | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  product_feature_set_id?: Buffer | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  category_tree?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  category_ids?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  stream_ids?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  option_ids?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  property_ids?: string | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  manufacturer?: Buffer | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  cover?: Buffer | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  media?: Buffer | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  prices?: Buffer | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  visibilities?: Buffer | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  properties?: Buffer | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  categories?: Buffer | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  translations?: Buffer | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  price?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  listing_prices?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  manufacturer_number?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ean?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  sales!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  stock!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  available_stock?: number | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  available!: boolean;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  restock_time?: number | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  is_closeout?: boolean | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  purchase_steps?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  max_purchase?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  min_purchase?: number | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  purchase_unit?: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  reference_unit?: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  shipping_free?: boolean | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  purchase_price?: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  purchase_prices?: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  mark_as_topseller?: boolean | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  weight?: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  width?: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  height?: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  length?: Prisma.Decimal | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  release_date?: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tag_ids?: string | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  tags?: Buffer | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  variant_restrictions?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  configurator_group_config?: string | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  main_variant_id?: Buffer | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  rating_average?: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  display_group?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  child_count?: number | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  crossSellings?: Buffer | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  featureSet?: Buffer | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  customFieldSets?: Buffer | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  custom_field_set_selection_active?: boolean | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  canonical_product_id?: Buffer | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  canonicalProduct?: Buffer | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  cmsPage?: Buffer | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  cheapest_price?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  cheapest_price_accessor?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  states?: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  display_parent?: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  variant_listing_config?: string | null;

  customer_wishlist_product?: Customer_wishlist_product[];

  main_category?: Main_category[];

  order_line_item?: Order_line_item[];

  product_product_canonical_product_idToproduct?: Product | null;

  other_product_product_canonical_product_idToproduct?: Product[];

  cms_page?: Cms_page | null;

  product_feature_set?: Product_feature_set | null;

  product_product_main_variant_idToproduct?: Product | null;

  other_product_product_main_variant_idToproduct?: Product[];

  product_product_parent_id_parent_version_idToproduct?: Product | null;

  other_product_product_parent_id_parent_version_idToproduct?: Product[];

  tax?: Tax | null;

  unit?: Unit | null;

  product_manufacturer?: Product_manufacturer | null;

  product_category?: Product_category[];

  product_category_tree?: Product_category_tree[];

  product_configurator_setting?: Product_configurator_setting[];

  product_cross_selling?: Product_cross_selling[];

  product_cross_selling_assigned_products?: Product_cross_selling_assigned_products[];

  product_custom_field_set?: Product_custom_field_set[];

  product_download?: Product_download[];

  product_media?: Product_media[];

  product_option?: Product_option[];

  product_price?: Product_price[];

  product_property?: Product_property[];

  product_review?: Product_review[];

  product_search_keyword?: Product_search_keyword[];

  product_stream_mapping?: Product_stream_mapping[];

  product_tag?: Product_tag[];

  product_translation?: Product_translation[];

  product_visibility?: Product_visibility[];

  swag_paypal_pos_sales_channel_inventory?: Swag_paypal_pos_sales_channel_inventory[];

  swag_paypal_pos_sales_channel_run_log?: Swag_paypal_pos_sales_channel_run_log[];

  @TypeGraphQL.Field(_type => ProductCount, {
    nullable: true
  })
  _count?: ProductCount | null;
}
