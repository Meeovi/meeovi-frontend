import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Mail_template_translationCreateWithoutMail_templateInput } from "../inputs/Mail_template_translationCreateWithoutMail_templateInput";
import { Mail_template_translationWhereUniqueInput } from "../inputs/Mail_template_translationWhereUniqueInput";

@TypeGraphQL.InputType("Mail_template_translationCreateOrConnectWithoutMail_templateInput", {})
export class Mail_template_translationCreateOrConnectWithoutMail_templateInput {
  @TypeGraphQL.Field(_type => Mail_template_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Mail_template_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Mail_template_translationCreateWithoutMail_templateInput, {
    nullable: false
  })
  create!: Mail_template_translationCreateWithoutMail_templateInput;
}
