import * as TypeGraphQL from "type-graphql";

export enum SalutationScalarFieldEnum {
  id = "id",
  salutation_key = "salutation_key",
  created_at = "created_at",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(SalutationScalarFieldEnum, {
  name: "SalutationScalarFieldEnum",
  description: undefined,
});
