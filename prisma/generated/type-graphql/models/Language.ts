import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { App_action_button_translation } from "../models/App_action_button_translation";
import { App_cms_block_translation } from "../models/App_cms_block_translation";
import { App_flow_action_translation } from "../models/App_flow_action_translation";
import { App_script_condition_translation } from "../models/App_script_condition_translation";
import { App_translation } from "../models/App_translation";
import { Category_translation } from "../models/Category_translation";
import { Cms_page_translation } from "../models/Cms_page_translation";
import { Cms_slot_translation } from "../models/Cms_slot_translation";
import { Country_state_translation } from "../models/Country_state_translation";
import { Country_translation } from "../models/Country_translation";
import { Currency_translation } from "../models/Currency_translation";
import { Customer_group_translation } from "../models/Customer_group_translation";
import { Delivery_time_translation } from "../models/Delivery_time_translation";
import { Document_type_translation } from "../models/Document_type_translation";
import { Import_export_profile_translation } from "../models/Import_export_profile_translation";
import { Landing_page_translation } from "../models/Landing_page_translation";
import { Locale } from "../models/Locale";
import { Locale_translation } from "../models/Locale_translation";
import { Mail_header_footer_translation } from "../models/Mail_header_footer_translation";
import { Mail_template_media } from "../models/Mail_template_media";
import { Mail_template_translation } from "../models/Mail_template_translation";
import { Mail_template_type_translation } from "../models/Mail_template_type_translation";
import { Media_translation } from "../models/Media_translation";
import { Newsletter_recipient } from "../models/Newsletter_recipient";
import { Number_range_translation } from "../models/Number_range_translation";
import { Number_range_type_translation } from "../models/Number_range_type_translation";
import { Order } from "../models/Order";
import { Payment_method_translation } from "../models/Payment_method_translation";
import { Plugin_translation } from "../models/Plugin_translation";
import { Product_cross_selling_translation } from "../models/Product_cross_selling_translation";
import { Product_feature_set_translation } from "../models/Product_feature_set_translation";
import { Product_keyword_dictionary } from "../models/Product_keyword_dictionary";
import { Product_manufacturer_translation } from "../models/Product_manufacturer_translation";
import { Product_review } from "../models/Product_review";
import { Product_search_config } from "../models/Product_search_config";
import { Product_search_keyword } from "../models/Product_search_keyword";
import { Product_sorting_translation } from "../models/Product_sorting_translation";
import { Product_stream_translation } from "../models/Product_stream_translation";
import { Product_translation } from "../models/Product_translation";
import { Promotion_translation } from "../models/Promotion_translation";
import { Property_group_option_translation } from "../models/Property_group_option_translation";
import { Property_group_translation } from "../models/Property_group_translation";
import { Sales_channel } from "../models/Sales_channel";
import { Sales_channel_domain } from "../models/Sales_channel_domain";
import { Sales_channel_language } from "../models/Sales_channel_language";
import { Sales_channel_translation } from "../models/Sales_channel_translation";
import { Sales_channel_type_translation } from "../models/Sales_channel_type_translation";
import { Salutation_translation } from "../models/Salutation_translation";
import { Seo_url } from "../models/Seo_url";
import { Shipping_method_translation } from "../models/Shipping_method_translation";
import { State_machine_state_translation } from "../models/State_machine_state_translation";
import { State_machine_translation } from "../models/State_machine_translation";
import { Swag_language_pack_language } from "../models/Swag_language_pack_language";
import { Tax_provider_translation } from "../models/Tax_provider_translation";
import { Tax_rule_type_translation } from "../models/Tax_rule_type_translation";
import { Theme_translation } from "../models/Theme_translation";
import { Unit_translation } from "../models/Unit_translation";
import { LanguageCount } from "../resolvers/outputs/LanguageCount";

@TypeGraphQL.ObjectType("Language", {})
export class Language {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  parent_id?: Buffer | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  swag_language_pack_language_id?: Buffer | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  locale_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  translation_code_id?: Buffer | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  custom_fields?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  app_action_button_translation?: App_action_button_translation[];

  app_cms_block_translation?: App_cms_block_translation[];

  app_flow_action_translation?: App_flow_action_translation[];

  app_script_condition_translation?: App_script_condition_translation[];

  app_translation?: App_translation[];

  category_translation?: Category_translation[];

  cms_page_translation?: Cms_page_translation[];

  cms_slot_translation?: Cms_slot_translation[];

  country_state_translation?: Country_state_translation[];

  country_translation?: Country_translation[];

  currency_translation?: Currency_translation[];

  customer_group_translation?: Customer_group_translation[];

  delivery_time_translation?: Delivery_time_translation[];

  document_type_translation?: Document_type_translation[];

  import_export_profile_translation?: Import_export_profile_translation[];

  landing_page_translation?: Landing_page_translation[];

  locale_language_locale_idTolocale?: Locale;

  language?: Language | null;

  other_language?: Language[];

  locale_language_translation_code_idTolocale?: Locale | null;

  swag_language_pack_language_language_swag_language_pack_language_idToswag_language_pack_language?: Swag_language_pack_language | null;

  locale_translation?: Locale_translation[];

  mail_header_footer_translation?: Mail_header_footer_translation[];

  mail_template_media?: Mail_template_media[];

  mail_template_translation?: Mail_template_translation[];

  mail_template_type_translation?: Mail_template_type_translation[];

  media_translation?: Media_translation[];

  newsletter_recipient?: Newsletter_recipient[];

  number_range_translation?: Number_range_translation[];

  number_range_type_translation?: Number_range_type_translation[];

  order?: Order[];

  payment_method_translation?: Payment_method_translation[];

  plugin_translation?: Plugin_translation[];

  product_cross_selling_translation?: Product_cross_selling_translation[];

  product_feature_set_translation?: Product_feature_set_translation[];

  product_keyword_dictionary?: Product_keyword_dictionary[];

  product_manufacturer_translation?: Product_manufacturer_translation[];

  product_review?: Product_review[];

  product_search_config?: Product_search_config | null;

  product_search_keyword?: Product_search_keyword[];

  product_sorting_translation?: Product_sorting_translation[];

  product_stream_translation?: Product_stream_translation[];

  product_translation?: Product_translation[];

  promotion_translation?: Promotion_translation[];

  property_group_option_translation?: Property_group_option_translation[];

  property_group_translation?: Property_group_translation[];

  sales_channel?: Sales_channel[];

  sales_channel_domain?: Sales_channel_domain[];

  sales_channel_language?: Sales_channel_language[];

  sales_channel_translation?: Sales_channel_translation[];

  sales_channel_type_translation?: Sales_channel_type_translation[];

  salutation_translation?: Salutation_translation[];

  seo_url?: Seo_url[];

  shipping_method_translation?: Shipping_method_translation[];

  state_machine_state_translation?: State_machine_state_translation[];

  state_machine_translation?: State_machine_translation[];

  swag_language_pack_language_swag_language_pack_language_language_idTolanguage?: Swag_language_pack_language[];

  tax_provider_translation?: Tax_provider_translation[];

  tax_rule_type_translation?: Tax_rule_type_translation[];

  theme_translation?: Theme_translation[];

  unit_translation?: Unit_translation[];

  @TypeGraphQL.Field(_type => LanguageCount, {
    nullable: true
  })
  _count?: LanguageCount | null;
}
