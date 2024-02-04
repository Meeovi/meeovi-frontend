import * as TypeGraphQL from "type-graphql";

export enum Mail_template_translationOrderByRelevanceFieldEnum {
  sender_name = "sender_name",
  subject = "subject",
  description = "description",
  content_html = "content_html",
  content_plain = "content_plain",
  custom_fields = "custom_fields"
}
TypeGraphQL.registerEnumType(Mail_template_translationOrderByRelevanceFieldEnum, {
  name: "Mail_template_translationOrderByRelevanceFieldEnum",
  description: undefined,
});
