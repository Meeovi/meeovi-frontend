import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_payment_methodUpdateManyWithoutMediaNestedInput } from "../inputs/App_payment_methodUpdateManyWithoutMediaNestedInput";
import { App_shipping_methodUpdateManyWithoutMediaNestedInput } from "../inputs/App_shipping_methodUpdateManyWithoutMediaNestedInput";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { BytesFieldUpdateOperationsInput } from "../inputs/BytesFieldUpdateOperationsInput";
import { CategoryUpdateManyWithoutMediaNestedInput } from "../inputs/CategoryUpdateManyWithoutMediaNestedInput";
import { Cms_blockUpdateManyWithoutMediaNestedInput } from "../inputs/Cms_blockUpdateManyWithoutMediaNestedInput";
import { Cms_pageUpdateManyWithoutMediaNestedInput } from "../inputs/Cms_pageUpdateManyWithoutMediaNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { DocumentUpdateManyWithoutMediaNestedInput } from "../inputs/DocumentUpdateManyWithoutMediaNestedInput";
import { Document_base_configUpdateManyWithoutMediaNestedInput } from "../inputs/Document_base_configUpdateManyWithoutMediaNestedInput";
import { Mail_template_mediaUpdateManyWithoutMediaNestedInput } from "../inputs/Mail_template_mediaUpdateManyWithoutMediaNestedInput";
import { Media_folderUpdateOneWithoutMediaNestedInput } from "../inputs/Media_folderUpdateOneWithoutMediaNestedInput";
import { Media_tagUpdateManyWithoutMediaNestedInput } from "../inputs/Media_tagUpdateManyWithoutMediaNestedInput";
import { Media_thumbnailUpdateManyWithoutMediaNestedInput } from "../inputs/Media_thumbnailUpdateManyWithoutMediaNestedInput";
import { Media_translationUpdateManyWithoutMediaNestedInput } from "../inputs/Media_translationUpdateManyWithoutMediaNestedInput";
import { NullableBytesFieldUpdateOperationsInput } from "../inputs/NullableBytesFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { Order_line_itemUpdateManyWithoutMediaNestedInput } from "../inputs/Order_line_itemUpdateManyWithoutMediaNestedInput";
import { Order_line_item_downloadUpdateManyWithoutMediaNestedInput } from "../inputs/Order_line_item_downloadUpdateManyWithoutMediaNestedInput";
import { Payment_methodUpdateManyWithoutMediaNestedInput } from "../inputs/Payment_methodUpdateManyWithoutMediaNestedInput";
import { Product_configurator_settingUpdateManyWithoutMediaNestedInput } from "../inputs/Product_configurator_settingUpdateManyWithoutMediaNestedInput";
import { Product_downloadUpdateManyWithoutMediaNestedInput } from "../inputs/Product_downloadUpdateManyWithoutMediaNestedInput";
import { Product_manufacturerUpdateManyWithoutMediaNestedInput } from "../inputs/Product_manufacturerUpdateManyWithoutMediaNestedInput";
import { Product_mediaUpdateManyWithoutMediaNestedInput } from "../inputs/Product_mediaUpdateManyWithoutMediaNestedInput";
import { Property_group_optionUpdateManyWithoutMediaNestedInput } from "../inputs/Property_group_optionUpdateManyWithoutMediaNestedInput";
import { Shipping_methodUpdateManyWithoutMediaNestedInput } from "../inputs/Shipping_methodUpdateManyWithoutMediaNestedInput";
import { Swag_paypal_pos_sales_channel_mediaUpdateManyWithoutMediaNestedInput } from "../inputs/Swag_paypal_pos_sales_channel_mediaUpdateManyWithoutMediaNestedInput";
import { ThemeUpdateManyWithoutMediaNestedInput } from "../inputs/ThemeUpdateManyWithoutMediaNestedInput";
import { Theme_mediaUpdateManyWithoutMediaNestedInput } from "../inputs/Theme_mediaUpdateManyWithoutMediaNestedInput";
import { UserUpdateManyWithoutMedia_user_avatar_idTomediaNestedInput } from "../inputs/UserUpdateManyWithoutMedia_user_avatar_idTomediaNestedInput";
import { UserUpdateOneWithoutMedia_media_user_idTouserNestedInput } from "../inputs/UserUpdateOneWithoutMedia_media_user_idTouserNestedInput";

