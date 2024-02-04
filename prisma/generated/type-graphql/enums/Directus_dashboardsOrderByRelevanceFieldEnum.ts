import * as TypeGraphQL from "type-graphql";

export enum Directus_dashboardsOrderByRelevanceFieldEnum {
  id = "id",
  name = "name",
  icon = "icon",
  note = "note",
  user_created = "user_created",
  color = "color"
}
TypeGraphQL.registerEnumType(Directus_dashboardsOrderByRelevanceFieldEnum, {
  name: "Directus_dashboardsOrderByRelevanceFieldEnum",
  description: undefined,
});
