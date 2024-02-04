import * as TypeGraphQL from "type-graphql";

export enum Messenger_messagesOrderByRelevanceFieldEnum {
  body = "body",
  headers = "headers",
  queue_name = "queue_name"
}
TypeGraphQL.registerEnumType(Messenger_messagesOrderByRelevanceFieldEnum, {
  name: "Messenger_messagesOrderByRelevanceFieldEnum",
  description: undefined,
});
