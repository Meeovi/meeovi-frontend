import * as TypeGraphQL from "type-graphql";

export enum Directus_flowsOrderByRelevanceFieldEnum {
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
  user_created = "user_created"
}
TypeGraphQL.registerEnumType(Directus_flowsOrderByRelevanceFieldEnum, {
  name: "Directus_flowsOrderByRelevanceFieldEnum",
  description: undefined,
});
