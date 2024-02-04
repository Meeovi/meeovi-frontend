import * as TypeGraphQL from "type-graphql";

export enum Customer_addressScalarFieldEnum {
  id = "id",
  customer_id = "customer_id",
  country_id = "country_id",
  country_state_id = "country_state_id",
  company = "company",
  department = "department",
  salutation_id = "salutation_id",
  title = "title",
  first_name = "first_name",
  last_name = "last_name",
  street = "street",
  zipcode = "zipcode",
  city = "city",
  phone_number = "phone_number",
  additional_address_line1 = "additional_address_line1",
  additional_address_line2 = "additional_address_line2",
  custom_fields = "custom_fields",
  created_at = "created_at",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(Customer_addressScalarFieldEnum, {
  name: "Customer_addressScalarFieldEnum",
  description: undefined,
});
