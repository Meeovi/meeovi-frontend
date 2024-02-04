import * as TypeGraphQL from "type-graphql";

export enum Order_customerScalarFieldEnum {
  id = "id",
  version_id = "version_id",
  customer_id = "customer_id",
  order_id = "order_id",
  order_version_id = "order_version_id",
  email = "email",
  salutation_id = "salutation_id",
  first_name = "first_name",
  last_name = "last_name",
  title = "title",
  vat_ids = "vat_ids",
  company = "company",
  customer_number = "customer_number",
  custom_fields = "custom_fields",
  created_at = "created_at",
  updated_at = "updated_at",
  remote_address = "remote_address"
}
TypeGraphQL.registerEnumType(Order_customerScalarFieldEnum, {
  name: "Order_customerScalarFieldEnum",
  description: undefined,
});
