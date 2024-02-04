import * as TypeGraphQL from "type-graphql";

export enum CustomerOrderByRelevanceFieldEnum {
  customer_number = "customer_number",
  first_name = "first_name",
  last_name = "last_name",
  company = "company",
  password = "password",
  legacy_password = "legacy_password",
  legacy_encoder = "legacy_encoder",
  email = "email",
  title = "title",
  vat_ids = "vat_ids",
  hash = "hash",
  newsletter_sales_channel_ids = "newsletter_sales_channel_ids",
  custom_fields = "custom_fields",
  affiliate_code = "affiliate_code",
  campaign_code = "campaign_code",
  remote_address = "remote_address",
  tag_ids = "tag_ids",
  account_type = "account_type"
}
TypeGraphQL.registerEnumType(CustomerOrderByRelevanceFieldEnum, {
  name: "CustomerOrderByRelevanceFieldEnum",
  description: undefined,
});
