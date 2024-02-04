import * as TypeGraphQL from "type-graphql";

export enum Sales_channelScalarFieldEnum {
  id = "id",
  type_id = "type_id",
  short_name = "short_name",
  configuration = "configuration",
  access_key = "access_key",
  language_id = "language_id",
  currency_id = "currency_id",
  payment_method_id = "payment_method_id",
  shipping_method_id = "shipping_method_id",
  country_id = "country_id",
  navigation_category_id = "navigation_category_id",
  navigation_category_version_id = "navigation_category_version_id",
  navigation_category_depth = "navigation_category_depth",
  home_cms_page_id = "home_cms_page_id",
  home_cms_page_version_id = "home_cms_page_version_id",
  hreflang_active = "hreflang_active",
  hreflang_default_domain_id = "hreflang_default_domain_id",
  footer_category_id = "footer_category_id",
  footer_category_version_id = "footer_category_version_id",
  service_category_id = "service_category_id",
  service_category_version_id = "service_category_version_id",
  active = "active",
  maintenance = "maintenance",
  maintenance_ip_whitelist = "maintenance_ip_whitelist",
  customer_group_id = "customer_group_id",
  mail_header_footer_id = "mail_header_footer_id",
  payment_method_ids = "payment_method_ids",
  analytics_id = "analytics_id",
  tax_calculation_type = "tax_calculation_type",
  created_at = "created_at",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(Sales_channelScalarFieldEnum, {
  name: "Sales_channelScalarFieldEnum",
  description: undefined,
});
