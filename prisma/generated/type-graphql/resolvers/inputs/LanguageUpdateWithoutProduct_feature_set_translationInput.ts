import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_action_button_translationUpdateManyWithoutLanguageNestedInput } from "../inputs/App_action_button_translationUpdateManyWithoutLanguageNestedInput";
import { App_cms_block_translationUpdateManyWithoutLanguageNestedInput } from "../inputs/App_cms_block_translationUpdateManyWithoutLanguageNestedInput";
import { App_flow_action_translationUpdateManyWithoutLanguageNestedInput } from "../inputs/App_flow_action_translationUpdateManyWithoutLanguageNestedInput";
import { App_script_condition_translationUpdateManyWithoutLanguageNestedInput } from "../inputs/App_script_condition_translationUpdateManyWithoutLanguageNestedInput";
import { App_translationUpdateManyWithoutLanguageNestedInput } from "../inputs/App_translationUpdateManyWithoutLanguageNestedInput";
import { BytesFieldUpdateOperationsInput } from "../inputs/BytesFieldUpdateOperationsInput";
import { Category_translationUpdateManyWithoutLanguageNestedInput } from "../inputs/Category_translationUpdateManyWithoutLanguageNestedInput";
import { Cms_page_translationUpdateManyWithoutLanguageNestedInput } from "../inputs/Cms_page_translationUpdateManyWithoutLanguageNestedInput";
import { Cms_slot_translationUpdateManyWithoutLanguageNestedInput } from "../inputs/Cms_slot_translationUpdateManyWithoutLanguageNestedInput";
import { Country_state_translationUpdateManyWithoutLanguageNestedInput } from "../inputs/Country_state_translationUpdateManyWithoutLanguageNestedInput";
import { Country_translationUpdateManyWithoutLanguageNestedInput } from "../inputs/Country_translationUpdateManyWithoutLanguageNestedInput";
import { Currency_translationUpdateManyWithoutLanguageNestedInput } from "../inputs/Currency_translationUpdateManyWithoutLanguageNestedInput";
import { Customer_group_translationUpdateManyWithoutLanguageNestedInput } from "../inputs/Customer_group_translationUpdateManyWithoutLanguageNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { Delivery_time_translationUpdateManyWithoutLanguageNestedInput } from "../inputs/Delivery_time_translationUpdateManyWithoutLanguageNestedInput";
import { Document_type_translationUpdateManyWithoutLanguageNestedInput } from "../inputs/Document_type_translationUpdateManyWithoutLanguageNestedInput";
import { Import_export_profile_translationUpdateManyWithoutLanguageNestedInput } from "../inputs/Import_export_profile_translationUpdateManyWithoutLanguageNestedInput";
import { Landing_page_translationUpdateManyWithoutLanguageNestedInput } from "../inputs/Landing_page_translationUpdateManyWithoutLanguageNestedInput";
import { LanguageUpdateManyWithoutLanguageNestedInput } from "../inputs/LanguageUpdateManyWithoutLanguageNestedInput";
import { LanguageUpdateOneWithoutOther_languageNestedInput } from "../inputs/LanguageUpdateOneWithoutOther_languageNestedInput";
import { LocaleUpdateOneRequiredWithoutLanguage_language_locale_idTolocaleNestedInput } from "../inputs/LocaleUpdateOneRequiredWithoutLanguage_language_locale_idTolocaleNestedInput";
import { LocaleUpdateOneWithoutLanguage_language_translation_code_idTolocaleNestedInput } from "../inputs/LocaleUpdateOneWithoutLanguage_language_translation_code_idTolocaleNestedInput";
import { Locale_translationUpdateManyWithoutLanguageNestedInput } from "../inputs/Locale_translationUpdateManyWithoutLanguageNestedInput";
import { Mail_header_footer_translationUpdateManyWithoutLanguageNestedInput } from "../inputs/Mail_header_footer_translationUpdateManyWithoutLanguageNestedInput";
import { Mail_template_mediaUpdateManyWithoutLanguageNestedInput } from "../inputs/Mail_template_mediaUpdateManyWithoutLanguageNestedInput";
import { Mail_template_translationUpdateManyWithoutLanguageNestedInput } from "../inputs/Mail_template_translationUpdateManyWithoutLanguageNestedInput";
import { Mail_template_type_translationUpdateManyWithoutLanguageNestedInput } from "../inputs/Mail_template_type_translationUpdateManyWithoutLanguageNestedInput";
import { Media_translationUpdateManyWithoutLanguageNestedInput } from "../inputs/Media_translationUpdateManyWithoutLanguageNestedInput";
import { Newsletter_recipientUpdateManyWithoutLanguageNestedInput } from "../inputs/Newsletter_recipientUpdateManyWithoutLanguageNestedInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { Number_range_translationUpdateManyWithoutLanguageNestedInput } from "../inputs/Number_range_translationUpdateManyWithoutLanguageNestedInput";
import { Number_range_type_translationUpdateManyWithoutLanguageNestedInput } from "../inputs/Number_range_type_translationUpdateManyWithoutLanguageNestedInput";
import { OrderUpdateManyWithoutLanguageNestedInput } from "../inputs/OrderUpdateManyWithoutLanguageNestedInput";
import { Payment_method_translationUpdateManyWithoutLanguageNestedInput } from "../inputs/Payment_method_translationUpdateManyWithoutLanguageNestedInput";
import { Plugin_translationUpdateManyWithoutLanguageNestedInput } from "../inputs/Plugin_translationUpdateManyWithoutLanguageNestedInput";
import { Product_cross_selling_translationUpdateManyWithoutLanguageNestedInput } from "../inputs/Product_cross_selling_translationUpdateManyWithoutLanguageNestedInput";
import { Product_keyword_dictionaryUpdateManyWithoutLanguageNestedInput } from "../inputs/Product_keyword_dictionaryUpdateManyWithoutLanguageNestedInput";
import { Product_manufacturer_translationUpdateManyWithoutLanguageNestedInput } from "../inputs/Product_manufacturer_translationUpdateManyWithoutLanguageNestedInput";
import { Product_reviewUpdateManyWithoutLanguageNestedInput } from "../inputs/Product_reviewUpdateManyWithoutLanguageNestedInput";
import { Product_search_configUpdateOneWithoutLanguageNestedInput } from "../inputs/Product_search_configUpdateOneWithoutLanguageNestedInput";
import { Product_search_keywordUpdateManyWithoutLanguageNestedInput } from "../inputs/Product_search_keywordUpdateManyWithoutLanguageNestedInput";
import { Product_sorting_translationUpdateManyWithoutLanguageNestedInput } from "../inputs/Product_sorting_translationUpdateManyWithoutLanguageNestedInput";
import { Product_stream_translationUpdateManyWithoutLanguageNestedInput } from "../inputs/Product_stream_translationUpdateManyWithoutLanguageNestedInput";
import { Product_translationUpdateManyWithoutLanguageNestedInput } from "../inputs/Product_translationUpdateManyWithoutLanguageNestedInput";
import { Promotion_translationUpdateManyWithoutLanguageNestedInput } from "../inputs/Promotion_translationUpdateManyWithoutLanguageNestedInput";
import { Property_group_option_translationUpdateManyWithoutLanguageNestedInput } from "../inputs/Property_group_option_translationUpdateManyWithoutLanguageNestedInput";
import { Property_group_translationUpdateManyWithoutLanguageNestedInput } from "../inputs/Property_group_translationUpdateManyWithoutLanguageNestedInput";
import { Sales_channelUpdateManyWithoutLanguageNestedInput } from "../inputs/Sales_channelUpdateManyWithoutLanguageNestedInput";
import { Sales_channel_domainUpdateManyWithoutLanguageNestedInput } from "../inputs/Sales_channel_domainUpdateManyWithoutLanguageNestedInput";
import { Sales_channel_languageUpdateManyWithoutLanguageNestedInput } from "../inputs/Sales_channel_languageUpdateManyWithoutLanguageNestedInput";
import { Sales_channel_translationUpdateManyWithoutLanguageNestedInput } from "../inputs/Sales_channel_translationUpdateManyWithoutLanguageNestedInput";
import { Sales_channel_type_translationUpdateManyWithoutLanguageNestedInput } from "../inputs/Sales_channel_type_translationUpdateManyWithoutLanguageNestedInput";
import { Salutation_translationUpdateManyWithoutLanguageNestedInput } from "../inputs/Salutation_translationUpdateManyWithoutLanguageNestedInput";
import { Seo_urlUpdateManyWithoutLanguageNestedInput } from "../inputs/Seo_urlUpdateManyWithoutLanguageNestedInput";
import { Shipping_method_translationUpdateManyWithoutLanguageNestedInput } from "../inputs/Shipping_method_translationUpdateManyWithoutLanguageNestedInput";
import { State_machine_state_translationUpdateManyWithoutLanguageNestedInput } from "../inputs/State_machine_state_translationUpdateManyWithoutLanguageNestedInput";
import { State_machine_translationUpdateManyWithoutLanguageNestedInput } from "../inputs/State_machine_translationUpdateManyWithoutLanguageNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { Swag_language_pack_languageUpdateManyWithoutLanguage_swag_language_pack_language_language_idTolanguageNestedInput } from "../inputs/Swag_language_pack_languageUpdateManyWithoutLanguage_swag_language_pack_language_language_idTolanguageNestedInput";
import { Swag_language_pack_languageUpdateOneWithoutLanguage_language_swag_language_pack_language_idToswag_language_pack_languageNestedInput } from "../inputs/Swag_language_pack_languageUpdateOneWithoutLanguage_language_swag_language_pack_language_idToswag_language_pack_languageNestedInput";
import { Tax_provider_translationUpdateManyWithoutLanguageNestedInput } from "../inputs/Tax_provider_translationUpdateManyWithoutLanguageNestedInput";
import { Tax_rule_type_translationUpdateManyWithoutLanguageNestedInput } from "../inputs/Tax_rule_type_translationUpdateManyWithoutLanguageNestedInput";
import { Theme_translationUpdateManyWithoutLanguageNestedInput } from "../inputs/Theme_translationUpdateManyWithoutLanguageNestedInput";
import { Unit_translationUpdateManyWithoutLanguageNestedInput } from "../inputs/Unit_translationUpdateManyWithoutLanguageNestedInput";