@TypeGraphQL.InputType("MediaUpdateWithoutCms_sectionInput", {})
export class MediaUpdateWithoutCms_sectionInput {
  @TypeGraphQL.Field(_type => BytesFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: BytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  mime_type?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  file_extension?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput, {
    nullable: true
  })
  file_size?: NullableIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  meta_data?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  file_name?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableBytesFieldUpdateOperationsInput, {
    nullable: true
  })
  media_type?: NullableBytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableBytesFieldUpdateOperationsInput, {
    nullable: true
  })
  thumbnails_ro?: NullableBytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  private?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  uploaded_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  created_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updated_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  path?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => App_payment_methodUpdateManyWithoutMediaNestedInput, {
    nullable: true
  })
  app_payment_method?: App_payment_methodUpdateManyWithoutMediaNestedInput | undefined;

  @TypeGraphQL.Field(_type => App_shipping_methodUpdateManyWithoutMediaNestedInput, {
    nullable: true
  })
  app_shipping_method?: App_shipping_methodUpdateManyWithoutMediaNestedInput | undefined;

  @TypeGraphQL.Field(_type => CategoryUpdateManyWithoutMediaNestedInput, {
    nullable: true
  })
  category?: CategoryUpdateManyWithoutMediaNestedInput | undefined;

  @TypeGraphQL.Field(_type => Cms_blockUpdateManyWithoutMediaNestedInput, {
    nullable: true
  })
  cms_block?: Cms_blockUpdateManyWithoutMediaNestedInput | undefined;

  @TypeGraphQL.Field(_type => Cms_pageUpdateManyWithoutMediaNestedInput, {
    nullable: true
  })
  cms_page?: Cms_pageUpdateManyWithoutMediaNestedInput | undefined;

  @TypeGraphQL.Field(_type => DocumentUpdateManyWithoutMediaNestedInput, {
    nullable: true
  })
  document?: DocumentUpdateManyWithoutMediaNestedInput | undefined;

  @TypeGraphQL.Field(_type => Document_base_configUpdateManyWithoutMediaNestedInput, {
    nullable: true
  })
  document_base_config?: Document_base_configUpdateManyWithoutMediaNestedInput | undefined;

  @TypeGraphQL.Field(_type => Mail_template_mediaUpdateManyWithoutMediaNestedInput, {
    nullable: true
  })
  mail_template_media?: Mail_template_mediaUpdateManyWithoutMediaNestedInput | undefined;

  @TypeGraphQL.Field(_type => Media_folderUpdateOneWithoutMediaNestedInput, {
    nullable: true
  })
  media_folder?: Media_folderUpdateOneWithoutMediaNestedInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneWithoutMedia_media_user_idTouserNestedInput, {
    nullable: true
  })
  user_media_user_idTouser?: UserUpdateOneWithoutMedia_media_user_idTouserNestedInput | undefined;

  @TypeGraphQL.Field(_type => Media_tagUpdateManyWithoutMediaNestedInput, {
    nullable: true
  })
  media_tag?: Media_tagUpdateManyWithoutMediaNestedInput | undefined;

  @TypeGraphQL.Field(_type => Media_thumbnailUpdateManyWithoutMediaNestedInput, {
    nullable: true
  })
  media_thumbnail?: Media_thumbnailUpdateManyWithoutMediaNestedInput | undefined;

  @TypeGraphQL.Field(_type => Media_translationUpdateManyWithoutMediaNestedInput, {
    nullable: true
  })
  media_translation?: Media_translationUpdateManyWithoutMediaNestedInput | undefined;

  @TypeGraphQL.Field(_type => Order_line_itemUpdateManyWithoutMediaNestedInput, {
    nullable: true
  })
  order_line_item?: Order_line_itemUpdateManyWithoutMediaNestedInput | undefined;

  @TypeGraphQL.Field(_type => Order_line_item_downloadUpdateManyWithoutMediaNestedInput, {
    nullable: true
  })
  order_line_item_download?: Order_line_item_downloadUpdateManyWithoutMediaNestedInput | undefined;

  @TypeGraphQL.Field(_type => Payment_methodUpdateManyWithoutMediaNestedInput, {
    nullable: true
  })
  payment_method?: Payment_methodUpdateManyWithoutMediaNestedInput | undefined;

  @TypeGraphQL.Field(_type => Product_configurator_settingUpdateManyWithoutMediaNestedInput, {
    nullable: true
  })
  product_configurator_setting?: Product_configurator_settingUpdateManyWithoutMediaNestedInput | undefined;

  @TypeGraphQL.Field(_type => Product_downloadUpdateManyWithoutMediaNestedInput, {
    nullable: true
  })
  product_download?: Product_downloadUpdateManyWithoutMediaNestedInput | undefined;

  @TypeGraphQL.Field(_type => Product_manufacturerUpdateManyWithoutMediaNestedInput, {
    nullable: true
  })
  product_manufacturer?: Product_manufacturerUpdateManyWithoutMediaNestedInput | undefined;

  @TypeGraphQL.Field(_type => Product_mediaUpdateManyWithoutMediaNestedInput, {
    nullable: true
  })
  product_media?: Product_mediaUpdateManyWithoutMediaNestedInput | undefined;

  @TypeGraphQL.Field(_type => Property_group_optionUpdateManyWithoutMediaNestedInput, {
    nullable: true
  })
  property_group_option?: Property_group_optionUpdateManyWithoutMediaNestedInput | undefined;

  @TypeGraphQL.Field(_type => Shipping_methodUpdateManyWithoutMediaNestedInput, {
    nullable: true
  })
  shipping_method?: Shipping_methodUpdateManyWithoutMediaNestedInput | undefined;

  @TypeGraphQL.Field(_type => Swag_paypal_pos_sales_channel_mediaUpdateManyWithoutMediaNestedInput, {
    nullable: true
  })
  swag_paypal_pos_sales_channel_media?: Swag_paypal_pos_sales_channel_mediaUpdateManyWithoutMediaNestedInput | undefined;

  @TypeGraphQL.Field(_type => ThemeUpdateManyWithoutMediaNestedInput, {
    nullable: true
  })
  theme?: ThemeUpdateManyWithoutMediaNestedInput | undefined;

  @TypeGraphQL.Field(_type => Theme_mediaUpdateManyWithoutMediaNestedInput, {
    nullable: true
  })
  theme_media?: Theme_mediaUpdateManyWithoutMediaNestedInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateManyWithoutMedia_user_avatar_idTomediaNestedInput, {
    nullable: true
  })
  user_user_avatar_idTomedia?: UserUpdateManyWithoutMedia_user_avatar_idTomediaNestedInput | undefined;
}
