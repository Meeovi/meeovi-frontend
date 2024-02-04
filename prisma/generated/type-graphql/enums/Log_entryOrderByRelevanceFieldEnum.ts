import * as TypeGraphQL from "type-graphql";

export enum Log_entryOrderByRelevanceFieldEnum {
  message = "message",
  channel = "channel",
  context = "context",
  extra = "extra"
}
TypeGraphQL.registerEnumType(Log_entryOrderByRelevanceFieldEnum, {
  name: "Log_entryOrderByRelevanceFieldEnum",
  description: undefined,
});
