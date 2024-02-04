import * as TypeGraphQL from "type-graphql";

export enum Main_categoryScalarFieldEnum {
  id = "id",
  product_id = "product_id",
  product_version_id = "product_version_id",
  category_id = "category_id",
  category_version_id = "category_version_id",
  sales_channel_id = "sales_channel_id",
  created_at = "created_at",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(Main_categoryScalarFieldEnum, {
  name: "Main_categoryScalarFieldEnum",
  description: undefined,
});
