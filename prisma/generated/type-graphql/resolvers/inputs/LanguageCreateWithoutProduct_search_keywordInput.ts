import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_action_button_translationCreateNestedManyWithoutLanguageInput } from "../inputs/App_action_button_translationCreateNestedManyWithoutLanguageInput";
import { App_cms_block_translationCreateNestedManyWithoutLanguageInput } from "../inputs/App_cms_block_translationCreateNestedManyWithoutLanguageInput";
import { App_flow_action_translationCreateNestedManyWithoutLanguageInput } from "../inputs/App_flow_action_translationCreateNestedManyWithoutLanguageInput";
import { App_script_condition_translationCreateNestedManyWithoutLanguageInput } from "../inputs/App_script_condition_translationCreateNestedManyWithoutLanguageInput";
import { App_translationCreateNestedManyWithoutLanguageInput } from "../inputs/App_translationCreateNestedManyWithoutLanguageInput";
import { Category_translationCreateNestedManyWithoutLanguageInput } from "../inputs/Category_translationCreateNestedManyWithoutLanguageInput";
import { Cms_page_translationCreateNestedManyWithoutLanguageInput } from "../inputs/Cms_page_translationCreateNestedManyWithoutLanguageInput";
import { Cms_slot_translationCreateNestedManyWithoutLanguageInput } from "../inputs/Cms_slot_translationCreateNestedManyWithoutLanguageInput";
import { Country_state_translationCreateNestedManyWithoutLanguageInput } from "../inputs/Country_state_translationCreateNestedManyWithoutLanguageInput";
import { Country_translationCreateNestedManyWithoutLanguageInput } from "../inputs/Country_translationCreateNestedManyWithoutLanguageInput";
import { Currency_translationCreateNestedManyWithoutLanguageInput } from "../inputs/Currency_translationCreateNestedManyWithoutLanguageInput";
import { Customer_group_translationCreateNestedManyWithoutLanguageInput } from "../inputs/Customer_group_translationCreateNestedManyWithoutLanguageInput";
import { Delivery_time_translationCreateNestedManyWithoutLanguageInput } from "../inputs/Delivery_time_translationCreateNestedManyWithoutLanguageInput";
import { Document_type_translationCreateNestedManyWithoutLanguageInput } from "../inputs/Document_type_translationCreateNestedManyWithoutLanguageInput";
import { Import_export_profile_translationCreateNestedManyWithoutLanguageInput } from "../inputs/Import_export_profile_translationCreateNestedManyWithoutLanguageInput";
import { Landing_page_translationCreateNestedManyWithoutLanguageInput } from "../inputs/Landing_page_translationCreateNestedManyWithoutLanguageInput";
import { LanguageCreateNestedManyWithoutLanguageInput } from "../inputs/LanguageCreateNestedManyWithoutLanguageInput";
import { LanguageCreateNestedOneWithoutOther_languageInput } from "../inputs/LanguageCreateNestedOneWithoutOther_languageInput";
import { LocaleCreateNestedOneWithoutLanguage_language_locale_idTolocaleInput } from "../inputs/LocaleCreateNestedOneWithoutLanguage_language_locale_idTolocaleInput";
import { LocaleCreateNestedOneWithoutLanguage_language_translation_code_idTolocaleInput } from "../inputs/LocaleCreateNestedOneWithoutLanguage_language_translation_code_idTolocaleInput";
import { Locale_translationCreateNestedManyWithoutLanguageInput } from "../inputs/Locale_translationCreateNestedManyWithoutLanguageInput";
import { Mail_header_footer_translationCreateNestedManyWithoutLanguageInput } from "../inputs/Mail_header_footer_translationCreateNestedManyWithoutLanguageInput";
import { Mail_template_mediaCreateNestedManyWithoutLanguageInput } from "../inputs/Mail_template_mediaCreateNestedManyWithoutLanguageInput";
import { Mail_template_translationCreateNestedManyWithoutLanguageInput } from "../inputs/Mail_template_translationCreateNestedManyWithoutLanguageInput";
import { Mail_template_type_translationCreateNestedManyWithoutLanguageInput } from "../inputs/Mail_template_type_translationCreateNestedManyWithoutLanguageInput";
import { Media_translationCreateNestedManyWithoutLanguageInput } from "../inputs/Media_translationCreateNestedManyWithoutLanguageInput";
import { Newsletter_recipientCreateNestedManyWithoutLanguageInput } from "../inputs/Newsletter_recipientCreateNestedManyWithoutLanguageInput";
import { Number_range_translationCreateNestedManyWithoutLanguageInput } from "../inputs/Number_range_translationCreateNestedManyWithoutLanguageInput";
import { Number_range_type_translationCreateNestedManyWithoutLanguageInput } from "../inputs/Number_range_type_translationCreateNestedManyWithoutLanguageInput";
import { OrderCreateNestedManyWithoutLanguageInput } from "../inputs/OrderCreateNestedManyWithoutLanguageInput";
import { Payment_method_translationCreateNestedManyWithoutLanguageInput } from "../inputs/Payment_method_translationCreateNestedManyWithoutLanguageInput";
import { Plugin_translationCreateNestedManyWithoutLanguageInput } from "../inputs/Plugin_translationCreateNestedManyWithoutLanguageInput";
import { Product_cross_selling_translationCreateNestedManyWithoutLanguageInput } from "../inputs/Product_cross_selling_translationCreateNestedManyWithoutLanguageInput";
import { Product_feature_set_translationCreateNestedManyWithoutLanguageInput } from "../inputs/Product_feature_set_translationCreateNestedManyWithoutLanguageInput";
import { Product_keyword_dictionaryCreateNestedManyWithoutLanguageInput } from "../inputs/Product_keyword_dictionaryCreateNestedManyWithoutLanguageInput";
import { Product_manufacturer_translationCreateNestedManyWithoutLanguageInput } from "../inputs/Product_manufacturer_translationCreateNestedManyWithoutLanguageInput";
import { Product_reviewCreateNestedManyWithoutLanguageInput } from "../inputs/Product_reviewCreateNestedManyWithoutLanguageInput";
import { Product_search_configCreateNestedOneWithoutLanguageInput } from "../inputs/Product_search_configCreateNestedOneWithoutLanguageInput";
import { Product_sorting_translationCreateNestedManyWithoutLanguageInput } from "../inputs/Product_sorting_translationCreateNestedManyWithoutLanguageInput";
import { Product_stream_translationCreateNestedManyWithoutLanguageInput } from "../inputs/Product_stream_translationCreateNestedManyWithoutLanguageInput";
import { Product_translationCreateNestedManyWithoutLanguageInput } from "../inputs/Product_translationCreateNestedManyWithoutLanguageInput";
import { Promotion_translationCreateNestedManyWithoutLanguageInput } from "../inputs/Promotion_translationCreateNestedManyWithoutLanguageInput";
import { Property_group_option_translationCreateNestedManyWithoutLanguageInput } from "../inputs/Property_group_option_translationCreateNestedManyWithoutLanguageInput";
import { Property_group_translationCreateNestedManyWithoutLanguageInput } from "../inputs/Property_group_translationCreateNestedManyWithoutLanguageInput";
import { Sales_channelCreateNestedManyWithoutLanguageInput } from "../inputs/Sales_channelCreateNestedManyWithoutLanguageInput";
import { Sales_channel_domainCreateNestedManyWithoutLanguageInput } from "../inputs/Sales_channel_domainCreateNestedManyWithoutLanguageInput";
import { Sales_channel_languageCreateNestedManyWithoutLanguageInput } from "../inputs/Sales_channel_languageCreateNestedManyWithoutLanguageInput";
import { Sales_channel_translationCreateNestedManyWithoutLanguageInput } from "../inputs/Sales_channel_translationCreateNestedManyWithoutLanguageInput";
import { Sales_channel_type_translationCreateNestedManyWithoutLanguageInput } from "../inputs/Sales_channel_type_translationCreateNestedManyWithoutLanguageInput";
import { Salutation_translationCreateNestedManyWithoutLanguageInput } from "../inputs/Salutation_translationCreateNestedManyWithoutLanguageInput";
import { Seo_urlCreateNestedManyWithoutLanguageInput } from "../inputs/Seo_urlCreateNestedManyWithoutLanguageInput";
import { Shipping_method_translationCreateNestedManyWithoutLanguageInput } from "../inputs/Shipping_method_translationCreateNestedManyWithoutLanguageInput";
import { State_machine_state_translationCreateNestedManyWithoutLanguageInput } from "../inputs/State_machine_state_translationCreateNestedManyWithoutLanguageInput";
import { State_machine_translationCreateNestedManyWithoutLanguageInput } from "../inputs/State_machine_translationCreateNestedManyWithoutLanguageInput";
import { Swag_language_pack_languageCreateNestedManyWithoutLanguage_swag_language_pack_language_language_idTolanguageInput } from "../inputs/Swag_language_pack_languageCreateNestedManyWithoutLanguage_swag_language_pack_language_language_idTolanguageInput";
import { Swag_language_pack_languageCreateNestedOneWithoutLanguage_language_swag_language_pack_language_idToswag_language_pack_languageInput } from "../inputs/Swag_language_pack_languageCreateNestedOneWithoutLanguage_language_swag_language_pack_language_idToswag_language_pack_languageInput";
import { Tax_provider_translationCreateNestedManyWithoutLanguageInput } from "../inputs/Tax_provider_translationCreateNestedManyWithoutLanguageInput";
import { Tax_rule_type_translationCreateNestedManyWithoutLanguageInput } from "../inputs/Tax_rule_type_translationCreateNestedManyWithoutLanguageInput";
import { Theme_translationCreateNestedManyWithoutLanguageInput } from "../inputs/Theme_translationCreateNestedManyWithoutLanguageInput";
import { Unit_translationCreateNestedManyWithoutLanguageInput } from "../inputs/Unit_translationCreateNestedManyWithoutLanguageInput";

