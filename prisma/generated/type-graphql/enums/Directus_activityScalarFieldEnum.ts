import * as TypeGraphQL from "type-graphql";

export enum Directus_activityScalarFieldEnum {
  id = "id",
  action = "action",
  user = "user",
  timestamp = "timestamp",
  ip = "ip",
  user_agent = "user_agent",
  collection = "collection",
  item = "item",
  comment = "comment",
  origin = "origin"
}
TypeGraphQL.registerEnumType(Directus_activityScalarFieldEnum, {
  name: "Directus_activityScalarFieldEnum",
  description: undefined,
});
