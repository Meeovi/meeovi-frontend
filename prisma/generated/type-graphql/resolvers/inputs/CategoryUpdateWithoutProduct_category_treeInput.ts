import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { BytesFieldUpdateOperationsInput } from "../inputs/BytesFieldUpdateOperationsInput";
import { CategoryUpdateManyWithoutCategory_category_after_category_id_after_category_version_idTocategoryNestedInput } from "../inputs/CategoryUpdateManyWithoutCategory_category_after_category_id_after_category_version_idTocategoryNestedInput";
import { CategoryUpdateManyWithoutCategory_category_parent_id_parent_version_idTocategoryNestedInput } from "../inputs/CategoryUpdateManyWithoutCategory_category_parent_id_parent_version_idTocategoryNestedInput";
import { CategoryUpdateOneWithoutOther_category_category_after_category_id_after_category_version_idTocategoryNestedInput } from "../inputs/CategoryUpdateOneWithoutOther_category_category_after_category_id_after_category_version_idTocategoryNestedInput";
import { CategoryUpdateOneWithoutOther_category_category_parent_id_parent_version_idTocategoryNestedInput } from "../inputs/CategoryUpdateOneWithoutOther_category_category_parent_id_parent_version_idTocategoryNestedInput";
import { Category_tagUpdateManyWithoutCategoryNestedInput } from "../inputs/Category_tagUpdateManyWithoutCategoryNestedInput";
import { Category_translationUpdateManyWithoutCategoryNestedInput } from "../inputs/Category_translationUpdateManyWithoutCategoryNestedInput";
import { Cms_pageUpdateOneWithoutCategoryNestedInput } from "../inputs/Cms_pageUpdateOneWithoutCategoryNestedInput";
import { Custom_entityUpdateOneWithoutCategoryNestedInput } from "../inputs/Custom_entityUpdateOneWithoutCategoryNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { Main_categoryUpdateManyWithoutCategoryNestedInput } from "../inputs/Main_categoryUpdateManyWithoutCategoryNestedInput";
import { MediaUpdateOneWithoutCategoryNestedInput } from "../inputs/MediaUpdateOneWithoutCategoryNestedInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { Product_categoryUpdateManyWithoutCategoryNestedInput } from "../inputs/Product_categoryUpdateManyWithoutCategoryNestedInput";
import { Product_streamUpdateOneWithoutCategoryNestedInput } from "../inputs/Product_streamUpdateOneWithoutCategoryNestedInput";
import { Sales_channelUpdateManyWithoutCategory_sales_channel_footer_category_id_footer_category_version_idTocategoryNestedInput } from "../inputs/Sales_channelUpdateManyWithoutCategory_sales_channel_footer_category_id_footer_category_version_idTocategoryNestedInput";
import { Sales_channelUpdateManyWithoutCategory_sales_channel_navigation_category_id_navigation_category_version_idTocategoryNestedInput } from "../inputs/Sales_channelUpdateManyWithoutCategory_sales_channel_navigation_category_id_navigation_category_version_idTocategoryNestedInput";
import { Sales_channelUpdateManyWithoutCategory_sales_channel_service_category_id_service_category_version_idTocategoryNestedInput } from "../inputs/Sales_channelUpdateManyWithoutCategory_sales_channel_service_category_id_service_category_version_idTocategoryNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("CategoryUpdateWithoutProduct_category_treeInput", {})
export class CategoryUpdateWithoutProduct_category_treeInput {
  @TypeGraphQL.Field(_type => BytesFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: BytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BytesFieldUpdateOperationsInput, {
    nullable: true
  })
  version_id?: BytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  product_assignment_type?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  path?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  level?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  active?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  child_count?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  display_nested_products?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  visible?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  type?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  created_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updated_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => CategoryUpdateOneWithoutOther_category_category_after_category_id_after_category_version_idTocategoryNestedInput, {
    nullable: true
  })
  category_category_after_category_id_after_category_version_idTocategory?: CategoryUpdateOneWithoutOther_category_category_after_category_id_after_category_version_idTocategoryNestedInput | undefined;

  @TypeGraphQL.Field(_type => CategoryUpdateManyWithoutCategory_category_after_category_id_after_category_version_idTocategoryNestedInput, {
    nullable: true
  })
  other_category_category_after_category_id_after_category_version_idTocategory?: CategoryUpdateManyWithoutCategory_category_after_category_id_after_category_version_idTocategoryNestedInput | undefined;

  @TypeGraphQL.Field(_type => Cms_pageUpdateOneWithoutCategoryNestedInput, {
    nullable: true
  })
  cms_page?: Cms_pageUpdateOneWithoutCategoryNestedInput | undefined;

  @TypeGraphQL.Field(_type => Custom_entityUpdateOneWithoutCategoryNestedInput, {
    nullable: true
  })
  custom_entity?: Custom_entityUpdateOneWithoutCategoryNestedInput | undefined;

  @TypeGraphQL.Field(_type => MediaUpdateOneWithoutCategoryNestedInput, {
    nullable: true
  })
  media?: MediaUpdateOneWithoutCategoryNestedInput | undefined;

  @TypeGraphQL.Field(_type => CategoryUpdateOneWithoutOther_category_category_parent_id_parent_version_idTocategoryNestedInput, {
    nullable: true
  })
  category_category_parent_id_parent_version_idTocategory?: CategoryUpdateOneWithoutOther_category_category_parent_id_parent_version_idTocategoryNestedInput | undefined;

  @TypeGraphQL.Field(_type => CategoryUpdateManyWithoutCategory_category_parent_id_parent_version_idTocategoryNestedInput, {
    nullable: true
  })
  other_category_category_parent_id_parent_version_idTocategory?: CategoryUpdateManyWithoutCategory_category_parent_id_parent_version_idTocategoryNestedInput | undefined;

  @TypeGraphQL.Field(_type => Product_streamUpdateOneWithoutCategoryNestedInput, {
    nullable: true
  })
  product_stream?: Product_streamUpdateOneWithoutCategoryNestedInput | undefined;

  @TypeGraphQL.Field(_type => Category_tagUpdateManyWithoutCategoryNestedInput, {
    nullable: true
  })
  category_tag?: Category_tagUpdateManyWithoutCategoryNestedInput | undefined;

  @TypeGraphQL.Field(_type => Category_translationUpdateManyWithoutCategoryNestedInput, {
    nullable: true
  })
  category_translation?: Category_translationUpdateManyWithoutCategoryNestedInput | undefined;

  @TypeGraphQL.Field(_type => Main_categoryUpdateManyWithoutCategoryNestedInput, {
    nullable: true
  })
  main_category?: Main_categoryUpdateManyWithoutCategoryNestedInput | undefined;

  @TypeGraphQL.Field(_type => Product_categoryUpdateManyWithoutCategoryNestedInput, {
    nullable: true
  })
  product_category?: Product_categoryUpdateManyWithoutCategoryNestedInput | undefined;

  @TypeGraphQL.Field(_type => Sales_channelUpdateManyWithoutCategory_sales_channel_footer_category_id_footer_category_version_idTocategoryNestedInput, {
    nullable: true
  })
  sales_channel_sales_channel_footer_category_id_footer_category_version_idTocategory?: Sales_channelUpdateManyWithoutCategory_sales_channel_footer_category_id_footer_category_version_idTocategoryNestedInput | undefined;

  @TypeGraphQL.Field(_type => Sales_channelUpdateManyWithoutCategory_sales_channel_navigation_category_id_navigation_category_version_idTocategoryNestedInput, {
    nullable: true
  })
  sales_channel_sales_channel_navigation_category_id_navigation_category_version_idTocategory?: Sales_channelUpdateManyWithoutCategory_sales_channel_navigation_category_id_navigation_category_version_idTocategoryNestedInput | undefined;

  @TypeGraphQL.Field(_type => Sales_channelUpdateManyWithoutCategory_sales_channel_service_category_id_service_category_version_idTocategoryNestedInput, {
    nullable: true
  })
  sales_channel_sales_channel_service_category_id_service_category_version_idTocategory?: Sales_channelUpdateManyWithoutCategory_sales_channel_service_category_id_service_category_version_idTocategoryNestedInput | undefined;
}
