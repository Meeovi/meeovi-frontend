import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_payment_methodCreateNestedManyWithoutMediaInput } from "../inputs/App_payment_methodCreateNestedManyWithoutMediaInput";
import { App_shipping_methodCreateNestedManyWithoutMediaInput } from "../inputs/App_shipping_methodCreateNestedManyWithoutMediaInput";
import { CategoryCreateNestedManyWithoutMediaInput } from "../inputs/CategoryCreateNestedManyWithoutMediaInput";
import { Cms_blockCreateNestedManyWithoutMediaInput } from "../inputs/Cms_blockCreateNestedManyWithoutMediaInput";
import { Cms_pageCreateNestedManyWithoutMediaInput } from "../inputs/Cms_pageCreateNestedManyWithoutMediaInput";
import { Cms_sectionCreateNestedManyWithoutMediaInput } from "../inputs/Cms_sectionCreateNestedManyWithoutMediaInput";
import { DocumentCreateNestedManyWithoutMediaInput } from "../inputs/DocumentCreateNestedManyWithoutMediaInput";
import { Document_base_configCreateNestedManyWithoutMediaInput } from "../inputs/Document_base_configCreateNestedManyWithoutMediaInput";
import { Mail_template_mediaCreateNestedManyWithoutMediaInput } from "../inputs/Mail_template_mediaCreateNestedManyWithoutMediaInput";
import { Media_folderCreateNestedOneWithoutMediaInput } from "../inputs/Media_folderCreateNestedOneWithoutMediaInput";
import { Media_tagCreateNestedManyWithoutMediaInput } from "../inputs/Media_tagCreateNestedManyWithoutMediaInput";
import { Media_thumbnailCreateNestedManyWithoutMediaInput } from "../inputs/Media_thumbnailCreateNestedManyWithoutMediaInput";
import { Media_translationCreateNestedManyWithoutMediaInput } from "../inputs/Media_translationCreateNestedManyWithoutMediaInput";
import { Order_line_itemCreateNestedManyWithoutMediaInput } from "../inputs/Order_line_itemCreateNestedManyWithoutMediaInput";
import { Order_line_item_downloadCreateNestedManyWithoutMediaInput } from "../inputs/Order_line_item_downloadCreateNestedManyWithoutMediaInput";
import { Payment_methodCreateNestedManyWithoutMediaInput } from "../inputs/Payment_methodCreateNestedManyWithoutMediaInput";
import { Product_configurator_settingCreateNestedManyWithoutMediaInput } from "../inputs/Product_configurator_settingCreateNestedManyWithoutMediaInput";
import { Product_downloadCreateNestedManyWithoutMediaInput } from "../inputs/Product_downloadCreateNestedManyWithoutMediaInput";
import { Product_manufacturerCreateNestedManyWithoutMediaInput } from "../inputs/Product_manufacturerCreateNestedManyWithoutMediaInput";
import { Product_mediaCreateNestedManyWithoutMediaInput } from "../inputs/Product_mediaCreateNestedManyWithoutMediaInput";
import { Shipping_methodCreateNestedManyWithoutMediaInput } from "../inputs/Shipping_methodCreateNestedManyWithoutMediaInput";
import { Swag_paypal_pos_sales_channel_mediaCreateNestedManyWithoutMediaInput } from "../inputs/Swag_paypal_pos_sales_channel_mediaCreateNestedManyWithoutMediaInput";
import { ThemeCreateNestedManyWithoutMediaInput } from "../inputs/ThemeCreateNestedManyWithoutMediaInput";
import { Theme_mediaCreateNestedManyWithoutMediaInput } from "../inputs/Theme_mediaCreateNestedManyWithoutMediaInput";
import { UserCreateNestedManyWithoutMedia_user_avatar_idTomediaInput } from "../inputs/UserCreateNestedManyWithoutMedia_user_avatar_idTomediaInput";
import { UserCreateNestedOneWithoutMedia_media_user_idTouserInput } from "../inputs/UserCreateNestedOneWithoutMedia_media_user_idTouserInput";

