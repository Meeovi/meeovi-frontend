import * as TypeGraphQL from "type-graphql";

export enum Dead_messageOrderByRelevanceFieldEnum {
  original_message_class = "original_message_class",
  handler_class = "handler_class",
  exception = "exception",
  exception_message = "exception_message",
  exception_file = "exception_file"
}
TypeGraphQL.registerEnumType(Dead_messageOrderByRelevanceFieldEnum, {
  name: "Dead_messageOrderByRelevanceFieldEnum",
  description: undefined,
});