@TypeGraphQL.InputType("LanguageUpdateWithoutProduct_feature_set_translationInput", {})
export class LanguageUpdateWithoutProduct_feature_set_translationInput {
  @TypeGraphQL.Field(_type => BytesFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: BytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  custom_fields?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  created_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updated_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => App_action_button_translationUpdateManyWithoutLanguageNestedInput, {
    nullable: true
  })
  app_action_button_translation?: App_action_button_translationUpdateManyWithoutLanguageNestedInput | undefined;

  @TypeGraphQL.Field(_type => App_cms_block_translationUpdateManyWithoutLanguageNestedInput, {
    nullable: true
  })
  app_cms_block_translation?: App_cms_block_translationUpdateManyWithoutLanguageNestedInput | undefined;

  @TypeGraphQL.Field(_type => App_flow_action_translationUpdateManyWithoutLanguageNestedInput, {
    nullable: true
  })
  app_flow_action_translation?: App_flow_action_translationUpdateManyWithoutLanguageNestedInput | undefined;

  @TypeGraphQL.Field(_type => App_script_condition_translationUpdateManyWithoutLanguageNestedInput, {
    nullable: true
  })
  app_script_condition_translation?: App_script_condition_translationUpdateManyWithoutLanguageNestedInput | undefined;

