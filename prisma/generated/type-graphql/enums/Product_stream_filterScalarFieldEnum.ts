import * as TypeGraphQL from "type-graphql";

export enum Product_stream_filterScalarFieldEnum {
  id = "id",
  product_stream_id = "product_stream_id",
  parent_id = "parent_id",
  type = "type",
  field = "field",
  operator = "operator",
  value = "value",
  parameters = "parameters",
  position = "position",
  custom_fields = "custom_fields",
  created_at = "created_at",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(Product_stream_filterScalarFieldEnum, {
  name: "Product_stream_filterScalarFieldEnum",
  description: undefined,
});
