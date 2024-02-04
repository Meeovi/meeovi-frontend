import * as TypeGraphQL from "type-graphql";

export enum Order_customerOrderByRelevanceFieldEnum {
  email = "email",
  first_name = "first_name",
  last_name = "last_name",
  title = "title",
  vat_ids = "vat_ids",
  company = "company",
  customer_number = "customer_number",
  custom_fields = "custom_fields",
  remote_address = "remote_address"
}
TypeGraphQL.registerEnumType(Order_customerOrderByRelevanceFieldEnum, {
  name: "Order_customerOrderByRelevanceFieldEnum",
  description: undefined,
});