  @TypeGraphQL.Field(_type => App_translationUpdateManyWithoutLanguageNestedInput, {
    nullable: true
  })
  app_translation?: App_translationUpdateManyWithoutLanguageNestedInput | undefined;

  @TypeGraphQL.Field(_type => Category_translationUpdateManyWithoutLanguageNestedInput, {
    nullable: true
  })
  category_translation?: Category_translationUpdateManyWithoutLanguageNestedInput | undefined;

  @TypeGraphQL.Field(_type => Cms_page_translationUpdateManyWithoutLanguageNestedInput, {
    nullable: true
  })
  cms_page_translation?: Cms_page_translationUpdateManyWithoutLanguageNestedInput | undefined;

  @TypeGraphQL.Field(_type => Cms_slot_translationUpdateManyWithoutLanguageNestedInput, {
    nullable: true
  })
  cms_slot_translation?: Cms_slot_translationUpdateManyWithoutLanguageNestedInput | undefined;

  @TypeGraphQL.Field(_type => Country_state_translationUpdateManyWithoutLanguageNestedInput, {
    nullable: true
  })
  country_state_translation?: Country_state_translationUpdateManyWithoutLanguageNestedInput | undefined;

  @TypeGraphQL.Field(_type => Country_translationUpdateManyWithoutLanguageNestedInput, {
    nullable: true
  })
  country_translation?: Country_translationUpdateManyWithoutLanguageNestedInput | undefined;

