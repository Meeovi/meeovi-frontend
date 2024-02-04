import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateNestedOneWithoutMail_header_footer_translationInput } from "../inputs/LanguageCreateNestedOneWithoutMail_header_footer_translationInput";
import { Mail_header_footerCreateNestedOneWithoutMail_header_footer_translationInput } from "../inputs/Mail_header_footerCreateNestedOneWithoutMail_header_footer_translationInput";

@TypeGraphQL.InputType("Mail_header_footer_translationCreateInput", {})
export class Mail_header_footer_translationCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  header_html?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  header_plain?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  footer_html?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  footer_plain?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateNestedOneWithoutMail_header_footer_translationInput, {
    nullable: false
  })
  language!: LanguageCreateNestedOneWithoutMail_header_footer_translationInput;

  @TypeGraphQL.Field(_type => Mail_header_footerCreateNestedOneWithoutMail_header_footer_translationInput, {
    nullable: false
  })
  mail_header_footer!: Mail_header_footerCreateNestedOneWithoutMail_header_footer_translationInput;
}
