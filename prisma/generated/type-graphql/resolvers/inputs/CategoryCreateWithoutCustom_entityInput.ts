import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateNestedManyWithoutCategory_category_after_category_id_after_category_version_idTocategoryInput } from "../inputs/CategoryCreateNestedManyWithoutCategory_category_after_category_id_after_category_version_idTocategoryInput";
import { CategoryCreateNestedManyWithoutCategory_category_parent_id_parent_version_idTocategoryInput } from "../inputs/CategoryCreateNestedManyWithoutCategory_category_parent_id_parent_version_idTocategoryInput";
import { CategoryCreateNestedOneWithoutOther_category_category_after_category_id_after_category_version_idTocategoryInput } from "../inputs/CategoryCreateNestedOneWithoutOther_category_category_after_category_id_after_category_version_idTocategoryInput";
import { CategoryCreateNestedOneWithoutOther_category_category_parent_id_parent_version_idTocategoryInput } from "../inputs/CategoryCreateNestedOneWithoutOther_category_category_parent_id_parent_version_idTocategoryInput";
import { Category_tagCreateNestedManyWithoutCategoryInput } from "../inputs/Category_tagCreateNestedManyWithoutCategoryInput";
import { Category_translationCreateNestedManyWithoutCategoryInput } from "../inputs/Category_translationCreateNestedManyWithoutCategoryInput";
import { Cms_pageCreateNestedOneWithoutCategoryInput } from "../inputs/Cms_pageCreateNestedOneWithoutCategoryInput";
import { Main_categoryCreateNestedManyWithoutCategoryInput } from "../inputs/Main_categoryCreateNestedManyWithoutCategoryInput";
import { MediaCreateNestedOneWithoutCategoryInput } from "../inputs/MediaCreateNestedOneWithoutCategoryInput";
import { Product_categoryCreateNestedManyWithoutCategoryInput } from "../inputs/Product_categoryCreateNestedManyWithoutCategoryInput";
import { Product_category_treeCreateNestedManyWithoutCategoryInput } from "../inputs/Product_category_treeCreateNestedManyWithoutCategoryInput";
import { Product_streamCreateNestedOneWithoutCategoryInput } from "../inputs/Product_streamCreateNestedOneWithoutCategoryInput";
import { Sales_channelCreateNestedManyWithoutCategory_sales_channel_footer_category_id_footer_category_version_idTocategoryInput } from "../inputs/Sales_channelCreateNestedManyWithoutCategory_sales_channel_footer_category_id_footer_category_version_idTocategoryInput";
import { Sales_channelCreateNestedManyWithoutCategory_sales_channel_navigation_category_id_navigation_category_version_idTocategoryInput } from "../inputs/Sales_channelCreateNestedManyWithoutCategory_sales_channel_navigation_category_id_navigation_category_version_idTocategoryInput";
import { Sales_channelCreateNestedManyWithoutCategory_sales_channel_service_category_id_service_category_version_idTocategoryInput } from "../inputs/Sales_channelCreateNestedManyWithoutCategory_sales_channel_service_category_id_service_category_version_idTocategoryInput";

