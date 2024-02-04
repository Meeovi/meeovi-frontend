import * as TypeGraphQL from "type-graphql";

export enum NotificationScalarFieldEnum {
  id = "id",
  status = "status",
  message = "message",
  admin_only = "admin_only",
  required_privileges = "required_privileges",
  created_by_integration_id = "created_by_integration_id",
  created_by_user_id = "created_by_user_id",
  created_at = "created_at",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(NotificationScalarFieldEnum, {
  name: "NotificationScalarFieldEnum",
  description: undefined,
});
