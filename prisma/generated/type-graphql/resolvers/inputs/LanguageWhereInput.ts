import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_action_button_translationListRelationFilter } from "../inputs/App_action_button_translationListRelationFilter";
import { App_cms_block_translationListRelationFilter } from "../inputs/App_cms_block_translationListRelationFilter";
import { App_flow_action_translationListRelationFilter } from "../inputs/App_flow_action_translationListRelationFilter";
import { App_script_condition_translationListRelationFilter } from "../inputs/App_script_condition_translationListRelationFilter";
import { App_translationListRelationFilter } from "../inputs/App_translationListRelationFilter";
import { BytesFilter } from "../inputs/BytesFilter";
import { BytesNullableFilter } from "../inputs/BytesNullableFilter";
import { Category_translationListRelationFilter } from "../inputs/Category_translationListRelationFilter";
import { Cms_page_translationListRelationFilter } from "../inputs/Cms_page_translationListRelationFilter";
import { Cms_slot_translationListRelationFilter } from "../inputs/Cms_slot_translationListRelationFilter";
import { Country_state_translationListRelationFilter } from "../inputs/Country_state_translationListRelationFilter";
import { Country_translationListRelationFilter } from "../inputs/Country_translationListRelationFilter";
import { Currency_translationListRelationFilter } from "../inputs/Currency_translationListRelationFilter";
import { Customer_group_translationListRelationFilter } from "../inputs/Customer_group_translationListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { Delivery_time_translationListRelationFilter } from "../inputs/Delivery_time_translationListRelationFilter";
import { Document_type_translationListRelationFilter } from "../inputs/Document_type_translationListRelationFilter";
import { Import_export_profile_translationListRelationFilter } from "../inputs/Import_export_profile_translationListRelationFilter";
import { Landing_page_translationListRelationFilter } from "../inputs/Landing_page_translationListRelationFilter";
import { LanguageListRelationFilter } from "../inputs/LanguageListRelationFilter";
import { LanguageNullableRelationFilter } from "../inputs/LanguageNullableRelationFilter";
import { LocaleNullableRelationFilter } from "../inputs/LocaleNullableRelationFilter";
import { LocaleRelationFilter } from "../inputs/LocaleRelationFilter";
import { Locale_translationListRelationFilter } from "../inputs/Locale_translationListRelationFilter";
import { Mail_header_footer_translationListRelationFilter } from "../inputs/Mail_header_footer_translationListRelationFilter";
import { Mail_template_mediaListRelationFilter } from "../inputs/Mail_template_mediaListRelationFilter";
import { Mail_template_translationListRelationFilter } from "../inputs/Mail_template_translationListRelationFilter";
import { Mail_template_type_translationListRelationFilter } from "../inputs/Mail_template_type_translationListRelationFilter";
import { Media_translationListRelationFilter } from "../inputs/Media_translationListRelationFilter";
import { Newsletter_recipientListRelationFilter } from "../inputs/Newsletter_recipientListRelationFilter";
import { Number_range_translationListRelationFilter } from "../inputs/Number_range_translationListRelationFilter";
import { Number_range_type_translationListRelationFilter } from "../inputs/Number_range_type_translationListRelationFilter";
import { OrderListRelationFilter } from "../inputs/OrderListRelationFilter";
import { Payment_method_translationListRelationFilter } from "../inputs/Payment_method_translationListRelationFilter";
import { Plugin_translationListRelationFilter } from "../inputs/Plugin_translationListRelationFilter";
import { Product_cross_selling_translationListRelationFilter } from "../inputs/Product_cross_selling_translationListRelationFilter";
import { Product_feature_set_translationListRelationFilter } from "../inputs/Product_feature_set_translationListRelationFilter";
import { Product_keyword_dictionaryListRelationFilter } from "../inputs/Product_keyword_dictionaryListRelationFilter";
import { Product_manufacturer_translationListRelationFilter } from "../inputs/Product_manufacturer_translationListRelationFilter";
import { Product_reviewListRelationFilter } from "../inputs/Product_reviewListRelationFilter";
import { Product_search_configNullableRelationFilter } from "../inputs/Product_search_configNullableRelationFilter";
import { Product_search_keywordListRelationFilter } from "../inputs/Product_search_keywordListRelationFilter";
import { Product_sorting_translationListRelationFilter } from "../inputs/Product_sorting_translationListRelationFilter";
import { Product_stream_translationListRelationFilter } from "../inputs/Product_stream_translationListRelationFilter";
import { Product_translationListRelationFilter } from "../inputs/Product_translationListRelationFilter";
import { Promotion_translationListRelationFilter } from "../inputs/Promotion_translationListRelationFilter";
import { Property_group_option_translationListRelationFilter } from "../inputs/Property_group_option_translationListRelationFilter";
import { Property_group_translationListRelationFilter } from "../inputs/Property_group_translationListRelationFilter";
import { Sales_channelListRelationFilter } from "../inputs/Sales_channelListRelationFilter";
import { Sales_channel_domainListRelationFilter } from "../inputs/Sales_channel_domainListRelationFilter";
import { Sales_channel_languageListRelationFilter } from "../inputs/Sales_channel_languageListRelationFilter";
import { Sales_channel_translationListRelationFilter } from "../inputs/Sales_channel_translationListRelationFilter";
import { Sales_channel_type_translationListRelationFilter } from "../inputs/Sales_channel_type_translationListRelationFilter";
import { Salutation_translationListRelationFilter } from "../inputs/Salutation_translationListRelationFilter";
import { Seo_urlListRelationFilter } from "../inputs/Seo_urlListRelationFilter";
import { Shipping_method_translationListRelationFilter } from "../inputs/Shipping_method_translationListRelationFilter";
import { State_machine_state_translationListRelationFilter } from "../inputs/State_machine_state_translationListRelationFilter";
import { State_machine_translationListRelationFilter } from "../inputs/State_machine_translationListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { Swag_language_pack_languageListRelationFilter } from "../inputs/Swag_language_pack_languageListRelationFilter";
import { Swag_language_pack_languageNullableRelationFilter } from "../inputs/Swag_language_pack_languageNullableRelationFilter";
import { Tax_provider_translationListRelationFilter } from "../inputs/Tax_provider_translationListRelationFilter";
import { Tax_rule_type_translationListRelationFilter } from "../inputs/Tax_rule_type_translationListRelationFilter";
import { Theme_translationListRelationFilter } from "../inputs/Theme_translationListRelationFilter";
import { Unit_translationListRelationFilter } from "../inputs/Unit_translationListRelationFilter";

