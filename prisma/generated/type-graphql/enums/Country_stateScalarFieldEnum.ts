import * as TypeGraphQL from "type-graphql";

export enum Country_stateScalarFieldEnum {
  id = "id",
  country_id = "country_id",
  short_code = "short_code",
  position = "position",
  active = "active",
  created_at = "created_at",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(Country_stateScalarFieldEnum, {
  name: "Country_stateScalarFieldEnum",
  description: undefined,
});
