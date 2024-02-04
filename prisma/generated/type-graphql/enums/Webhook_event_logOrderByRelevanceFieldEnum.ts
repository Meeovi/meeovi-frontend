import * as TypeGraphQL from "type-graphql";

export enum Webhook_event_logOrderByRelevanceFieldEnum {
  app_name = "app_name",
  webhook_name = "webhook_name",
  event_name = "event_name",
  delivery_status = "delivery_status",
  app_version = "app_version",
  request_content = "request_content",
  response_content = "response_content",
  response_reason_phrase = "response_reason_phrase",
  url = "url",
  custom_fields = "custom_fields"
}
TypeGraphQL.registerEnumType(Webhook_event_logOrderByRelevanceFieldEnum, {
  name: "Webhook_event_logOrderByRelevanceFieldEnum",
  description: undefined,
});
