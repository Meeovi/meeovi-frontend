import * as TypeGraphQL from "type-graphql";

export enum Messenger_messagesScalarFieldEnum {
  id = "id",
  body = "body",
  headers = "headers",
  queue_name = "queue_name",
  created_at = "created_at",
  available_at = "available_at",
  delivered_at = "delivered_at"
}
TypeGraphQL.registerEnumType(Messenger_messagesScalarFieldEnum, {
  name: "Messenger_messagesScalarFieldEnum",
  description: undefined,
});
