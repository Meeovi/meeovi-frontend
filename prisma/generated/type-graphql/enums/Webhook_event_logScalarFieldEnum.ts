import * as TypeGraphQL from "type-graphql";

export enum Webhook_event_logScalarFieldEnum {
  id = "id",
  app_name = "app_name",
  webhook_name = "webhook_name",
  event_name = "event_name",
  delivery_status = "delivery_status",
  timestamp = "timestamp",
  processing_time = "processing_time",
  app_version = "app_version",
  request_content = "request_content",
  response_content = "response_content",
  response_status_code = "response_status_code",
  response_reason_phrase = "response_reason_phrase",
  url = "url",
  serialized_webhook_message = "serialized_webhook_message",
  custom_fields = "custom_fields",
  created_at = "created_at",
  updated_at = "updated_at",
  only_live_version = "only_live_version"
}
TypeGraphQL.registerEnumType(Webhook_event_logScalarFieldEnum, {
  name: "Webhook_event_logScalarFieldEnum",
  description: undefined,
});
