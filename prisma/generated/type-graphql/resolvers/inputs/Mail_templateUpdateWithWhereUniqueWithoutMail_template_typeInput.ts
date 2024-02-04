import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Mail_templateUpdateWithoutMail_template_typeInput } from "../inputs/Mail_templateUpdateWithoutMail_template_typeInput";
import { Mail_templateWhereUniqueInput } from "../inputs/Mail_templateWhereUniqueInput";

@TypeGraphQL.InputType("Mail_templateUpdateWithWhereUniqueWithoutMail_template_typeInput", {})
export class Mail_templateUpdateWithWhereUniqueWithoutMail_template_typeInput {
  @TypeGraphQL.Field(_type => Mail_templateWhereUniqueInput, {
    nullable: false
  })
  where!: Mail_templateWhereUniqueInput;

  @TypeGraphQL.Field(_type => Mail_templateUpdateWithoutMail_template_typeInput, {
    nullable: false
  })
  data!: Mail_templateUpdateWithoutMail_template_typeInput;
}
