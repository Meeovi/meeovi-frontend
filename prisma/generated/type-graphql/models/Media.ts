import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { App_payment_method } from "../models/App_payment_method";
import { App_shipping_method } from "../models/App_shipping_method";
import { Category } from "../models/Category";
import { Cms_block } from "../models/Cms_block";
import { Cms_page } from "../models/Cms_page";
import { Cms_section } from "../models/Cms_section";
import { Document } from "../models/Document";
import { Document_base_config } from "../models/Document_base_config";
import { Mail_template_media } from "../models/Mail_template_media";
import { Media_folder } from "../models/Media_folder";
import { Media_tag } from "../models/Media_tag";
import { Media_thumbnail } from "../models/Media_thumbnail";
import { Media_translation } from "../models/Media_translation";
import { Order_line_item } from "../models/Order_line_item";
import { Order_line_item_download } from "../models/Order_line_item_download";
import { Payment_method } from "../models/Payment_method";
import { Product_configurator_setting } from "../models/Product_configurator_setting";
import { Product_download } from "../models/Product_download";
import { Product_manufacturer } from "../models/Product_manufacturer";
import { Product_media } from "../models/Product_media";
import { Property_group_option } from "../models/Property_group_option";
import { Shipping_method } from "../models/Shipping_method";
import { Swag_paypal_pos_sales_channel_media } from "../models/Swag_paypal_pos_sales_channel_media";
import { Theme } from "../models/Theme";
import { Theme_media } from "../models/Theme_media";
import { User } from "../models/User";
import { MediaCount } from "../resolvers/outputs/MediaCount";

@TypeGraphQL.ObjectType("Media", {})
export class Media {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  user_id?: Buffer | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  media_folder_id?: Buffer | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  mime_type?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  file_extension?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  file_size?: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  meta_data?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  file_name?: string | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  media_type?: Buffer | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  thumbnails_ro?: Buffer | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  private!: boolean;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  uploaded_at?: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  path?: string | null;

  app_payment_method?: App_payment_method[];

  app_shipping_method?: App_shipping_method[];

  category?: Category[];

  cms_block?: Cms_block[];

  cms_page?: Cms_page[];

  cms_section?: Cms_section[];

  document?: Document[];

  document_base_config?: Document_base_config[];

  mail_template_media?: Mail_template_media[];

  media_folder?: Media_folder | null;

  user_media_user_idTouser?: User | null;

  media_tag?: Media_tag[];

  media_thumbnail?: Media_thumbnail[];

  media_translation?: Media_translation[];

  order_line_item?: Order_line_item[];

  order_line_item_download?: Order_line_item_download[];

  payment_method?: Payment_method[];

  product_configurator_setting?: Product_configurator_setting[];

  product_download?: Product_download[];

  product_manufacturer?: Product_manufacturer[];

  product_media?: Product_media[];

  property_group_option?: Property_group_option[];

  shipping_method?: Shipping_method[];

  swag_paypal_pos_sales_channel_media?: Swag_paypal_pos_sales_channel_media[];

  theme?: Theme[];

  theme_media?: Theme_media[];

  user_user_avatar_idTomedia?: User[];

  @TypeGraphQL.Field(_type => MediaCount, {
    nullable: true
  })
  _count?: MediaCount | null;
}
