import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Mail_template_translationCreateNestedManyWithoutMail_templateInput } from "../inputs/Mail_template_translationCreateNestedManyWithoutMail_templateInput";
import { Mail_template_typeCreateNestedOneWithoutMail_templateInput } from "../inputs/Mail_template_typeCreateNestedOneWithoutMail_templateInput";

@TypeGraphQL.InputType("Mail_templateCreateWithoutMail_template_mediaInput", {})
export class Mail_templateCreateWithoutMail_template_mediaInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  system_default?: boolean | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Mail_template_typeCreateNestedOneWithoutMail_templateInput, {
    nullable: true
  })
  mail_template_type?: Mail_template_typeCreateNestedOneWithoutMail_templateInput | undefined;

  @TypeGraphQL.Field(_type => Mail_template_translationCreateNestedManyWithoutMail_templateInput, {
    nullable: true
  })
  mail_template_translation?: Mail_template_translationCreateNestedManyWithoutMail_templateInput | undefined;
}
