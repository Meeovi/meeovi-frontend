import * as TypeGraphQL from "type-graphql";

export enum LocaleScalarFieldEnum {
  id = "id",
  code = "code",
  created_at = "created_at",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(LocaleScalarFieldEnum, {
  name: "LocaleScalarFieldEnum",
  description: undefined,
});
