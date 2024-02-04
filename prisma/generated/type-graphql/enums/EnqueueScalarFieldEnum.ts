import * as TypeGraphQL from "type-graphql";

export enum EnqueueScalarFieldEnum {
  id = "id",
  published_at = "published_at",
  body = "body",
  headers = "headers",
  properties = "properties",
  redelivered = "redelivered",
  queue = "queue",
  priority = "priority",
  delayed_until = "delayed_until",
  time_to_live = "time_to_live",
  delivery_id = "delivery_id",
  redeliver_after = "redeliver_after"
}
TypeGraphQL.registerEnumType(EnqueueScalarFieldEnum, {
  name: "EnqueueScalarFieldEnum",
  description: undefined,
});