@TypeGraphQL.InputType("LanguageWhereInput", {})
export class LanguageWhereInput {
  @TypeGraphQL.Field(_type => [LanguageWhereInput], {
    nullable: true
  })
  AND?: LanguageWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LanguageWhereInput], {
    nullable: true
  })
  OR?: LanguageWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LanguageWhereInput], {
    nullable: true
  })
  NOT?: LanguageWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  parent_id?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  swag_language_pack_language_id?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  locale_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  translation_code_id?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  custom_fields?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => App_action_button_translationListRelationFilter, {
    nullable: true
  })
  app_action_button_translation?: App_action_button_translationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => App_cms_block_translationListRelationFilter, {
    nullable: true
  })
  app_cms_block_translation?: App_cms_block_translationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => App_flow_action_translationListRelationFilter, {
    nullable: true
  })
  app_flow_action_translation?: App_flow_action_translationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => App_script_condition_translationListRelationFilter, {
    nullable: true
  })
  app_script_condition_translation?: App_script_condition_translationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => App_translationListRelationFilter, {
    nullable: true
  })
  app_translation?: App_translationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Category_translationListRelationFilter, {
    nullable: true
  })
  category_translation?: Category_translationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Cms_page_translationListRelationFilter, {
    nullable: true
  })
  cms_page_translation?: Cms_page_translationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Cms_slot_translationListRelationFilter, {
    nullable: true
  })
  cms_slot_translation?: Cms_slot_translationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Country_state_translationListRelationFilter, {
    nullable: true
  })
  country_state_translation?: Country_state_translationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Country_translationListRelationFilter, {
    nullable: true
  })
  country_translation?: Country_translationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Currency_translationListRelationFilter, {
    nullable: true
  })
  currency_translation?: Currency_translationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Customer_group_translationListRelationFilter, {
    nullable: true
  })
  customer_group_translation?: Customer_group_translationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Delivery_time_translationListRelationFilter, {
    nullable: true
  })
  delivery_time_translation?: Delivery_time_translationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Document_type_translationListRelationFilter, {
    nullable: true
  })
  document_type_translation?: Document_type_translationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Import_export_profile_translationListRelationFilter, {
    nullable: true
  })
  import_export_profile_translation?: Import_export_profile_translationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Landing_page_translationListRelationFilter, {
    nullable: true
  })
  landing_page_translation?: Landing_page_translationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => LocaleRelationFilter, {
    nullable: true
  })
  locale_language_locale_idTolocale?: LocaleRelationFilter | undefined;

  @TypeGraphQL.Field(_type => LanguageNullableRelationFilter, {
    nullable: true
  })
  language?: LanguageNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => LanguageListRelationFilter, {
    nullable: true
  })
  other_language?: LanguageListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => LocaleNullableRelationFilter, {
    nullable: true
  })
  locale_language_translation_code_idTolocale?: LocaleNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Swag_language_pack_languageNullableRelationFilter, {
    nullable: true
  })
  swag_language_pack_language_language_swag_language_pack_language_idToswag_language_pack_language?: Swag_language_pack_languageNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Locale_translationListRelationFilter, {
    nullable: true
  })
  locale_translation?: Locale_translationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Mail_header_footer_translationListRelationFilter, {
    nullable: true
  })
  mail_header_footer_translation?: Mail_header_footer_translationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Mail_template_mediaListRelationFilter, {
    nullable: true
  })
  mail_template_media?: Mail_template_mediaListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Mail_template_translationListRelationFilter, {
    nullable: true
  })
  mail_template_translation?: Mail_template_translationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Mail_template_type_translationListRelationFilter, {
    nullable: true
  })
  mail_template_type_translation?: Mail_template_type_translationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Media_translationListRelationFilter, {
    nullable: true
  })
  media_translation?: Media_translationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Newsletter_recipientListRelationFilter, {
    nullable: true
  })
  newsletter_recipient?: Newsletter_recipientListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Number_range_translationListRelationFilter, {
    nullable: true
  })
  number_range_translation?: Number_range_translationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Number_range_type_translationListRelationFilter, {
    nullable: true
  })
  number_range_type_translation?: Number_range_type_translationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => OrderListRelationFilter, {
    nullable: true
  })
  order?: OrderListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Payment_method_translationListRelationFilter, {
    nullable: true
  })
  payment_method_translation?: Payment_method_translationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Plugin_translationListRelationFilter, {
    nullable: true
  })
  plugin_translation?: Plugin_translationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Product_cross_selling_translationListRelationFilter, {
    nullable: true
  })
  product_cross_selling_translation?: Product_cross_selling_translationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Product_feature_set_translationListRelationFilter, {
    nullable: true
  })
  product_feature_set_translation?: Product_feature_set_translationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Product_keyword_dictionaryListRelationFilter, {
    nullable: true
  })
  product_keyword_dictionary?: Product_keyword_dictionaryListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Product_manufacturer_translationListRelationFilter, {
    nullable: true
  })
  product_manufacturer_translation?: Product_manufacturer_translationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Product_reviewListRelationFilter, {
    nullable: true
  })
  product_review?: Product_reviewListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Product_search_configNullableRelationFilter, {
    nullable: true
  })
  product_search_config?: Product_search_configNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Product_search_keywordListRelationFilter, {
    nullable: true
  })
  product_search_keyword?: Product_search_keywordListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Product_sorting_translationListRelationFilter, {
    nullable: true
  })
  product_sorting_translation?: Product_sorting_translationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Product_stream_translationListRelationFilter, {
    nullable: true
  })
  product_stream_translation?: Product_stream_translationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Product_translationListRelationFilter, {
    nullable: true
  })
  product_translation?: Product_translationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Promotion_translationListRelationFilter, {
    nullable: true
  })
  promotion_translation?: Promotion_translationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Property_group_option_translationListRelationFilter, {
    nullable: true
  })
  property_group_option_translation?: Property_group_option_translationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Property_group_translationListRelationFilter, {
    nullable: true
  })
  property_group_translation?: Property_group_translationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Sales_channelListRelationFilter, {
    nullable: true
  })
  sales_channel?: Sales_channelListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Sales_channel_domainListRelationFilter, {
    nullable: true
  })
  sales_channel_domain?: Sales_channel_domainListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Sales_channel_languageListRelationFilter, {
    nullable: true
  })
  sales_channel_language?: Sales_channel_languageListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Sales_channel_translationListRelationFilter, {
    nullable: true
  })
  sales_channel_translation?: Sales_channel_translationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Sales_channel_type_translationListRelationFilter, {
    nullable: true
  })
  sales_channel_type_translation?: Sales_channel_type_translationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Salutation_translationListRelationFilter, {
    nullable: true
  })
  salutation_translation?: Salutation_translationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Seo_urlListRelationFilter, {
    nullable: true
  })
  seo_url?: Seo_urlListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Shipping_method_translationListRelationFilter, {
    nullable: true
  })
  shipping_method_translation?: Shipping_method_translationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => State_machine_state_translationListRelationFilter, {
    nullable: true
  })
  state_machine_state_translation?: State_machine_state_translationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => State_machine_translationListRelationFilter, {
    nullable: true
  })
  state_machine_translation?: State_machine_translationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Swag_language_pack_languageListRelationFilter, {
    nullable: true
  })
  swag_language_pack_language_swag_language_pack_language_language_idTolanguage?: Swag_language_pack_languageListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Tax_provider_translationListRelationFilter, {
    nullable: true
  })
  tax_provider_translation?: Tax_provider_translationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Tax_rule_type_translationListRelationFilter, {
    nullable: true
  })
  tax_rule_type_translation?: Tax_rule_type_translationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Theme_translationListRelationFilter, {
    nullable: true
  })
  theme_translation?: Theme_translationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Unit_translationListRelationFilter, {
    nullable: true
  })
  unit_translation?: Unit_translationListRelationFilter | undefined;
}
