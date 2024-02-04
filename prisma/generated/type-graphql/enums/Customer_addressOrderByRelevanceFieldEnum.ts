import * as TypeGraphQL from "type-graphql";

export enum Customer_addressOrderByRelevanceFieldEnum {
  company = "company",
  department = "department",
  title = "title",
  first_name = "first_name",
  last_name = "last_name",
  street = "street",
  zipcode = "zipcode",
  city = "city",
  phone_number = "phone_number",
  additional_address_line1 = "additional_address_line1",
  additional_address_line2 = "additional_address_line2",
  custom_fields = "custom_fields"
}
TypeGraphQL.registerEnumType(Customer_addressOrderByRelevanceFieldEnum, {
  name: "Customer_addressOrderByRelevanceFieldEnum",
  description: undefined,
});