@TypeGraphQL.InputType("LanguageCreateWithoutProduct_search_keywordInput", {})
export class LanguageCreateWithoutProduct_search_keywordInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  custom_fields?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => App_action_button_translationCreateNestedManyWithoutLanguageInput, {
    nullable: true
  })
  app_action_button_translation?: App_action_button_translationCreateNestedManyWithoutLanguageInput | undefined;

  @TypeGraphQL.Field(_type => App_cms_block_translationCreateNestedManyWithoutLanguageInput, {
    nullable: true
  })
  app_cms_block_translation?: App_cms_block_translationCreateNestedManyWithoutLanguageInput | undefined;

  @TypeGraphQL.Field(_type => App_flow_action_translationCreateNestedManyWithoutLanguageInput, {
    nullable: true
  })
  app_flow_action_translation?: App_flow_action_translationCreateNestedManyWithoutLanguageInput | undefined;

  @TypeGraphQL.Field(_type => App_script_condition_translationCreateNestedManyWithoutLanguageInput, {
    nullable: true
  })
  app_script_condition_translation?: App_script_condition_translationCreateNestedManyWithoutLanguageInput | undefined;

  @TypeGraphQL.Field(_type => App_translationCreateNestedManyWithoutLanguageInput, {
    nullable: true
  })
  app_translation?: App_translationCreateNestedManyWithoutLanguageInput | undefined;

  @TypeGraphQL.Field(_type => Category_translationCreateNestedManyWithoutLanguageInput, {
    nullable: true
  })
  category_translation?: Category_translationCreateNestedManyWithoutLanguageInput | undefined;

  @TypeGraphQL.Field(_type => Cms_page_translationCreateNestedManyWithoutLanguageInput, {
    nullable: true
  })
  cms_page_translation?: Cms_page_translationCreateNestedManyWithoutLanguageInput | undefined;

  @TypeGraphQL.Field(_type => Cms_slot_translationCreateNestedManyWithoutLanguageInput, {
    nullable: true
  })
  cms_slot_translation?: Cms_slot_translationCreateNestedManyWithoutLanguageInput | undefined;

  @TypeGraphQL.Field(_type => Country_state_translationCreateNestedManyWithoutLanguageInput, {
    nullable: true
  })
  country_state_translation?: Country_state_translationCreateNestedManyWithoutLanguageInput | undefined;

  @TypeGraphQL.Field(_type => Country_translationCreateNestedManyWithoutLanguageInput, {
    nullable: true
  })
  country_translation?: Country_translationCreateNestedManyWithoutLanguageInput | undefined;

  @TypeGraphQL.Field(_type => Currency_translationCreateNestedManyWithoutLanguageInput, {
    nullable: true
  })
  currency_translation?: Currency_translationCreateNestedManyWithoutLanguageInput | undefined;

  @TypeGraphQL.Field(_type => Customer_group_translationCreateNestedManyWithoutLanguageInput, {
    nullable: true
  })
  customer_group_translation?: Customer_group_translationCreateNestedManyWithoutLanguageInput | undefined;

  @TypeGraphQL.Field(_type => Delivery_time_translationCreateNestedManyWithoutLanguageInput, {
    nullable: true
  })
  delivery_time_translation?: Delivery_time_translationCreateNestedManyWithoutLanguageInput | undefined;

  @TypeGraphQL.Field(_type => Document_type_translationCreateNestedManyWithoutLanguageInput, {
    nullable: true
  })
  document_type_translation?: Document_type_translationCreateNestedManyWithoutLanguageInput | undefined;

  @TypeGraphQL.Field(_type => Import_export_profile_translationCreateNestedManyWithoutLanguageInput, {
    nullable: true
  })
  import_export_profile_translation?: Import_export_profile_translationCreateNestedManyWithoutLanguageInput | undefined;

  @TypeGraphQL.Field(_type => Landing_page_translationCreateNestedManyWithoutLanguageInput, {
    nullable: true
  })
  landing_page_translation?: Landing_page_translationCreateNestedManyWithoutLanguageInput | undefined;

  @TypeGraphQL.Field(_type => LocaleCreateNestedOneWithoutLanguage_language_locale_idTolocaleInput, {
    nullable: false
  })
  locale_language_locale_idTolocale!: LocaleCreateNestedOneWithoutLanguage_language_locale_idTolocaleInput;

  @TypeGraphQL.Field(_type => LanguageCreateNestedOneWithoutOther_languageInput, {
    nullable: true
  })
  language?: LanguageCreateNestedOneWithoutOther_languageInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateNestedManyWithoutLanguageInput, {
    nullable: true
  })
  other_language?: LanguageCreateNestedManyWithoutLanguageInput | undefined;

  @TypeGraphQL.Field(_type => LocaleCreateNestedOneWithoutLanguage_language_translation_code_idTolocaleInput, {
    nullable: true
  })
  locale_language_translation_code_idTolocale?: LocaleCreateNestedOneWithoutLanguage_language_translation_code_idTolocaleInput | undefined;

  @TypeGraphQL.Field(_type => Swag_language_pack_languageCreateNestedOneWithoutLanguage_language_swag_language_pack_language_idToswag_language_pack_languageInput, {
    nullable: true
  })
  swag_language_pack_language_language_swag_language_pack_language_idToswag_language_pack_language?: Swag_language_pack_languageCreateNestedOneWithoutLanguage_language_swag_language_pack_language_idToswag_language_pack_languageInput | undefined;

  @TypeGraphQL.Field(_type => Locale_translationCreateNestedManyWithoutLanguageInput, {
    nullable: true
  })
  locale_translation?: Locale_translationCreateNestedManyWithoutLanguageInput | undefined;

  @TypeGraphQL.Field(_type => Mail_header_footer_translationCreateNestedManyWithoutLanguageInput, {
    nullable: true
  })
  mail_header_footer_translation?: Mail_header_footer_translationCreateNestedManyWithoutLanguageInput | undefined;

  @TypeGraphQL.Field(_type => Mail_template_mediaCreateNestedManyWithoutLanguageInput, {
    nullable: true
  })
  mail_template_media?: Mail_template_mediaCreateNestedManyWithoutLanguageInput | undefined;

  @TypeGraphQL.Field(_type => Mail_template_translationCreateNestedManyWithoutLanguageInput, {
    nullable: true
  })
  mail_template_translation?: Mail_template_translationCreateNestedManyWithoutLanguageInput | undefined;

  @TypeGraphQL.Field(_type => Mail_template_type_translationCreateNestedManyWithoutLanguageInput, {
    nullable: true
  })
  mail_template_type_translation?: Mail_template_type_translationCreateNestedManyWithoutLanguageInput | undefined;

  @TypeGraphQL.Field(_type => Media_translationCreateNestedManyWithoutLanguageInput, {
    nullable: true
  })
  media_translation?: Media_translationCreateNestedManyWithoutLanguageInput | undefined;

  @TypeGraphQL.Field(_type => Newsletter_recipientCreateNestedManyWithoutLanguageInput, {
    nullable: true
  })
  newsletter_recipient?: Newsletter_recipientCreateNestedManyWithoutLanguageInput | undefined;

  @TypeGraphQL.Field(_type => Number_range_translationCreateNestedManyWithoutLanguageInput, {
    nullable: true
  })
  number_range_translation?: Number_range_translationCreateNestedManyWithoutLanguageInput | undefined;

  @TypeGraphQL.Field(_type => Number_range_type_translationCreateNestedManyWithoutLanguageInput, {
    nullable: true
  })
  number_range_type_translation?: Number_range_type_translationCreateNestedManyWithoutLanguageInput | undefined;

  @TypeGraphQL.Field(_type => OrderCreateNestedManyWithoutLanguageInput, {
    nullable: true
  })
  order?: OrderCreateNestedManyWithoutLanguageInput | undefined;

  @TypeGraphQL.Field(_type => Payment_method_translationCreateNestedManyWithoutLanguageInput, {
    nullable: true
  })
  payment_method_translation?: Payment_method_translationCreateNestedManyWithoutLanguageInput | undefined;

  @TypeGraphQL.Field(_type => Plugin_translationCreateNestedManyWithoutLanguageInput, {
    nullable: true
  })
  plugin_translation?: Plugin_translationCreateNestedManyWithoutLanguageInput | undefined;

  @TypeGraphQL.Field(_type => Product_cross_selling_translationCreateNestedManyWithoutLanguageInput, {
    nullable: true
  })
  product_cross_selling_translation?: Product_cross_selling_translationCreateNestedManyWithoutLanguageInput | undefined;

  @TypeGraphQL.Field(_type => Product_feature_set_translationCreateNestedManyWithoutLanguageInput, {
    nullable: true
  })
  product_feature_set_translation?: Product_feature_set_translationCreateNestedManyWithoutLanguageInput | undefined;

  @TypeGraphQL.Field(_type => Product_keyword_dictionaryCreateNestedManyWithoutLanguageInput, {
    nullable: true
  })
  product_keyword_dictionary?: Product_keyword_dictionaryCreateNestedManyWithoutLanguageInput | undefined;

  @TypeGraphQL.Field(_type => Product_manufacturer_translationCreateNestedManyWithoutLanguageInput, {
    nullable: true
  })
  product_manufacturer_translation?: Product_manufacturer_translationCreateNestedManyWithoutLanguageInput | undefined;

  @TypeGraphQL.Field(_type => Product_reviewCreateNestedManyWithoutLanguageInput, {
    nullable: true
  })
  product_review?: Product_reviewCreateNestedManyWithoutLanguageInput | undefined;

  @TypeGraphQL.Field(_type => Product_search_configCreateNestedOneWithoutLanguageInput, {
    nullable: true
  })
  product_search_config?: Product_search_configCreateNestedOneWithoutLanguageInput | undefined;

  @TypeGraphQL.Field(_type => Product_sorting_translationCreateNestedManyWithoutLanguageInput, {
    nullable: true
  })
  product_sorting_translation?: Product_sorting_translationCreateNestedManyWithoutLanguageInput | undefined;

  @TypeGraphQL.Field(_type => Product_stream_translationCreateNestedManyWithoutLanguageInput, {
    nullable: true
  })
  product_stream_translation?: Product_stream_translationCreateNestedManyWithoutLanguageInput | undefined;

  @TypeGraphQL.Field(_type => Product_translationCreateNestedManyWithoutLanguageInput, {
    nullable: true
  })
  product_translation?: Product_translationCreateNestedManyWithoutLanguageInput | undefined;

  @TypeGraphQL.Field(_type => Promotion_translationCreateNestedManyWithoutLanguageInput, {
    nullable: true
  })
  promotion_translation?: Promotion_translationCreateNestedManyWithoutLanguageInput | undefined;

  @TypeGraphQL.Field(_type => Property_group_option_translationCreateNestedManyWithoutLanguageInput, {
    nullable: true
  })
  property_group_option_translation?: Property_group_option_translationCreateNestedManyWithoutLanguageInput | undefined;

  @TypeGraphQL.Field(_type => Property_group_translationCreateNestedManyWithoutLanguageInput, {
    nullable: true
  })
  property_group_translation?: Property_group_translationCreateNestedManyWithoutLanguageInput | undefined;

  @TypeGraphQL.Field(_type => Sales_channelCreateNestedManyWithoutLanguageInput, {
    nullable: true
  })
  sales_channel?: Sales_channelCreateNestedManyWithoutLanguageInput | undefined;

  @TypeGraphQL.Field(_type => Sales_channel_domainCreateNestedManyWithoutLanguageInput, {
    nullable: true
  })
  sales_channel_domain?: Sales_channel_domainCreateNestedManyWithoutLanguageInput | undefined;

  @TypeGraphQL.Field(_type => Sales_channel_languageCreateNestedManyWithoutLanguageInput, {
    nullable: true
  })
  sales_channel_language?: Sales_channel_languageCreateNestedManyWithoutLanguageInput | undefined;

  @TypeGraphQL.Field(_type => Sales_channel_translationCreateNestedManyWithoutLanguageInput, {
    nullable: true
  })
  sales_channel_translation?: Sales_channel_translationCreateNestedManyWithoutLanguageInput | undefined;

  @TypeGraphQL.Field(_type => Sales_channel_type_translationCreateNestedManyWithoutLanguageInput, {
    nullable: true
  })
  sales_channel_type_translation?: Sales_channel_type_translationCreateNestedManyWithoutLanguageInput | undefined;

  @TypeGraphQL.Field(_type => Salutation_translationCreateNestedManyWithoutLanguageInput, {
    nullable: true
  })
  salutation_translation?: Salutation_translationCreateNestedManyWithoutLanguageInput | undefined;

  @TypeGraphQL.Field(_type => Seo_urlCreateNestedManyWithoutLanguageInput, {
    nullable: true
  })
  seo_url?: Seo_urlCreateNestedManyWithoutLanguageInput | undefined;

  @TypeGraphQL.Field(_type => Shipping_method_translationCreateNestedManyWithoutLanguageInput, {
    nullable: true
  })
  shipping_method_translation?: Shipping_method_translationCreateNestedManyWithoutLanguageInput | undefined;

  @TypeGraphQL.Field(_type => State_machine_state_translationCreateNestedManyWithoutLanguageInput, {
    nullable: true
  })
  state_machine_state_translation?: State_machine_state_translationCreateNestedManyWithoutLanguageInput | undefined;

  @TypeGraphQL.Field(_type => State_machine_translationCreateNestedManyWithoutLanguageInput, {
    nullable: true
  })
  state_machine_translation?: State_machine_translationCreateNestedManyWithoutLanguageInput | undefined;

  @TypeGraphQL.Field(_type => Swag_language_pack_languageCreateNestedManyWithoutLanguage_swag_language_pack_language_language_idTolanguageInput, {
    nullable: true
  })
  swag_language_pack_language_swag_language_pack_language_language_idTolanguage?: Swag_language_pack_languageCreateNestedManyWithoutLanguage_swag_language_pack_language_language_idTolanguageInput | undefined;

  @TypeGraphQL.Field(_type => Tax_provider_translationCreateNestedManyWithoutLanguageInput, {
    nullable: true
  })
  tax_provider_translation?: Tax_provider_translationCreateNestedManyWithoutLanguageInput | undefined;

  @TypeGraphQL.Field(_type => Tax_rule_type_translationCreateNestedManyWithoutLanguageInput, {
    nullable: true
  })
  tax_rule_type_translation?: Tax_rule_type_translationCreateNestedManyWithoutLanguageInput | undefined;

  @TypeGraphQL.Field(_type => Theme_translationCreateNestedManyWithoutLanguageInput, {
    nullable: true
  })
  theme_translation?: Theme_translationCreateNestedManyWithoutLanguageInput | undefined;

  @TypeGraphQL.Field(_type => Unit_translationCreateNestedManyWithoutLanguageInput, {
    nullable: true
  })
  unit_translation?: Unit_translationCreateNestedManyWithoutLanguageInput | undefined;
}
