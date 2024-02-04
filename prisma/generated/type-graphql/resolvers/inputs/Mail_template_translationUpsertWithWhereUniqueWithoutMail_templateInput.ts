import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Mail_template_translationCreateWithoutMail_templateInput } from "../inputs/Mail_template_translationCreateWithoutMail_templateInput";
import { Mail_template_translationUpdateWithoutMail_templateInput } from "../inputs/Mail_template_translationUpdateWithoutMail_templateInput";
import { Mail_template_translationWhereUniqueInput } from "../inputs/Mail_template_translationWhereUniqueInput";

@TypeGraphQL.InputType("Mail_template_translationUpsertWithWhereUniqueWithoutMail_templateInput", {})
export class Mail_template_translationUpsertWithWhereUniqueWithoutMail_templateInput {
  @TypeGraphQL.Field(_type => Mail_template_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Mail_template_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Mail_template_translationUpdateWithoutMail_templateInput, {
    nullable: false
  })
  update!: Mail_template_translationUpdateWithoutMail_templateInput;

  @TypeGraphQL.Field(_type => Mail_template_translationCreateWithoutMail_templateInput, {
    nullable: false
  })
  create!: Mail_template_translationCreateWithoutMail_templateInput;
}
