import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryOrderByRelationAggregateInput } from "../inputs/CategoryOrderByRelationAggregateInput";
import { CategoryOrderByRelevanceInput } from "../inputs/CategoryOrderByRelevanceInput";
import { Category_tagOrderByRelationAggregateInput } from "../inputs/Category_tagOrderByRelationAggregateInput";
import { Category_translationOrderByRelationAggregateInput } from "../inputs/Category_translationOrderByRelationAggregateInput";
import { Cms_pageOrderByWithRelationAndSearchRelevanceInput } from "../inputs/Cms_pageOrderByWithRelationAndSearchRelevanceInput";
import { Custom_entityOrderByWithRelationAndSearchRelevanceInput } from "../inputs/Custom_entityOrderByWithRelationAndSearchRelevanceInput";
import { Main_categoryOrderByRelationAggregateInput } from "../inputs/Main_categoryOrderByRelationAggregateInput";
import { MediaOrderByWithRelationAndSearchRelevanceInput } from "../inputs/MediaOrderByWithRelationAndSearchRelevanceInput";
import { Product_categoryOrderByRelationAggregateInput } from "../inputs/Product_categoryOrderByRelationAggregateInput";
import { Product_category_treeOrderByRelationAggregateInput } from "../inputs/Product_category_treeOrderByRelationAggregateInput";
import { Product_streamOrderByWithRelationAndSearchRelevanceInput } from "../inputs/Product_streamOrderByWithRelationAndSearchRelevanceInput";
import { Sales_channelOrderByRelationAggregateInput } from "../inputs/Sales_channelOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CategoryOrderByWithRelationAndSearchRelevanceInput", {})
export class CategoryOrderByWithRelationAndSearchRelevanceInput {
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
  parent_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  parent_version_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  media_id?: SortOrderInput | undefined;

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
  product_stream_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  product_assignment_type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  path?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  after_category_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  after_category_version_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  level?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  active?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  child_count?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  display_nested_products?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  visible?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  custom_entity_type_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => CategoryOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  category_category_after_category_id_after_category_version_idTocategory?: CategoryOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => CategoryOrderByRelationAggregateInput, {
    nullable: true
  })
  other_category_category_after_category_id_after_category_version_idTocategory?: CategoryOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Cms_pageOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  cms_page?: Cms_pageOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Custom_entityOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  custom_entity?: Custom_entityOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => MediaOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  media?: MediaOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => CategoryOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  category_category_parent_id_parent_version_idTocategory?: CategoryOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => CategoryOrderByRelationAggregateInput, {
    nullable: true
  })
  other_category_category_parent_id_parent_version_idTocategory?: CategoryOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_streamOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  product_stream?: Product_streamOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Category_tagOrderByRelationAggregateInput, {
    nullable: true
  })
  category_tag?: Category_tagOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Category_translationOrderByRelationAggregateInput, {
    nullable: true
  })
  category_translation?: Category_translationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Main_categoryOrderByRelationAggregateInput, {
    nullable: true
  })
  main_category?: Main_categoryOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_categoryOrderByRelationAggregateInput, {
    nullable: true
  })
  product_category?: Product_categoryOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_category_treeOrderByRelationAggregateInput, {
    nullable: true
  })
  product_category_tree?: Product_category_treeOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Sales_channelOrderByRelationAggregateInput, {
    nullable: true
  })
  sales_channel_sales_channel_footer_category_id_footer_category_version_idTocategory?: Sales_channelOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Sales_channelOrderByRelationAggregateInput, {
    nullable: true
  })
  sales_channel_sales_channel_navigation_category_id_navigation_category_version_idTocategory?: Sales_channelOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Sales_channelOrderByRelationAggregateInput, {
    nullable: true
  })
  sales_channel_sales_channel_service_category_id_service_category_version_idTocategory?: Sales_channelOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CategoryOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: CategoryOrderByRelevanceInput | undefined;
}
