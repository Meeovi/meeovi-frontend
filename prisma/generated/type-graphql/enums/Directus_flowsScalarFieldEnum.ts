import * as TypeGraphQL from "type-graphql";

export enum Directus_flowsScalarFieldEnum {
  id = "id",
  name = "name",
  icon = "icon",
  color = "color",
  description = "description",
  status = "status",
  trigger = "trigger",
  accountability = "accountability",
  options = "options",
  operation = "operation",
  date_created = "date_created",
  user_created = "user_created"
}
TypeGraphQL.registerEnumType(Directus_flowsScalarFieldEnum, {
  name: "Directus_flowsScalarFieldEnum",
  description: undefined,
});
