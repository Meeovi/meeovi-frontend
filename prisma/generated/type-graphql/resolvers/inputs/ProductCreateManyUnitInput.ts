import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("ProductCreateManyUnitInput", {})
export class ProductCreateManyUnitInput {
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
  parent_id?: Buffer | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  parent_version_id?: Buffer | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  tax_id?: Buffer | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  product_manufacturer_id?: Buffer | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  product_manufacturer_version_id?: Buffer | undefined;

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

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  cms_page_id?: Buffer | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  cms_page_version_id?: Buffer | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  product_feature_set_id?: Buffer | undefined;

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

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  main_variant_id?: Buffer | undefined;

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
  canonical_product_id?: Buffer | undefined;

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
}
