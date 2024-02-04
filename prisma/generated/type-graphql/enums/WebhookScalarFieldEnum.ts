import * as TypeGraphQL from "type-graphql";

export enum WebhookScalarFieldEnum {
  id = "id",
  name = "name",
  event_name = "event_name",
  url = "url",
  app_id = "app_id",
  active = "active",
  created_at = "created_at",
  updated_at = "updated_at",
  error_count = "error_count",
  only_live_version = "only_live_version"
}
TypeGraphQL.registerEnumType(WebhookScalarFieldEnum, {
  name: "WebhookScalarFieldEnum",
  description: undefined,
});
