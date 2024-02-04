import * as TypeGraphQL from "type-graphql";

export enum Od_scheduler_jobScalarFieldEnum {
  id = "id",
  parent_id = "parent_id",
  status = "status",
  type = "type",
  name = "name",
  message = "message",
  started_at = "started_at",
  finished_at = "finished_at",
  created_at = "created_at",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(Od_scheduler_jobScalarFieldEnum, {
  name: "Od_scheduler_jobScalarFieldEnum",
  description: undefined,
});
