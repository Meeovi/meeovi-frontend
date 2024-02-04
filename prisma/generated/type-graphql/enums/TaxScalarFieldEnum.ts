import * as TypeGraphQL from "type-graphql";

export enum TaxScalarFieldEnum {
  id = "id",
  tax_rate = "tax_rate",
  name = "name",
  position = "position",
  custom_fields = "custom_fields",
  created_at = "created_at",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(TaxScalarFieldEnum, {
  name: "TaxScalarFieldEnum",
  description: undefined,
});
