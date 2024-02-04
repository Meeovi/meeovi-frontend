import * as TypeGraphQL from "type-graphql";

export enum Product_mediaScalarFieldEnum {
  id = "id",
  version_id = "version_id",
  position = "position",
  product_id = "product_id",
  product_version_id = "product_version_id",
  media_id = "media_id",
  custom_fields = "custom_fields",
  created_at = "created_at",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(Product_mediaScalarFieldEnum, {
  name: "Product_mediaScalarFieldEnum",
  description: undefined,
});
