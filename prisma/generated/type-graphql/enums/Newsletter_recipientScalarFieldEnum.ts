import * as TypeGraphQL from "type-graphql";

export enum Newsletter_recipientScalarFieldEnum {
  id = "id",
  email = "email",
  title = "title",
  first_name = "first_name",
  last_name = "last_name",
  zip_code = "zip_code",
  city = "city",
  street = "street",
  status = "status",
  hash = "hash",
  salutation_id = "salutation_id",
  language_id = "language_id",
  sales_channel_id = "sales_channel_id",
  custom_fields = "custom_fields",
  confirmed_at = "confirmed_at",
  created_at = "created_at",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(Newsletter_recipientScalarFieldEnum, {
  name: "Newsletter_recipientScalarFieldEnum",
  description: undefined,
});
