import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Mail_templateCreateWithoutMail_template_translationInput } from "../inputs/Mail_templateCreateWithoutMail_template_translationInput";
import { Mail_templateWhereUniqueInput } from "../inputs/Mail_templateWhereUniqueInput";

@TypeGraphQL.InputType("Mail_templateCreateOrConnectWithoutMail_template_translationInput", {})
export class Mail_templateCreateOrConnectWithoutMail_template_translationInput {
  @TypeGraphQL.Field(_type => Mail_templateWhereUniqueInput, {
    nullable: false
  })
  where!: Mail_templateWhereUniqueInput;

  @TypeGraphQL.Field(_type => Mail_templateCreateWithoutMail_template_translationInput, {
    nullable: false
  })
  create!: Mail_templateCreateWithoutMail_template_translationInput;
}