@TypeGraphQL.InputType("MediaCreateWithoutProperty_group_optionInput", {})
export class MediaCreateWithoutProperty_group_optionInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  mime_type?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  file_extension?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  file_size?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  meta_data?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  file_name?: string | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  media_type?: Buffer | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  thumbnails_ro?: Buffer | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  private?: boolean | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  uploaded_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  path?: string | undefined;

  @TypeGraphQL.Field(_type => App_payment_methodCreateNestedManyWithoutMediaInput, {
    nullable: true
  })
  app_payment_method?: App_payment_methodCreateNestedManyWithoutMediaInput | undefined;

  @TypeGraphQL.Field(_type => App_shipping_methodCreateNestedManyWithoutMediaInput, {
    nullable: true
  })
  app_shipping_method?: App_shipping_methodCreateNestedManyWithoutMediaInput | undefined;

  @TypeGraphQL.Field(_type => CategoryCreateNestedManyWithoutMediaInput, {
    nullable: true
  })
  category?: CategoryCreateNestedManyWithoutMediaInput | undefined;

  @TypeGraphQL.Field(_type => Cms_blockCreateNestedManyWithoutMediaInput, {
    nullable: true
  })
  cms_block?: Cms_blockCreateNestedManyWithoutMediaInput | undefined;

  @TypeGraphQL.Field(_type => Cms_pageCreateNestedManyWithoutMediaInput, {
    nullable: true
  })
  cms_page?: Cms_pageCreateNestedManyWithoutMediaInput | undefined;

  @TypeGraphQL.Field(_type => Cms_sectionCreateNestedManyWithoutMediaInput, {
    nullable: true
  })
  cms_section?: Cms_sectionCreateNestedManyWithoutMediaInput | undefined;

  @TypeGraphQL.Field(_type => DocumentCreateNestedManyWithoutMediaInput, {
    nullable: true
  })
  document?: DocumentCreateNestedManyWithoutMediaInput | undefined;

  @TypeGraphQL.Field(_type => Document_base_configCreateNestedManyWithoutMediaInput, {
    nullable: true
  })
  document_base_config?: Document_base_configCreateNestedManyWithoutMediaInput | undefined;

  @TypeGraphQL.Field(_type => Mail_template_mediaCreateNestedManyWithoutMediaInput, {
    nullable: true
  })
  mail_template_media?: Mail_template_mediaCreateNestedManyWithoutMediaInput | undefined;

  @TypeGraphQL.Field(_type => Media_folderCreateNestedOneWithoutMediaInput, {
    nullable: true
  })
  media_folder?: Media_folderCreateNestedOneWithoutMediaInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutMedia_media_user_idTouserInput, {
    nullable: true
  })
  user_media_user_idTouser?: UserCreateNestedOneWithoutMedia_media_user_idTouserInput | undefined;

  @TypeGraphQL.Field(_type => Media_tagCreateNestedManyWithoutMediaInput, {
    nullable: true
  })
  media_tag?: Media_tagCreateNestedManyWithoutMediaInput | undefined;

  @TypeGraphQL.Field(_type => Media_thumbnailCreateNestedManyWithoutMediaInput, {
    nullable: true
  })
  media_thumbnail?: Media_thumbnailCreateNestedManyWithoutMediaInput | undefined;

  @TypeGraphQL.Field(_type => Media_translationCreateNestedManyWithoutMediaInput, {
    nullable: true
  })
  media_translation?: Media_translationCreateNestedManyWithoutMediaInput | undefined;

  @TypeGraphQL.Field(_type => Order_line_itemCreateNestedManyWithoutMediaInput, {
    nullable: true
  })
  order_line_item?: Order_line_itemCreateNestedManyWithoutMediaInput | undefined;

  @TypeGraphQL.Field(_type => Order_line_item_downloadCreateNestedManyWithoutMediaInput, {
    nullable: true
  })
  order_line_item_download?: Order_line_item_downloadCreateNestedManyWithoutMediaInput | undefined;

  @TypeGraphQL.Field(_type => Payment_methodCreateNestedManyWithoutMediaInput, {
    nullable: true
  })
  payment_method?: Payment_methodCreateNestedManyWithoutMediaInput | undefined;

  @TypeGraphQL.Field(_type => Product_configurator_settingCreateNestedManyWithoutMediaInput, {
    nullable: true
  })
  product_configurator_setting?: Product_configurator_settingCreateNestedManyWithoutMediaInput | undefined;

  @TypeGraphQL.Field(_type => Product_downloadCreateNestedManyWithoutMediaInput, {
    nullable: true
  })
  product_download?: Product_downloadCreateNestedManyWithoutMediaInput | undefined;

  @TypeGraphQL.Field(_type => Product_manufacturerCreateNestedManyWithoutMediaInput, {
    nullable: true
  })
  product_manufacturer?: Product_manufacturerCreateNestedManyWithoutMediaInput | undefined;

  @TypeGraphQL.Field(_type => Product_mediaCreateNestedManyWithoutMediaInput, {
    nullable: true
  })
  product_media?: Product_mediaCreateNestedManyWithoutMediaInput | undefined;

  @TypeGraphQL.Field(_type => Shipping_methodCreateNestedManyWithoutMediaInput, {
    nullable: true
  })
  shipping_method?: Shipping_methodCreateNestedManyWithoutMediaInput | undefined;

  @TypeGraphQL.Field(_type => Swag_paypal_pos_sales_channel_mediaCreateNestedManyWithoutMediaInput, {
    nullable: true
  })
  swag_paypal_pos_sales_channel_media?: Swag_paypal_pos_sales_channel_mediaCreateNestedManyWithoutMediaInput | undefined;

  @TypeGraphQL.Field(_type => ThemeCreateNestedManyWithoutMediaInput, {
    nullable: true
  })
  theme?: ThemeCreateNestedManyWithoutMediaInput | undefined;

  @TypeGraphQL.Field(_type => Theme_mediaCreateNestedManyWithoutMediaInput, {
    nullable: true
  })
  theme_media?: Theme_mediaCreateNestedManyWithoutMediaInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedManyWithoutMedia_user_avatar_idTomediaInput, {
    nullable: true
  })
  user_user_avatar_idTomedia?: UserCreateNestedManyWithoutMedia_user_avatar_idTomediaInput | undefined;
}
