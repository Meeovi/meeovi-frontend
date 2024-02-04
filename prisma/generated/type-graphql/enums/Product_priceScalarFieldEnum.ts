import * as TypeGraphQL from "type-graphql";

export enum Product_priceScalarFieldEnum {
  id = "id",
  version_id = "version_id",
  rule_id = "rule_id",
  product_id = "product_id",
  product_version_id = "product_version_id",
  price = "price",
  quantity_start = "quantity_start",
  quantity_end = "quantity_end",
  custom_fields = "custom_fields",
  created_at = "created_at",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(Product_priceScalarFieldEnum, {
  name: "Product_priceScalarFieldEnum",
  description: undefined,
});
