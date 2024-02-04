import * as TypeGraphQL from "type-graphql";

export enum Directus_activityOrderByRelevanceFieldEnum {
  action = "action",
  user = "user",
  ip = "ip",
  user_agent = "user_agent",
  collection = "collection",
  item = "item",
  comment = "comment",
  origin = "origin"
}
TypeGraphQL.registerEnumType(Directus_activityOrderByRelevanceFieldEnum, {
  name: "Directus_activityOrderByRelevanceFieldEnum",
  description: undefined,
});
