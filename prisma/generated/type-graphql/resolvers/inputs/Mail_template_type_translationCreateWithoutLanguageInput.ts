import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Mail_template_typeCreateNestedOneWithoutMail_template_type_translationInput } from "../inputs/Mail_template_typeCreateNestedOneWithoutMail_template_type_translationInput";

@TypeGraphQL.InputType("Mail_template_type_translationCreateWithoutLanguageInput", {})
export class Mail_template_type_translationCreateWithoutLanguageInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

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

  @TypeGraphQL.Field(_type => Mail_template_typeCreateNestedOneWithoutMail_template_type_translationInput, {
    nullable: false
  })
  mail_template_type!: Mail_template_typeCreateNestedOneWithoutMail_template_type_translationInput;
}
