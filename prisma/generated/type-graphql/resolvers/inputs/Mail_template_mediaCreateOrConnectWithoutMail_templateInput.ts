import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Mail_template_mediaCreateWithoutMail_templateInput } from "../inputs/Mail_template_mediaCreateWithoutMail_templateInput";
import { Mail_template_mediaWhereUniqueInput } from "../inputs/Mail_template_mediaWhereUniqueInput";

@TypeGraphQL.InputType("Mail_template_mediaCreateOrConnectWithoutMail_templateInput", {})
export class Mail_template_mediaCreateOrConnectWithoutMail_templateInput {
  @TypeGraphQL.Field(_type => Mail_template_mediaWhereUniqueInput, {
    nullable: false
  })
  where!: Mail_template_mediaWhereUniqueInput;

  @TypeGraphQL.Field(_type => Mail_template_mediaCreateWithoutMail_templateInput, {
    nullable: false
  })
  create!: Mail_template_mediaCreateWithoutMail_templateInput;
}
