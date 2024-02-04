import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Mail_templateCreateWithoutMail_template_translationInput } from "../inputs/Mail_templateCreateWithoutMail_template_translationInput";
import { Mail_templateUpdateWithoutMail_template_translationInput } from "../inputs/Mail_templateUpdateWithoutMail_template_translationInput";
import { Mail_templateWhereInput } from "../inputs/Mail_templateWhereInput";

@TypeGraphQL.InputType("Mail_templateUpsertWithoutMail_template_translationInput", {})
export class Mail_templateUpsertWithoutMail_template_translationInput {
  @TypeGraphQL.Field(_type => Mail_templateUpdateWithoutMail_template_translationInput, {
    nullable: false
  })
  update!: Mail_templateUpdateWithoutMail_template_translationInput;

  @TypeGraphQL.Field(_type => Mail_templateCreateWithoutMail_template_translationInput, {
    nullable: false
  })
  create!: Mail_templateCreateWithoutMail_template_translationInput;

  @TypeGraphQL.Field(_type => Mail_templateWhereInput, {
    nullable: true
  })
  where?: Mail_templateWhereInput | undefined;
}
