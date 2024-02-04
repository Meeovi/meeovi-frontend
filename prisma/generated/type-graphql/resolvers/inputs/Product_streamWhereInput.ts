import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { BytesFilter } from "../inputs/BytesFilter";
import { CategoryListRelationFilter } from "../inputs/CategoryListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { Product_cross_sellingListRelationFilter } from "../inputs/Product_cross_sellingListRelationFilter";
import { Product_exportListRelationFilter } from "../inputs/Product_exportListRelationFilter";
import { Product_stream_filterListRelationFilter } from "../inputs/Product_stream_filterListRelationFilter";
import { Product_stream_mappingListRelationFilter } from "../inputs/Product_stream_mappingListRelationFilter";
import { Product_stream_translationListRelationFilter } from "../inputs/Product_stream_translationListRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { Swag_paypal_pos_sales_channelListRelationFilter } from "../inputs/Swag_paypal_pos_sales_channelListRelationFilter";

@TypeGraphQL.InputType("Product_streamWhereInput", {})
export class Product_streamWhereInput {
  @TypeGraphQL.Field(_type => [Product_streamWhereInput], {
    nullable: true
  })
  AND?: Product_streamWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_streamWhereInput], {
    nullable: true
  })
  OR?: Product_streamWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_streamWhereInput], {
    nullable: true
  })
  NOT?: Product_streamWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  api_filter?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  invalid?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => CategoryListRelationFilter, {
    nullable: true
  })
  category?: CategoryListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Product_cross_sellingListRelationFilter, {
    nullable: true
  })
  product_cross_selling?: Product_cross_sellingListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Product_exportListRelationFilter, {
    nullable: true
  })
  product_export?: Product_exportListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Product_stream_filterListRelationFilter, {
    nullable: true
  })
  product_stream_filter?: Product_stream_filterListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Product_stream_mappingListRelationFilter, {
    nullable: true
  })
  product_stream_mapping?: Product_stream_mappingListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Product_stream_translationListRelationFilter, {
    nullable: true
  })
  product_stream_translation?: Product_stream_translationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Swag_paypal_pos_sales_channelListRelationFilter, {
    nullable: true
  })
  swag_paypal_pos_sales_channel?: Swag_paypal_pos_sales_channelListRelationFilter | undefined;
}
