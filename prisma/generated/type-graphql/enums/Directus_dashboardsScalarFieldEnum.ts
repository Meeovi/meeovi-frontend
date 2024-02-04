import * as TypeGraphQL from "type-graphql";

export enum Directus_dashboardsScalarFieldEnum {
  id = "id",
  name = "name",
  icon = "icon",
  note = "note",
  date_created = "date_created",
  user_created = "user_created",
  color = "color"
}
TypeGraphQL.registerEnumType(Directus_dashboardsScalarFieldEnum, {
  name: "Directus_dashboardsScalarFieldEnum",
  description: undefined,
});
