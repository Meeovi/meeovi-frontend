import * as TypeGraphQL from "type-graphql";

export enum Property_groupScalarFieldEnum {
  id = "id",
  sorting_type = "sorting_type",
  display_type = "display_type",
  created_at = "created_at",
  updated_at = "updated_at",
  filterable = "filterable",
  visible_on_product_detail_page = "visible_on_product_detail_page"
}
TypeGraphQL.registerEnumType(Property_groupScalarFieldEnum, {
  name: "Property_groupScalarFieldEnum",
  description: undefined,
});
