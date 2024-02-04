import * as TypeGraphQL from "type-graphql";

export enum NotificationOrderByRelevanceFieldEnum {
  status = "status",
  message = "message",
  required_privileges = "required_privileges"
}
TypeGraphQL.registerEnumType(NotificationOrderByRelevanceFieldEnum, {
  name: "NotificationOrderByRelevanceFieldEnum",
  description: undefined,
});
