import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Cart } from "../models/Cart";
import { Category } from "../models/Category";
import { Cms_page } from "../models/Cms_page";
import { Country } from "../models/Country";
import { Currency } from "../models/Currency";
import { Customer } from "../models/Customer";
import { Customer_group } from "../models/Customer_group";
import { Customer_group_registration_sales_channels } from "../models/Customer_group_registration_sales_channels";
import { Customer_wishlist } from "../models/Customer_wishlist";
import { Document_base_config_sales_channel } from "../models/Document_base_config_sales_channel";
import { Event_action_sales_channel } from "../models/Event_action_sales_channel";
import { Klaviyo_flag_storage } from "../models/Klaviyo_flag_storage";
import { Klaviyo_job_cart_request } from "../models/Klaviyo_job_cart_request";
import { Klaviyo_job_event } from "../models/Klaviyo_job_event";
import { Landing_page_sales_channel } from "../models/Landing_page_sales_channel";
import { Language } from "../models/Language";
import { Mail_header_footer } from "../models/Mail_header_footer";
import { Main_category } from "../models/Main_category";
import { Newsletter_recipient } from "../models/Newsletter_recipient";
import { Number_range_sales_channel } from "../models/Number_range_sales_channel";
import { Order } from "../models/Order";
import { Payment_method } from "../models/Payment_method";
import { Product_export } from "../models/Product_export";
import { Product_review } from "../models/Product_review";
import { Product_visibility } from "../models/Product_visibility";
import { Promotion_sales_channel } from "../models/Promotion_sales_channel";
import { Sales_channel_analytics } from "../models/Sales_channel_analytics";
import { Sales_channel_api_context } from "../models/Sales_channel_api_context";
import { Sales_channel_country } from "../models/Sales_channel_country";
import { Sales_channel_currency } from "../models/Sales_channel_currency";
import { Sales_channel_domain } from "../models/Sales_channel_domain";
import { Sales_channel_language } from "../models/Sales_channel_language";
import { Sales_channel_payment_method } from "../models/Sales_channel_payment_method";
import { Sales_channel_shipping_method } from "../models/Sales_channel_shipping_method";
import { Sales_channel_translation } from "../models/Sales_channel_translation";
import { Sales_channel_type } from "../models/Sales_channel_type";
import { Seo_url } from "../models/Seo_url";
import { Seo_url_template } from "../models/Seo_url_template";
import { Shipping_method } from "../models/Shipping_method";
import { Swag_paypal_pos_sales_channel } from "../models/Swag_paypal_pos_sales_channel";
import { Swag_paypal_pos_sales_channel_inventory } from "../models/Swag_paypal_pos_sales_channel_inventory";
import { Swag_paypal_pos_sales_channel_media } from "../models/Swag_paypal_pos_sales_channel_media";
import { Swag_paypal_pos_sales_channel_product } from "../models/Swag_paypal_pos_sales_channel_product";
import { Swag_paypal_pos_sales_channel_run } from "../models/Swag_paypal_pos_sales_channel_run";
import { System_config } from "../models/System_config";
import { Theme_sales_channel } from "../models/Theme_sales_channel";
import { Sales_channelCount } from "../resolvers/outputs/Sales_channelCount";

@TypeGraphQL.ObjectType("Sales_channel", {})
export class Sales_channel {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  type_id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  short_name?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  configuration?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  access_key!: string;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  language_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  currency_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  payment_method_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  shipping_method_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  country_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  navigation_category_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  navigation_category_version_id!: Buffer;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  navigation_category_depth!: number;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  home_cms_page_id?: Buffer | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  home_cms_page_version_id?: Buffer | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  hreflang_active?: boolean | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  hreflang_default_domain_id?: Buffer | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  footer_category_id?: Buffer | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  footer_category_version_id?: Buffer | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  service_category_id?: Buffer | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  service_category_version_id?: Buffer | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  active!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  maintenance!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  maintenance_ip_whitelist?: string | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  customer_group_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  mail_header_footer_id?: Buffer | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  payment_method_ids?: string | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  analytics_id?: Buffer | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  tax_calculation_type!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  cart?: Cart[];

  customer_customer_bound_sales_channel_idTosales_channel?: Customer[];

  customer_customer_sales_channel_idTosales_channel?: Customer[];

  customer_group_registration_sales_channels?: Customer_group_registration_sales_channels[];

  customer_wishlist?: Customer_wishlist[];

  document_base_config_sales_channel?: Document_base_config_sales_channel[];

  event_action_sales_channel?: Event_action_sales_channel[];

  klaviyo_flag_storage?: Klaviyo_flag_storage[];

  klaviyo_job_cart_request?: Klaviyo_job_cart_request[];

  klaviyo_job_event?: Klaviyo_job_event[];

  landing_page_sales_channel?: Landing_page_sales_channel[];

  main_category?: Main_category[];

  newsletter_recipient?: Newsletter_recipient[];

  number_range_sales_channel?: Number_range_sales_channel[];

  order?: Order[];

  product_export_product_export_sales_channel_idTosales_channel?: Product_export[];

  product_export_product_export_storefront_sales_channel_idTosales_channel?: Product_export[];

  product_review?: Product_review[];

  product_visibility?: Product_visibility[];

  promotion_sales_channel?: Promotion_sales_channel[];

  sales_channel_analytics?: Sales_channel_analytics | null;

  country?: Country;

  currency?: Currency;

  customer_group?: Customer_group;

  category_sales_channel_footer_category_id_footer_category_version_idTocategory?: Category | null;

  mail_header_footer?: Mail_header_footer | null;

  cms_page?: Cms_page | null;

  sales_channel_domain_sales_channel_hreflang_default_domain_idTosales_channel_domain?: Sales_channel_domain | null;

  language?: Language;

  category_sales_channel_navigation_category_id_navigation_category_version_idTocategory?: Category;

  payment_method?: Payment_method;

  category_sales_channel_service_category_id_service_category_version_idTocategory?: Category | null;

  shipping_method?: Shipping_method;

  sales_channel_type?: Sales_channel_type;

  sales_channel_api_context?: Sales_channel_api_context[];

  sales_channel_country?: Sales_channel_country[];

  sales_channel_currency?: Sales_channel_currency[];

  sales_channel_domain_sales_channel_domain_sales_channel_idTosales_channel?: Sales_channel_domain[];

  sales_channel_language?: Sales_channel_language[];

  sales_channel_payment_method?: Sales_channel_payment_method[];

  sales_channel_shipping_method?: Sales_channel_shipping_method[];

  sales_channel_translation?: Sales_channel_translation[];

  seo_url?: Seo_url[];

  seo_url_template?: Seo_url_template[];

  swag_paypal_pos_sales_channel?: Swag_paypal_pos_sales_channel[];

  swag_paypal_pos_sales_channel_inventory?: Swag_paypal_pos_sales_channel_inventory[];

  swag_paypal_pos_sales_channel_media?: Swag_paypal_pos_sales_channel_media[];

  swag_paypal_pos_sales_channel_product?: Swag_paypal_pos_sales_channel_product[];

  swag_paypal_pos_sales_channel_run?: Swag_paypal_pos_sales_channel_run[];

  system_config?: System_config[];

  theme_sales_channel?: Theme_sales_channel | null;

  @TypeGraphQL.Field(_type => Sales_channelCount, {
    nullable: true
  })
  _count?: Sales_channelCount | null;
}
