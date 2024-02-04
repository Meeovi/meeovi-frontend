import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Mail_templateCreateNestedOneWithoutMail_template_translationInput } from "../inputs/Mail_templateCreateNestedOneWithoutMail_template_translationInput";

@TypeGraphQL.InputType("Mail_template_translationCreateWithoutLanguageInput", {})
export class Mail_template_translationCreateWithoutLanguageInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sender_name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  subject?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  content_html?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  content_plain?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  custom_fields?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Mail_templateCreateNestedOneWithoutMail_template_translationInput, {
    nullable: false
  })
  mail_template!: Mail_templateCreateNestedOneWithoutMail_template_translationInput;
}
