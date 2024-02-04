import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_payment_methodOrderByRelationAggregateInput } from "../inputs/App_payment_methodOrderByRelationAggregateInput";
import { App_shipping_methodOrderByRelationAggregateInput } from "../inputs/App_shipping_methodOrderByRelationAggregateInput";
import { CategoryOrderByRelationAggregateInput } from "../inputs/CategoryOrderByRelationAggregateInput";
import { Cms_blockOrderByRelationAggregateInput } from "../inputs/Cms_blockOrderByRelationAggregateInput";
import { Cms_pageOrderByRelationAggregateInput } from "../inputs/Cms_pageOrderByRelationAggregateInput";
import { Cms_sectionOrderByRelationAggregateInput } from "../inputs/Cms_sectionOrderByRelationAggregateInput";
import { DocumentOrderByRelationAggregateInput } from "../inputs/DocumentOrderByRelationAggregateInput";
import { Document_base_configOrderByRelationAggregateInput } from "../inputs/Document_base_configOrderByRelationAggregateInput";
import { Mail_template_mediaOrderByRelationAggregateInput } from "../inputs/Mail_template_mediaOrderByRelationAggregateInput";
import { MediaOrderByRelevanceInput } from "../inputs/MediaOrderByRelevanceInput";
import { Media_folderOrderByWithRelationAndSearchRelevanceInput } from "../inputs/Media_folderOrderByWithRelationAndSearchRelevanceInput";
import { Media_tagOrderByRelationAggregateInput } from "../inputs/Media_tagOrderByRelationAggregateInput";
import { Media_thumbnailOrderByRelationAggregateInput } from "../inputs/Media_thumbnailOrderByRelationAggregateInput";
import { Media_translationOrderByRelationAggregateInput } from "../inputs/Media_translationOrderByRelationAggregateInput";
import { Order_line_itemOrderByRelationAggregateInput } from "../inputs/Order_line_itemOrderByRelationAggregateInput";
import { Order_line_item_downloadOrderByRelationAggregateInput } from "../inputs/Order_line_item_downloadOrderByRelationAggregateInput";
import { Payment_methodOrderByRelationAggregateInput } from "../inputs/Payment_methodOrderByRelationAggregateInput";
import { Product_configurator_settingOrderByRelationAggregateInput } from "../inputs/Product_configurator_settingOrderByRelationAggregateInput";
import { Product_downloadOrderByRelationAggregateInput } from "../inputs/Product_downloadOrderByRelationAggregateInput";
import { Product_manufacturerOrderByRelationAggregateInput } from "../inputs/Product_manufacturerOrderByRelationAggregateInput";
import { Product_mediaOrderByRelationAggregateInput } from "../inputs/Product_mediaOrderByRelationAggregateInput";
import { Property_group_optionOrderByRelationAggregateInput } from "../inputs/Property_group_optionOrderByRelationAggregateInput";
import { Shipping_methodOrderByRelationAggregateInput } from "../inputs/Shipping_methodOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { Swag_paypal_pos_sales_channel_mediaOrderByRelationAggregateInput } from "../inputs/Swag_paypal_pos_sales_channel_mediaOrderByRelationAggregateInput";
import { ThemeOrderByRelationAggregateInput } from "../inputs/ThemeOrderByRelationAggregateInput";
import { Theme_mediaOrderByRelationAggregateInput } from "../inputs/Theme_mediaOrderByRelationAggregateInput";
import { UserOrderByRelationAggregateInput } from "../inputs/UserOrderByRelationAggregateInput";
import { UserOrderByWithRelationAndSearchRelevanceInput } from "../inputs/UserOrderByWithRelationAndSearchRelevanceInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MediaOrderByWithRelationAndSearchRelevanceInput", {})
export class MediaOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  user_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  media_folder_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  mime_type?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  file_extension?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  file_size?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  meta_data?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  file_name?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  media_type?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  thumbnails_ro?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  private?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  uploaded_at?: SortOrderInput | undefined;

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
  path?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => App_payment_methodOrderByRelationAggregateInput, {
    nullable: true
  })
  app_payment_method?: App_payment_methodOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => App_shipping_methodOrderByRelationAggregateInput, {
    nullable: true
  })
  app_shipping_method?: App_shipping_methodOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CategoryOrderByRelationAggregateInput, {
    nullable: true
  })
  category?: CategoryOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Cms_blockOrderByRelationAggregateInput, {
    nullable: true
  })
  cms_block?: Cms_blockOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Cms_pageOrderByRelationAggregateInput, {
    nullable: true
  })
  cms_page?: Cms_pageOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Cms_sectionOrderByRelationAggregateInput, {
    nullable: true
  })
  cms_section?: Cms_sectionOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => DocumentOrderByRelationAggregateInput, {
    nullable: true
  })
  document?: DocumentOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Document_base_configOrderByRelationAggregateInput, {
    nullable: true
  })
  document_base_config?: Document_base_configOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Mail_template_mediaOrderByRelationAggregateInput, {
    nullable: true
  })
  mail_template_media?: Mail_template_mediaOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Media_folderOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  media_folder?: Media_folderOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => UserOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  user_media_user_idTouser?: UserOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Media_tagOrderByRelationAggregateInput, {
    nullable: true
  })
  media_tag?: Media_tagOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Media_thumbnailOrderByRelationAggregateInput, {
    nullable: true
  })
  media_thumbnail?: Media_thumbnailOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Media_translationOrderByRelationAggregateInput, {
    nullable: true
  })
  media_translation?: Media_translationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Order_line_itemOrderByRelationAggregateInput, {
    nullable: true
  })
  order_line_item?: Order_line_itemOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Order_line_item_downloadOrderByRelationAggregateInput, {
    nullable: true
  })
  order_line_item_download?: Order_line_item_downloadOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Payment_methodOrderByRelationAggregateInput, {
    nullable: true
  })
  payment_method?: Payment_methodOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_configurator_settingOrderByRelationAggregateInput, {
    nullable: true
  })
  product_configurator_setting?: Product_configurator_settingOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_downloadOrderByRelationAggregateInput, {
    nullable: true
  })
  product_download?: Product_downloadOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_manufacturerOrderByRelationAggregateInput, {
    nullable: true
  })
  product_manufacturer?: Product_manufacturerOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_mediaOrderByRelationAggregateInput, {
    nullable: true
  })
  product_media?: Product_mediaOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Property_group_optionOrderByRelationAggregateInput, {
    nullable: true
  })
  property_group_option?: Property_group_optionOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Shipping_methodOrderByRelationAggregateInput, {
    nullable: true
  })
  shipping_method?: Shipping_methodOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Swag_paypal_pos_sales_channel_mediaOrderByRelationAggregateInput, {
    nullable: true
  })
  swag_paypal_pos_sales_channel_media?: Swag_paypal_pos_sales_channel_mediaOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ThemeOrderByRelationAggregateInput, {
    nullable: true
  })
  theme?: ThemeOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Theme_mediaOrderByRelationAggregateInput, {
    nullable: true
  })
  theme_media?: Theme_mediaOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserOrderByRelationAggregateInput, {
    nullable: true
  })
  user_user_avatar_idTomedia?: UserOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MediaOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: MediaOrderByRelevanceInput | undefined;
}
