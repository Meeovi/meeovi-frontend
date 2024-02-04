import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_action_button_translationOrderByRelationAggregateInput } from "../inputs/App_action_button_translationOrderByRelationAggregateInput";
import { App_cms_block_translationOrderByRelationAggregateInput } from "../inputs/App_cms_block_translationOrderByRelationAggregateInput";
import { App_flow_action_translationOrderByRelationAggregateInput } from "../inputs/App_flow_action_translationOrderByRelationAggregateInput";
import { App_script_condition_translationOrderByRelationAggregateInput } from "../inputs/App_script_condition_translationOrderByRelationAggregateInput";
import { App_translationOrderByRelationAggregateInput } from "../inputs/App_translationOrderByRelationAggregateInput";
import { Category_translationOrderByRelationAggregateInput } from "../inputs/Category_translationOrderByRelationAggregateInput";
import { Cms_page_translationOrderByRelationAggregateInput } from "../inputs/Cms_page_translationOrderByRelationAggregateInput";
import { Cms_slot_translationOrderByRelationAggregateInput } from "../inputs/Cms_slot_translationOrderByRelationAggregateInput";
import { Country_state_translationOrderByRelationAggregateInput } from "../inputs/Country_state_translationOrderByRelationAggregateInput";
import { Country_translationOrderByRelationAggregateInput } from "../inputs/Country_translationOrderByRelationAggregateInput";
import { Currency_translationOrderByRelationAggregateInput } from "../inputs/Currency_translationOrderByRelationAggregateInput";
import { Customer_group_translationOrderByRelationAggregateInput } from "../inputs/Customer_group_translationOrderByRelationAggregateInput";
import { Delivery_time_translationOrderByRelationAggregateInput } from "../inputs/Delivery_time_translationOrderByRelationAggregateInput";
import { Document_type_translationOrderByRelationAggregateInput } from "../inputs/Document_type_translationOrderByRelationAggregateInput";
import { Import_export_profile_translationOrderByRelationAggregateInput } from "../inputs/Import_export_profile_translationOrderByRelationAggregateInput";
import { Landing_page_translationOrderByRelationAggregateInput } from "../inputs/Landing_page_translationOrderByRelationAggregateInput";
import { LanguageOrderByRelationAggregateInput } from "../inputs/LanguageOrderByRelationAggregateInput";
import { LanguageOrderByRelevanceInput } from "../inputs/LanguageOrderByRelevanceInput";
import { LocaleOrderByWithRelationAndSearchRelevanceInput } from "../inputs/LocaleOrderByWithRelationAndSearchRelevanceInput";
import { Locale_translationOrderByRelationAggregateInput } from "../inputs/Locale_translationOrderByRelationAggregateInput";
import { Mail_header_footer_translationOrderByRelationAggregateInput } from "../inputs/Mail_header_footer_translationOrderByRelationAggregateInput";
import { Mail_template_mediaOrderByRelationAggregateInput } from "../inputs/Mail_template_mediaOrderByRelationAggregateInput";
import { Mail_template_translationOrderByRelationAggregateInput } from "../inputs/Mail_template_translationOrderByRelationAggregateInput";
import { Mail_template_type_translationOrderByRelationAggregateInput } from "../inputs/Mail_template_type_translationOrderByRelationAggregateInput";
import { Media_translationOrderByRelationAggregateInput } from "../inputs/Media_translationOrderByRelationAggregateInput";
import { Newsletter_recipientOrderByRelationAggregateInput } from "../inputs/Newsletter_recipientOrderByRelationAggregateInput";
import { Number_range_translationOrderByRelationAggregateInput } from "../inputs/Number_range_translationOrderByRelationAggregateInput";
import { Number_range_type_translationOrderByRelationAggregateInput } from "../inputs/Number_range_type_translationOrderByRelationAggregateInput";
import { OrderOrderByRelationAggregateInput } from "../inputs/OrderOrderByRelationAggregateInput";
import { Payment_method_translationOrderByRelationAggregateInput } from "../inputs/Payment_method_translationOrderByRelationAggregateInput";
import { Plugin_translationOrderByRelationAggregateInput } from "../inputs/Plugin_translationOrderByRelationAggregateInput";
import { Product_cross_selling_translationOrderByRelationAggregateInput } from "../inputs/Product_cross_selling_translationOrderByRelationAggregateInput";
import { Product_feature_set_translationOrderByRelationAggregateInput } from "../inputs/Product_feature_set_translationOrderByRelationAggregateInput";
import { Product_keyword_dictionaryOrderByRelationAggregateInput } from "../inputs/Product_keyword_dictionaryOrderByRelationAggregateInput";
import { Product_manufacturer_translationOrderByRelationAggregateInput } from "../inputs/Product_manufacturer_translationOrderByRelationAggregateInput";
import { Product_reviewOrderByRelationAggregateInput } from "../inputs/Product_reviewOrderByRelationAggregateInput";
import { Product_search_configOrderByWithRelationAndSearchRelevanceInput } from "../inputs/Product_search_configOrderByWithRelationAndSearchRelevanceInput";
import { Product_search_keywordOrderByRelationAggregateInput } from "../inputs/Product_search_keywordOrderByRelationAggregateInput";
import { Product_sorting_translationOrderByRelationAggregateInput } from "../inputs/Product_sorting_translationOrderByRelationAggregateInput";
import { Product_stream_translationOrderByRelationAggregateInput } from "../inputs/Product_stream_translationOrderByRelationAggregateInput";
import { Product_translationOrderByRelationAggregateInput } from "../inputs/Product_translationOrderByRelationAggregateInput";
import { Promotion_translationOrderByRelationAggregateInput } from "../inputs/Promotion_translationOrderByRelationAggregateInput";
import { Property_group_option_translationOrderByRelationAggregateInput } from "../inputs/Property_group_option_translationOrderByRelationAggregateInput";
import { Property_group_translationOrderByRelationAggregateInput } from "../inputs/Property_group_translationOrderByRelationAggregateInput";
import { Sales_channelOrderByRelationAggregateInput } from "../inputs/Sales_channelOrderByRelationAggregateInput";
import { Sales_channel_domainOrderByRelationAggregateInput } from "../inputs/Sales_channel_domainOrderByRelationAggregateInput";
import { Sales_channel_languageOrderByRelationAggregateInput } from "../inputs/Sales_channel_languageOrderByRelationAggregateInput";
import { Sales_channel_translationOrderByRelationAggregateInput } from "../inputs/Sales_channel_translationOrderByRelationAggregateInput";
import { Sales_channel_type_translationOrderByRelationAggregateInput } from "../inputs/Sales_channel_type_translationOrderByRelationAggregateInput";
import { Salutation_translationOrderByRelationAggregateInput } from "../inputs/Salutation_translationOrderByRelationAggregateInput";
import { Seo_urlOrderByRelationAggregateInput } from "../inputs/Seo_urlOrderByRelationAggregateInput";
import { Shipping_method_translationOrderByRelationAggregateInput } from "../inputs/Shipping_method_translationOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { State_machine_state_translationOrderByRelationAggregateInput } from "../inputs/State_machine_state_translationOrderByRelationAggregateInput";
import { State_machine_translationOrderByRelationAggregateInput } from "../inputs/State_machine_translationOrderByRelationAggregateInput";
import { Swag_language_pack_languageOrderByRelationAggregateInput } from "../inputs/Swag_language_pack_languageOrderByRelationAggregateInput";
import { Swag_language_pack_languageOrderByWithRelationAndSearchRelevanceInput } from "../inputs/Swag_language_pack_languageOrderByWithRelationAndSearchRelevanceInput";
import { Tax_provider_translationOrderByRelationAggregateInput } from "../inputs/Tax_provider_translationOrderByRelationAggregateInput";
import { Tax_rule_type_translationOrderByRelationAggregateInput } from "../inputs/Tax_rule_type_translationOrderByRelationAggregateInput";
import { Theme_translationOrderByRelationAggregateInput } from "../inputs/Theme_translationOrderByRelationAggregateInput";
import { Unit_translationOrderByRelationAggregateInput } from "../inputs/Unit_translationOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("LanguageOrderByWithRelationAndSearchRelevanceInput", {})
export class LanguageOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  parent_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  swag_language_pack_language_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  locale_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  translation_code_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  custom_fields?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => App_action_button_translationOrderByRelationAggregateInput, {
    nullable: true
  })
  app_action_button_translation?: App_action_button_translationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => App_cms_block_translationOrderByRelationAggregateInput, {
    nullable: true
  })
  app_cms_block_translation?: App_cms_block_translationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => App_flow_action_translationOrderByRelationAggregateInput, {
    nullable: true
  })
  app_flow_action_translation?: App_flow_action_translationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => App_script_condition_translationOrderByRelationAggregateInput, {
    nullable: true
  })
  app_script_condition_translation?: App_script_condition_translationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => App_translationOrderByRelationAggregateInput, {
    nullable: true
  })
  app_translation?: App_translationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Category_translationOrderByRelationAggregateInput, {
    nullable: true
  })
  category_translation?: Category_translationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Cms_page_translationOrderByRelationAggregateInput, {
    nullable: true
  })
  cms_page_translation?: Cms_page_translationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Cms_slot_translationOrderByRelationAggregateInput, {
    nullable: true
  })
  cms_slot_translation?: Cms_slot_translationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Country_state_translationOrderByRelationAggregateInput, {
    nullable: true
  })
  country_state_translation?: Country_state_translationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Country_translationOrderByRelationAggregateInput, {
    nullable: true
  })
  country_translation?: Country_translationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Currency_translationOrderByRelationAggregateInput, {
    nullable: true
  })
  currency_translation?: Currency_translationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Customer_group_translationOrderByRelationAggregateInput, {
    nullable: true
  })
  customer_group_translation?: Customer_group_translationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Delivery_time_translationOrderByRelationAggregateInput, {
    nullable: true
  })
  delivery_time_translation?: Delivery_time_translationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Document_type_translationOrderByRelationAggregateInput, {
    nullable: true
  })
  document_type_translation?: Document_type_translationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Import_export_profile_translationOrderByRelationAggregateInput, {
    nullable: true
  })
  import_export_profile_translation?: Import_export_profile_translationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Landing_page_translationOrderByRelationAggregateInput, {
    nullable: true
  })
  landing_page_translation?: Landing_page_translationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LocaleOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  locale_language_locale_idTolocale?: LocaleOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => LanguageOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  language?: LanguageOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => LanguageOrderByRelationAggregateInput, {
    nullable: true
  })
  other_language?: LanguageOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LocaleOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  locale_language_translation_code_idTolocale?: LocaleOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Swag_language_pack_languageOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  swag_language_pack_language_language_swag_language_pack_language_idToswag_language_pack_language?: Swag_language_pack_languageOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Locale_translationOrderByRelationAggregateInput, {
    nullable: true
  })
  locale_translation?: Locale_translationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Mail_header_footer_translationOrderByRelationAggregateInput, {
    nullable: true
  })
  mail_header_footer_translation?: Mail_header_footer_translationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Mail_template_mediaOrderByRelationAggregateInput, {
    nullable: true
  })
  mail_template_media?: Mail_template_mediaOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Mail_template_translationOrderByRelationAggregateInput, {
    nullable: true
  })
  mail_template_translation?: Mail_template_translationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Mail_template_type_translationOrderByRelationAggregateInput, {
    nullable: true
  })
  mail_template_type_translation?: Mail_template_type_translationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Media_translationOrderByRelationAggregateInput, {
    nullable: true
  })
  media_translation?: Media_translationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Newsletter_recipientOrderByRelationAggregateInput, {
    nullable: true
  })
  newsletter_recipient?: Newsletter_recipientOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Number_range_translationOrderByRelationAggregateInput, {
    nullable: true
  })
  number_range_translation?: Number_range_translationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Number_range_type_translationOrderByRelationAggregateInput, {
    nullable: true
  })
  number_range_type_translation?: Number_range_type_translationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OrderOrderByRelationAggregateInput, {
    nullable: true
  })
  order?: OrderOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Payment_method_translationOrderByRelationAggregateInput, {
    nullable: true
  })
  payment_method_translation?: Payment_method_translationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Plugin_translationOrderByRelationAggregateInput, {
    nullable: true
  })
  plugin_translation?: Plugin_translationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_cross_selling_translationOrderByRelationAggregateInput, {
    nullable: true
  })
  product_cross_selling_translation?: Product_cross_selling_translationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_feature_set_translationOrderByRelationAggregateInput, {
    nullable: true
  })
  product_feature_set_translation?: Product_feature_set_translationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_keyword_dictionaryOrderByRelationAggregateInput, {
    nullable: true
  })
  product_keyword_dictionary?: Product_keyword_dictionaryOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_manufacturer_translationOrderByRelationAggregateInput, {
    nullable: true
  })
  product_manufacturer_translation?: Product_manufacturer_translationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_reviewOrderByRelationAggregateInput, {
    nullable: true
  })
  product_review?: Product_reviewOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_search_configOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  product_search_config?: Product_search_configOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Product_search_keywordOrderByRelationAggregateInput, {
    nullable: true
  })
  product_search_keyword?: Product_search_keywordOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_sorting_translationOrderByRelationAggregateInput, {
    nullable: true
  })
  product_sorting_translation?: Product_sorting_translationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_stream_translationOrderByRelationAggregateInput, {
    nullable: true
  })
  product_stream_translation?: Product_stream_translationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_translationOrderByRelationAggregateInput, {
    nullable: true
  })
  product_translation?: Product_translationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Promotion_translationOrderByRelationAggregateInput, {
    nullable: true
  })
  promotion_translation?: Promotion_translationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Property_group_option_translationOrderByRelationAggregateInput, {
    nullable: true
  })
  property_group_option_translation?: Property_group_option_translationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Property_group_translationOrderByRelationAggregateInput, {
    nullable: true
  })
  property_group_translation?: Property_group_translationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Sales_channelOrderByRelationAggregateInput, {
    nullable: true
  })
  sales_channel?: Sales_channelOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Sales_channel_domainOrderByRelationAggregateInput, {
    nullable: true
  })
  sales_channel_domain?: Sales_channel_domainOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Sales_channel_languageOrderByRelationAggregateInput, {
    nullable: true
  })
  sales_channel_language?: Sales_channel_languageOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Sales_channel_translationOrderByRelationAggregateInput, {
    nullable: true
  })
  sales_channel_translation?: Sales_channel_translationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Sales_channel_type_translationOrderByRelationAggregateInput, {
    nullable: true
  })
  sales_channel_type_translation?: Sales_channel_type_translationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Salutation_translationOrderByRelationAggregateInput, {
    nullable: true
  })
  salutation_translation?: Salutation_translationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Seo_urlOrderByRelationAggregateInput, {
    nullable: true
  })
  seo_url?: Seo_urlOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Shipping_method_translationOrderByRelationAggregateInput, {
    nullable: true
  })
  shipping_method_translation?: Shipping_method_translationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => State_machine_state_translationOrderByRelationAggregateInput, {
    nullable: true
  })
  state_machine_state_translation?: State_machine_state_translationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => State_machine_translationOrderByRelationAggregateInput, {
    nullable: true
  })
  state_machine_translation?: State_machine_translationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Swag_language_pack_languageOrderByRelationAggregateInput, {
    nullable: true
  })
  swag_language_pack_language_swag_language_pack_language_language_idTolanguage?: Swag_language_pack_languageOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Tax_provider_translationOrderByRelationAggregateInput, {
    nullable: true
  })
  tax_provider_translation?: Tax_provider_translationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Tax_rule_type_translationOrderByRelationAggregateInput, {
    nullable: true
  })
  tax_rule_type_translation?: Tax_rule_type_translationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Theme_translationOrderByRelationAggregateInput, {
    nullable: true
  })
  theme_translation?: Theme_translationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Unit_translationOrderByRelationAggregateInput, {
    nullable: true
  })
  unit_translation?: Unit_translationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LanguageOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: LanguageOrderByRelevanceInput | undefined;
}
