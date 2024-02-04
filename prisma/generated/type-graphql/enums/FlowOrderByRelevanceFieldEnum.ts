import * as TypeGraphQL from "type-graphql";

export enum FlowOrderByRelevanceFieldEnum {
  name = "name",
  description = "description",
  event_name = "event_name",
  custom_fields = "custom_fields"
}
TypeGraphQL.registerEnumType(FlowOrderByRelevanceFieldEnum, {
  name: "FlowOrderByRelevanceFieldEnum",
  description: undefined,
});
