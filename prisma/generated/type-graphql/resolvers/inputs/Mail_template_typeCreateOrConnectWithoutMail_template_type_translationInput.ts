import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Mail_template_typeCreateWithoutMail_template_type_translationInput } from "../inputs/Mail_template_typeCreateWithoutMail_template_type_translationInput";
import { Mail_template_typeWhereUniqueInput } from "../inputs/Mail_template_typeWhereUniqueInput";

@TypeGraphQL.InputType("Mail_template_typeCreateOrConnectWithoutMail_template_type_translationInput", {})
export class Mail_template_typeCreateOrConnectWithoutMail_template_type_translationInput {
  @TypeGraphQL.Field(_type => Mail_template_typeWhereUniqueInput, {
    nullable: false
  })
  where!: Mail_template_typeWhereUniqueInput;

  @TypeGraphQL.Field(_type => Mail_template_typeCreateWithoutMail_template_type_translationInput, {
    nullable: false
  })
  create!: Mail_template_typeCreateWithoutMail_template_type_translationInput;
}
