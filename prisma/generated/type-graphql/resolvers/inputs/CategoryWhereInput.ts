import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { BytesFilter } from "../inputs/BytesFilter";
import { BytesNullableFilter } from "../inputs/BytesNullableFilter";
import { CategoryListRelationFilter } from "../inputs/CategoryListRelationFilter";
import { CategoryNullableRelationFilter } from "../inputs/CategoryNullableRelationFilter";
import { Category_tagListRelationFilter } from "../inputs/Category_tagListRelationFilter";
import { Category_translationListRelationFilter } from "../inputs/Category_translationListRelationFilter";
import { Cms_pageNullableRelationFilter } from "../inputs/Cms_pageNullableRelationFilter";
import { Custom_entityNullableRelationFilter } from "../inputs/Custom_entityNullableRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { Main_categoryListRelationFilter } from "../inputs/Main_categoryListRelationFilter";
import { MediaNullableRelationFilter } from "../inputs/MediaNullableRelationFilter";
import { Product_categoryListRelationFilter } from "../inputs/Product_categoryListRelationFilter";
import { Product_category_treeListRelationFilter } from "../inputs/Product_category_treeListRelationFilter";
import { Product_streamNullableRelationFilter } from "../inputs/Product_streamNullableRelationFilter";
import { Sales_channelListRelationFilter } from "../inputs/Sales_channelListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("CategoryWhereInput", {})
export class CategoryWhereInput {
  @TypeGraphQL.Field(_type => [CategoryWhereInput], {
    nullable: true
  })
  AND?: CategoryWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryWhereInput], {
    nullable: true
  })
  OR?: CategoryWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryWhereInput], {
    nullable: true
  })
  NOT?: CategoryWhereInput[] | undefined;

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
  media_id?: BytesNullableFilter | undefined;

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
  product_stream_id?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  product_assignment_type?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  path?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  after_category_id?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  after_category_version_id?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  level?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  active?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  child_count?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  display_nested_products?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  visible?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  type?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  custom_entity_type_id?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => CategoryNullableRelationFilter, {
    nullable: true
  })
  category_category_after_category_id_after_category_version_idTocategory?: CategoryNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CategoryListRelationFilter, {
    nullable: true
  })
  other_category_category_after_category_id_after_category_version_idTocategory?: CategoryListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Cms_pageNullableRelationFilter, {
    nullable: true
  })
  cms_page?: Cms_pageNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Custom_entityNullableRelationFilter, {
    nullable: true
  })
  custom_entity?: Custom_entityNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MediaNullableRelationFilter, {
    nullable: true
  })
  media?: MediaNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CategoryNullableRelationFilter, {
    nullable: true
  })
  category_category_parent_id_parent_version_idTocategory?: CategoryNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CategoryListRelationFilter, {
    nullable: true
  })
  other_category_category_parent_id_parent_version_idTocategory?: CategoryListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Product_streamNullableRelationFilter, {
    nullable: true
  })
  product_stream?: Product_streamNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Category_tagListRelationFilter, {
    nullable: true
  })
  category_tag?: Category_tagListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Category_translationListRelationFilter, {
    nullable: true
  })
  category_translation?: Category_translationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Main_categoryListRelationFilter, {
    nullable: true
  })
  main_category?: Main_categoryListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Product_categoryListRelationFilter, {
    nullable: true
  })
  product_category?: Product_categoryListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Product_category_treeListRelationFilter, {
    nullable: true
  })
  product_category_tree?: Product_category_treeListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Sales_channelListRelationFilter, {
    nullable: true
  })
  sales_channel_sales_channel_footer_category_id_footer_category_version_idTocategory?: Sales_channelListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Sales_channelListRelationFilter, {
    nullable: true
  })
  sales_channel_sales_channel_navigation_category_id_navigation_category_version_idTocategory?: Sales_channelListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Sales_channelListRelationFilter, {
    nullable: true
  })
  sales_channel_sales_channel_service_category_id_service_category_version_idTocategory?: Sales_channelListRelationFilter | undefined;
}
