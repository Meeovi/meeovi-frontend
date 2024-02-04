import * as TypeGraphQL from "type-graphql";

export enum Product_exportScalarFieldEnum {
  id = "id",
  product_stream_id = "product_stream_id",
  storefront_sales_channel_id = "storefront_sales_channel_id",
  sales_channel_id = "sales_channel_id",
  sales_channel_domain_id = "sales_channel_domain_id",
  file_name = "file_name",
  access_key = "access_key",
  encoding = "encoding",
  file_format = "file_format",
  include_variants = "include_variants",
  generate_by_cronjob = "generate_by_cronjob",
  generated_at = "generated_at",
  interval = "interval",
  header_template = "header_template",
  body_template = "body_template",
  footer_template = "footer_template",
  created_at = "created_at",
  updated_at = "updated_at",
  currency_id = "currency_id",
  paused_schedule = "paused_schedule",
  is_running = "is_running"
}
TypeGraphQL.registerEnumType(Product_exportScalarFieldEnum, {
  name: "Product_exportScalarFieldEnum",
  description: undefined,
});
