import * as TypeGraphQL from "type-graphql";

export enum Scheduled_taskScalarFieldEnum {
  id = "id",
  name = "name",
  scheduled_task_class = "scheduled_task_class",
  run_interval = "run_interval",
  default_run_interval = "default_run_interval",
  status = "status",
  last_execution_time = "last_execution_time",
  next_execution_time = "next_execution_time",
  created_at = "created_at",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(Scheduled_taskScalarFieldEnum, {
  name: "Scheduled_taskScalarFieldEnum",
  description: undefined,
});
