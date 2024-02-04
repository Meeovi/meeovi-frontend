import * as TypeGraphQL from "type-graphql";

export enum Mail_template_translationScalarFieldEnum {
  mail_template_id = "mail_template_id",
  language_id = "language_id",
  sender_name = "sender_name",
  subject = "subject",
  description = "description",
  content_html = "content_html",
  content_plain = "content_plain",
  custom_fields = "custom_fields",
  created_at = "created_at",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(Mail_template_translationScalarFieldEnum, {
  name: "Mail_template_translationScalarFieldEnum",
  description: undefined,
});