  @TypeGraphQL.Field(_type => Currency_translationUpdateManyWithoutLanguageNestedInput, {
    nullable: true
  })
  currency_translation?: Currency_translationUpdateManyWithoutLanguageNestedInput | undefined;

  @TypeGraphQL.Field(_type => Customer_group_translationUpdateManyWithoutLanguageNestedInput, {
    nullable: true
  })
  customer_group_translation?: Customer_group_translationUpdateManyWithoutLanguageNestedInput | undefined;

  @TypeGraphQL.Field(_type => Delivery_time_translationUpdateManyWithoutLanguageNestedInput, {
    nullable: true
  })
  delivery_time_translation?: Delivery_time_translationUpdateManyWithoutLanguageNestedInput | undefined;

  @TypeGraphQL.Field(_type => Document_type_translationUpdateManyWithoutLanguageNestedInput, {
    nullable: true
  })
  document_type_translation?: Document_type_translationUpdateManyWithoutLanguageNestedInput | undefined;

  @TypeGraphQL.Field(_type => Import_export_profile_translationUpdateManyWithoutLanguageNestedInput, {
    nullable: true
  })
  import_export_profile_translation?: Import_export_profile_translationUpdateManyWithoutLanguageNestedInput | undefined;

  @TypeGraphQL.Field(_type => Landing_page_translationUpdateManyWithoutLanguageNestedInput, {
    nullable: true
  })
  landing_page_translation?: Landing_page_translationUpdateManyWithoutLanguageNestedInput | undefined;

