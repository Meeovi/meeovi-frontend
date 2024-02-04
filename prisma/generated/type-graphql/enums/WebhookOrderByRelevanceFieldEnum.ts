import * as TypeGraphQL from "type-graphql";

export enum WebhookOrderByRelevanceFieldEnum {
  name = "name",
  event_name = "event_name",
  url = "url"
}
TypeGraphQL.registerEnumType(WebhookOrderByRelevanceFieldEnum, {
  name: "WebhookOrderByRelevanceFieldEnum",
  description: undefined,
});