@TypeGraphQL.InputType("CategoryCreateWithoutCustom_entityInput", {})
export class CategoryCreateWithoutCustom_entityInput {
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
  product_assignment_type?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  path?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  level?: number | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  active?: boolean | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  child_count?: number | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  display_nested_products?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  visible?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  type!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => CategoryCreateNestedOneWithoutOther_category_category_after_category_id_after_category_version_idTocategoryInput, {
    nullable: true
  })
  category_category_after_category_id_after_category_version_idTocategory?: CategoryCreateNestedOneWithoutOther_category_category_after_category_id_after_category_version_idTocategoryInput | undefined;

  @TypeGraphQL.Field(_type => CategoryCreateNestedManyWithoutCategory_category_after_category_id_after_category_version_idTocategoryInput, {
    nullable: true
  })
  other_category_category_after_category_id_after_category_version_idTocategory?: CategoryCreateNestedManyWithoutCategory_category_after_category_id_after_category_version_idTocategoryInput | undefined;

  @TypeGraphQL.Field(_type => Cms_pageCreateNestedOneWithoutCategoryInput, {
    nullable: true
  })
  cms_page?: Cms_pageCreateNestedOneWithoutCategoryInput | undefined;

  @TypeGraphQL.Field(_type => MediaCreateNestedOneWithoutCategoryInput, {
    nullable: true
  })
  media?: MediaCreateNestedOneWithoutCategoryInput | undefined;

  @TypeGraphQL.Field(_type => CategoryCreateNestedOneWithoutOther_category_category_parent_id_parent_version_idTocategoryInput, {
    nullable: true
  })
  category_category_parent_id_parent_version_idTocategory?: CategoryCreateNestedOneWithoutOther_category_category_parent_id_parent_version_idTocategoryInput | undefined;

  @TypeGraphQL.Field(_type => CategoryCreateNestedManyWithoutCategory_category_parent_id_parent_version_idTocategoryInput, {
    nullable: true
  })
  other_category_category_parent_id_parent_version_idTocategory?: CategoryCreateNestedManyWithoutCategory_category_parent_id_parent_version_idTocategoryInput | undefined;

  @TypeGraphQL.Field(_type => Product_streamCreateNestedOneWithoutCategoryInput, {
    nullable: true
  })
  product_stream?: Product_streamCreateNestedOneWithoutCategoryInput | undefined;

  @TypeGraphQL.Field(_type => Category_tagCreateNestedManyWithoutCategoryInput, {
    nullable: true
  })
  category_tag?: Category_tagCreateNestedManyWithoutCategoryInput | undefined;

  @TypeGraphQL.Field(_type => Category_translationCreateNestedManyWithoutCategoryInput, {
    nullable: true
  })
  category_translation?: Category_translationCreateNestedManyWithoutCategoryInput | undefined;

  @TypeGraphQL.Field(_type => Main_categoryCreateNestedManyWithoutCategoryInput, {
    nullable: true
  })
  main_category?: Main_categoryCreateNestedManyWithoutCategoryInput | undefined;

  @TypeGraphQL.Field(_type => Product_categoryCreateNestedManyWithoutCategoryInput, {
    nullable: true
  })
  product_category?: Product_categoryCreateNestedManyWithoutCategoryInput | undefined;

  @TypeGraphQL.Field(_type => Product_category_treeCreateNestedManyWithoutCategoryInput, {
    nullable: true
  })
  product_category_tree?: Product_category_treeCreateNestedManyWithoutCategoryInput | undefined;

  @TypeGraphQL.Field(_type => Sales_channelCreateNestedManyWithoutCategory_sales_channel_footer_category_id_footer_category_version_idTocategoryInput, {
    nullable: true
  })
  sales_channel_sales_channel_footer_category_id_footer_category_version_idTocategory?: Sales_channelCreateNestedManyWithoutCategory_sales_channel_footer_category_id_footer_category_version_idTocategoryInput | undefined;

  @TypeGraphQL.Field(_type => Sales_channelCreateNestedManyWithoutCategory_sales_channel_navigation_category_id_navigation_category_version_idTocategoryInput, {
    nullable: true
  })
  sales_channel_sales_channel_navigation_category_id_navigation_category_version_idTocategory?: Sales_channelCreateNestedManyWithoutCategory_sales_channel_navigation_category_id_navigation_category_version_idTocategoryInput | undefined;

  @TypeGraphQL.Field(_type => Sales_channelCreateNestedManyWithoutCategory_sales_channel_service_category_id_service_category_version_idTocategoryInput, {
    nullable: true
  })
  sales_channel_sales_channel_service_category_id_service_category_version_idTocategory?: Sales_channelCreateNestedManyWithoutCategory_sales_channel_service_category_id_service_category_version_idTocategoryInput | undefined;
}
