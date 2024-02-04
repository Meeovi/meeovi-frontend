import * as TypeGraphQL from "type-graphql";

export enum Directus_rolesOrderByRelevanceFieldEnum {
  id = "id",
  name = "name",
  icon = "icon",
  description = "description",
  ip_access = "ip_access"
}
TypeGraphQL.registerEnumType(Directus_rolesOrderByRelevanceFieldEnum, {
  name: "Directus_rolesOrderByRelevanceFieldEnum",
  description: undefined,
});
