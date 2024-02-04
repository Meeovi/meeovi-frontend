import * as TypeGraphQL from "type-graphql";

export enum EnqueueOrderByRelevanceFieldEnum {
  id = "id",
  body = "body",
  headers = "headers",
  properties = "properties",
  queue = "queue",
  delivery_id = "delivery_id"
}
TypeGraphQL.registerEnumType(EnqueueOrderByRelevanceFieldEnum, {
  name: "EnqueueOrderByRelevanceFieldEnum",
  description: undefined,
});
