import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_payment_methodListRelationFilter } from "../inputs/App_payment_methodListRelationFilter";
import { App_shipping_methodListRelationFilter } from "../inputs/App_shipping_methodListRelationFilter";
import { BoolFilter } from "../inputs/BoolFilter";
import { BytesFilter } from "../inputs/BytesFilter";
import { BytesNullableFilter } from "../inputs/BytesNullableFilter";
import { CategoryListRelationFilter } from "../inputs/CategoryListRelationFilter";
import { Cms_blockListRelationFilter } from "../inputs/Cms_blockListRelationFilter";
import { Cms_pageListRelationFilter } from "../inputs/Cms_pageListRelationFilter";
import { Cms_sectionListRelationFilter } from "../inputs/Cms_sectionListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { DocumentListRelationFilter } from "../inputs/DocumentListRelationFilter";
import { Document_base_configListRelationFilter } from "../inputs/Document_base_configListRelationFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { Mail_template_mediaListRelationFilter } from "../inputs/Mail_template_mediaListRelationFilter";
import { Media_folderNullableRelationFilter } from "../inputs/Media_folderNullableRelationFilter";
import { Media_tagListRelationFilter } from "../inputs/Media_tagListRelationFilter";
import { Media_thumbnailListRelationFilter } from "../inputs/Media_thumbnailListRelationFilter";
import { Media_translationListRelationFilter } from "../inputs/Media_translationListRelationFilter";
import { Order_line_itemListRelationFilter } from "../inputs/Order_line_itemListRelationFilter";
import { Order_line_item_downloadListRelationFilter } from "../inputs/Order_line_item_downloadListRelationFilter";
import { Payment_methodListRelationFilter } from "../inputs/Payment_methodListRelationFilter";
import { Product_configurator_settingListRelationFilter } from "../inputs/Product_configurator_settingListRelationFilter";
import { Product_downloadListRelationFilter } from "../inputs/Product_downloadListRelationFilter";
import { Product_manufacturerListRelationFilter } from "../inputs/Product_manufacturerListRelationFilter";
import { Product_mediaListRelationFilter } from "../inputs/Product_mediaListRelationFilter";
import { Property_group_optionListRelationFilter } from "../inputs/Property_group_optionListRelationFilter";
import { Shipping_methodListRelationFilter } from "../inputs/Shipping_methodListRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { Swag_paypal_pos_sales_channel_mediaListRelationFilter } from "../inputs/Swag_paypal_pos_sales_channel_mediaListRelationFilter";
import { ThemeListRelationFilter } from "../inputs/ThemeListRelationFilter";
import { Theme_mediaListRelationFilter } from "../inputs/Theme_mediaListRelationFilter";
import { UserListRelationFilter } from "../inputs/UserListRelationFilter";
import { UserNullableRelationFilter } from "../inputs/UserNullableRelationFilter";

@TypeGraphQL.InputType("MediaWhereInput", {})
export class MediaWhereInput {
  @TypeGraphQL.Field(_type => [MediaWhereInput], {
    nullable: true
  })
  AND?: MediaWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MediaWhereInput], {
    nullable: true
  })
  OR?: MediaWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MediaWhereInput], {
    nullable: true
  })
  NOT?: MediaWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  user_id?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  media_folder_id?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  mime_type?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  file_extension?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  file_size?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  meta_data?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  file_name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  media_type?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  thumbnails_ro?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  private?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  uploaded_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  path?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => App_payment_methodListRelationFilter, {
    nullable: true
  })
  app_payment_method?: App_payment_methodListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => App_shipping_methodListRelationFilter, {
    nullable: true
  })
  app_shipping_method?: App_shipping_methodListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CategoryListRelationFilter, {
    nullable: true
  })
  category?: CategoryListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Cms_blockListRelationFilter, {
    nullable: true
  })
  cms_block?: Cms_blockListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Cms_pageListRelationFilter, {
    nullable: true
  })
  cms_page?: Cms_pageListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Cms_sectionListRelationFilter, {
    nullable: true
  })
  cms_section?: Cms_sectionListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => DocumentListRelationFilter, {
    nullable: true
  })
  document?: DocumentListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Document_base_configListRelationFilter, {
    nullable: true
  })
  document_base_config?: Document_base_configListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Mail_template_mediaListRelationFilter, {
    nullable: true
  })
  mail_template_media?: Mail_template_mediaListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Media_folderNullableRelationFilter, {
    nullable: true
  })
  media_folder?: Media_folderNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => UserNullableRelationFilter, {
    nullable: true
  })
  user_media_user_idTouser?: UserNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Media_tagListRelationFilter, {
    nullable: true
  })
  media_tag?: Media_tagListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Media_thumbnailListRelationFilter, {
    nullable: true
  })
  media_thumbnail?: Media_thumbnailListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Media_translationListRelationFilter, {
    nullable: true
  })
  media_translation?: Media_translationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Order_line_itemListRelationFilter, {
    nullable: true
  })
  order_line_item?: Order_line_itemListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Order_line_item_downloadListRelationFilter, {
    nullable: true
  })
  order_line_item_download?: Order_line_item_downloadListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Payment_methodListRelationFilter, {
    nullable: true
  })
  payment_method?: Payment_methodListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Product_configurator_settingListRelationFilter, {
    nullable: true
  })
  product_configurator_setting?: Product_configurator_settingListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Product_downloadListRelationFilter, {
    nullable: true
  })
  product_download?: Product_downloadListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Product_manufacturerListRelationFilter, {
    nullable: true
  })
  product_manufacturer?: Product_manufacturerListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Product_mediaListRelationFilter, {
    nullable: true
  })
  product_media?: Product_mediaListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Property_group_optionListRelationFilter, {
    nullable: true
  })
  property_group_option?: Property_group_optionListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Shipping_methodListRelationFilter, {
    nullable: true
  })
  shipping_method?: Shipping_methodListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Swag_paypal_pos_sales_channel_mediaListRelationFilter, {
    nullable: true
  })
  swag_paypal_pos_sales_channel_media?: Swag_paypal_pos_sales_channel_mediaListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ThemeListRelationFilter, {
    nullable: true
  })
  theme?: ThemeListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Theme_mediaListRelationFilter, {
    nullable: true
  })
  theme_media?: Theme_mediaListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => UserListRelationFilter, {
    nullable: true
  })
  user_user_avatar_idTomedia?: UserListRelationFilter | undefined;
}
