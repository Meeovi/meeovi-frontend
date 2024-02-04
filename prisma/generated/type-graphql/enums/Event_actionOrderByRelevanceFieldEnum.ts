import * as TypeGraphQL from "type-graphql";

export enum Event_actionOrderByRelevanceFieldEnum {
  title = "title",
  event_name = "event_name",
  action_name = "action_name",
  config = "config",
  custom_fields = "custom_fields"
}
TypeGraphQL.registerEnumType(Event_actionOrderByRelevanceFieldEnum, {
  name: "Event_actionOrderByRelevanceFieldEnum",
  description: undefined,
});
