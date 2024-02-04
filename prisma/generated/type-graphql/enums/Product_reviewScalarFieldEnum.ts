import * as TypeGraphQL from "type-graphql";

export enum Product_reviewScalarFieldEnum {
  id = "id",
  product_id = "product_id",
  customer_id = "customer_id",
  sales_channel_id = "sales_channel_id",
  language_id = "language_id",
  external_user = "external_user",
  external_email = "external_email",
  title = "title",
  content = "content",
  points = "points",
  status = "status",
  comment = "comment",
  custom_fields = "custom_fields",
  updated_at = "updated_at",
  created_at = "created_at",
  product_version_id = "product_version_id"
}
TypeGraphQL.registerEnumType(Product_reviewScalarFieldEnum, {
  name: "Product_reviewScalarFieldEnum",
  description: undefined,
});
