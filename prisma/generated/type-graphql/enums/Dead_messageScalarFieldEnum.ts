import * as TypeGraphQL from "type-graphql";

export enum Dead_messageScalarFieldEnum {
  id = "id",
  original_message_class = "original_message_class",
  serialized_original_message = "serialized_original_message",
  handler_class = "handler_class",
  encrypted = "encrypted",
  error_count = "error_count",
  next_execution_time = "next_execution_time",
  exception = "exception",
  exception_message = "exception_message",
  exception_file = "exception_file",
  exception_line = "exception_line",
  scheduled_task_id = "scheduled_task_id",
  created_at = "created_at",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(Dead_messageScalarFieldEnum, {
  name: "Dead_messageScalarFieldEnum",
  description: undefined,
});