  @TypeGraphQL.Field(_type => LocaleUpdateOneRequiredWithoutLanguage_language_locale_idTolocaleNestedInput, {
    nullable: true
  })
  locale_language_locale_idTolocale?: LocaleUpdateOneRequiredWithoutLanguage_language_locale_idTolocaleNestedInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateOneWithoutOther_languageNestedInput, {
    nullable: true
  })
  language?: LanguageUpdateOneWithoutOther_languageNestedInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateManyWithoutLanguageNestedInput, {
    nullable: true
  })
  other_language?: LanguageUpdateManyWithoutLanguageNestedInput | undefined;

  @TypeGraphQL.Field(_type => LocaleUpdateOneWithoutLanguage_language_translation_code_idTolocaleNestedInput, {
    nullable: true
  })
  locale_language_translation_code_idTolocale?: LocaleUpdateOneWithoutLanguage_language_translation_code_idTolocaleNestedInput | undefined;

  @TypeGraphQL.Field(_type => Swag_language_pack_languageUpdateOneWithoutLanguage_language_swag_language_pack_language_idToswag_language_pack_languageNestedInput, {
    nullable: true
  })
  swag_language_pack_language_language_swag_language_pack_language_idToswag_language_pack_language?: Swag_language_pack_languageUpdateOneWithoutLanguage_language_swag_language_pack_language_idToswag_language_pack_languageNestedInput | undefined;

  @TypeGraphQL.Field(_type => Locale_translationUpdateManyWithoutLanguageNestedInput, {
    nullable: true
  })
  locale_translation?: Locale_translationUpdateManyWithoutLanguageNestedInput | undefined;

  @TypeGraphQL.Field(_type => Mail_header_footer_translationUpdateManyWithoutLanguageNestedInput, {
    nullable: true
  })
  mail_header_footer_translation?: Mail_header_footer_translationUpdateManyWithoutLanguageNestedInput | undefined;

  @TypeGraphQL.Field(_type => Mail_template_mediaUpdateManyWithoutLanguageNestedInput, {
    nullable: true
  })
  mail_template_media?: Mail_template_mediaUpdateManyWithoutLanguageNestedInput | undefined;

  @TypeGraphQL.Field(_type => Mail_template_translationUpdateManyWithoutLanguageNestedInput, {
    nullable: true
  })
  mail_template_translation?: Mail_template_translationUpdateManyWithoutLanguageNestedInput | undefined;

  @TypeGraphQL.Field(_type => Mail_template_type_translationUpdateManyWithoutLanguageNestedInput, {
    nullable: true
  })
  mail_template_type_translation?: Mail_template_type_translationUpdateManyWithoutLanguageNestedInput | undefined;

  @TypeGraphQL.Field(_type => Media_translationUpdateManyWithoutLanguageNestedInput, {
    nullable: true
  })
  media_translation?: Media_translationUpdateManyWithoutLanguageNestedInput | undefined;

  @TypeGraphQL.Field(_type => Newsletter_recipientUpdateManyWithoutLanguageNestedInput, {
    nullable: true
  })
  newsletter_recipient?: Newsletter_recipientUpdateManyWithoutLanguageNestedInput | undefined;

  @TypeGraphQL.Field(_type => Number_range_translationUpdateManyWithoutLanguageNestedInput, {
    nullable: true
  })
  number_range_translation?: Number_range_translationUpdateManyWithoutLanguageNestedInput | undefined;

  @TypeGraphQL.Field(_type => Number_range_type_translationUpdateManyWithoutLanguageNestedInput, {
    nullable: true
  })
  number_range_type_translation?: Number_range_type_translationUpdateManyWithoutLanguageNestedInput | undefined;

  @TypeGraphQL.Field(_type => OrderUpdateManyWithoutLanguageNestedInput, {
    nullable: true
  })
  order?: OrderUpdateManyWithoutLanguageNestedInput | undefined;

  @TypeGraphQL.Field(_type => Payment_method_translationUpdateManyWithoutLanguageNestedInput, {
    nullable: true
  })
  payment_method_translation?: Payment_method_translationUpdateManyWithoutLanguageNestedInput | undefined;

  @TypeGraphQL.Field(_type => Plugin_translationUpdateManyWithoutLanguageNestedInput, {
    nullable: true
  })
  plugin_translation?: Plugin_translationUpdateManyWithoutLanguageNestedInput | undefined;

  @TypeGraphQL.Field(_type => Product_cross_selling_translationUpdateManyWithoutLanguageNestedInput, {
    nullable: true
  })
  product_cross_selling_translation?: Product_cross_selling_translationUpdateManyWithoutLanguageNestedInput | undefined;

  @TypeGraphQL.Field(_type => Product_keyword_dictionaryUpdateManyWithoutLanguageNestedInput, {
    nullable: true
  })
  product_keyword_dictionary?: Product_keyword_dictionaryUpdateManyWithoutLanguageNestedInput | undefined;

  @TypeGraphQL.Field(_type => Product_manufacturer_translationUpdateManyWithoutLanguageNestedInput, {
    nullable: true
  })
  product_manufacturer_translation?: Product_manufacturer_translationUpdateManyWithoutLanguageNestedInput | undefined;

  @TypeGraphQL.Field(_type => Product_reviewUpdateManyWithoutLanguageNestedInput, {
    nullable: true
  })
  product_review?: Product_reviewUpdateManyWithoutLanguageNestedInput | undefined;

  @TypeGraphQL.Field(_type => Product_search_configUpdateOneWithoutLanguageNestedInput, {
    nullable: true
  })
  product_search_config?: Product_search_configUpdateOneWithoutLanguageNestedInput | undefined;

  @TypeGraphQL.Field(_type => Product_search_keywordUpdateManyWithoutLanguageNestedInput, {
    nullable: true
  })
  product_search_keyword?: Product_search_keywordUpdateManyWithoutLanguageNestedInput | undefined;

  @TypeGraphQL.Field(_type => Product_sorting_translationUpdateManyWithoutLanguageNestedInput, {
    nullable: true
  })
  product_sorting_translation?: Product_sorting_translationUpdateManyWithoutLanguageNestedInput | undefined;

  @TypeGraphQL.Field(_type => Product_stream_translationUpdateManyWithoutLanguageNestedInput, {
    nullable: true
  })
  product_stream_translation?: Product_stream_translationUpdateManyWithoutLanguageNestedInput | undefined;

  @TypeGraphQL.Field(_type => Product_translationUpdateManyWithoutLanguageNestedInput, {
    nullable: true
  })
  product_translation?: Product_translationUpdateManyWithoutLanguageNestedInput | undefined;

  @TypeGraphQL.Field(_type => Promotion_translationUpdateManyWithoutLanguageNestedInput, {
    nullable: true
  })
  promotion_translation?: Promotion_translationUpdateManyWithoutLanguageNestedInput | undefined;

  @TypeGraphQL.Field(_type => Property_group_option_translationUpdateManyWithoutLanguageNestedInput, {
    nullable: true
  })
  property_group_option_translation?: Property_group_option_translationUpdateManyWithoutLanguageNestedInput | undefined;

  @TypeGraphQL.Field(_type => Property_group_translationUpdateManyWithoutLanguageNestedInput, {
    nullable: true
  })
  property_group_translation?: Property_group_translationUpdateManyWithoutLanguageNestedInput | undefined;

  @TypeGraphQL.Field(_type => Sales_channelUpdateManyWithoutLanguageNestedInput, {
    nullable: true
  })
  sales_channel?: Sales_channelUpdateManyWithoutLanguageNestedInput | undefined;

  @TypeGraphQL.Field(_type => Sales_channel_domainUpdateManyWithoutLanguageNestedInput, {
    nullable: true
  })
  sales_channel_domain?: Sales_channel_domainUpdateManyWithoutLanguageNestedInput | undefined;

  @TypeGraphQL.Field(_type => Sales_channel_languageUpdateManyWithoutLanguageNestedInput, {
    nullable: true
  })
  sales_channel_language?: Sales_channel_languageUpdateManyWithoutLanguageNestedInput | undefined;

  @TypeGraphQL.Field(_type => Sales_channel_translationUpdateManyWithoutLanguageNestedInput, {
    nullable: true
  })
  sales_channel_translation?: Sales_channel_translationUpdateManyWithoutLanguageNestedInput | undefined;

  @TypeGraphQL.Field(_type => Sales_channel_type_translationUpdateManyWithoutLanguageNestedInput, {
    nullable: true
  })
  sales_channel_type_translation?: Sales_channel_type_translationUpdateManyWithoutLanguageNestedInput | undefined;

  @TypeGraphQL.Field(_type => Salutation_translationUpdateManyWithoutLanguageNestedInput, {
    nullable: true
  })
  salutation_translation?: Salutation_translationUpdateManyWithoutLanguageNestedInput | undefined;

  @TypeGraphQL.Field(_type => Seo_urlUpdateManyWithoutLanguageNestedInput, {
    nullable: true
  })
  seo_url?: Seo_urlUpdateManyWithoutLanguageNestedInput | undefined;

  @TypeGraphQL.Field(_type => Shipping_method_translationUpdateManyWithoutLanguageNestedInput, {
    nullable: true
  })
  shipping_method_translation?: Shipping_method_translationUpdateManyWithoutLanguageNestedInput | undefined;

  @TypeGraphQL.Field(_type => State_machine_state_translationUpdateManyWithoutLanguageNestedInput, {
    nullable: true
  })
  state_machine_state_translation?: State_machine_state_translationUpdateManyWithoutLanguageNestedInput | undefined;

  @TypeGraphQL.Field(_type => State_machine_translationUpdateManyWithoutLanguageNestedInput, {
    nullable: true
  })
  state_machine_translation?: State_machine_translationUpdateManyWithoutLanguageNestedInput | undefined;

  @TypeGraphQL.Field(_type => Swag_language_pack_languageUpdateManyWithoutLanguage_swag_language_pack_language_language_idTolanguageNestedInput, {
    nullable: true
  })
  swag_language_pack_language_swag_language_pack_language_language_idTolanguage?: Swag_language_pack_languageUpdateManyWithoutLanguage_swag_language_pack_language_language_idTolanguageNestedInput | undefined;

  @TypeGraphQL.Field(_type => Tax_provider_translationUpdateManyWithoutLanguageNestedInput, {
    nullable: true
  })
  tax_provider_translation?: Tax_provider_translationUpdateManyWithoutLanguageNestedInput | undefined;

  @TypeGraphQL.Field(_type => Tax_rule_type_translationUpdateManyWithoutLanguageNestedInput, {
    nullable: true
  })
  tax_rule_type_translation?: Tax_rule_type_translationUpdateManyWithoutLanguageNestedInput | undefined;

  @TypeGraphQL.Field(_type => Theme_translationUpdateManyWithoutLanguageNestedInput, {
    nullable: true
  })
  theme_translation?: Theme_translationUpdateManyWithoutLanguageNestedInput | undefined;

  @TypeGraphQL.Field(_type => Unit_translationUpdateManyWithoutLanguageNestedInput, {
    nullable: true
  })
  unit_translation?: Unit_translationUpdateManyWithoutLanguageNestedInput | undefined;
}
