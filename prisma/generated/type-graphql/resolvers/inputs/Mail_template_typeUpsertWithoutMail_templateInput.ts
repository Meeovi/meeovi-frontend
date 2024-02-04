import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Mail_template_typeCreateWithoutMail_templateInput } from "../inputs/Mail_template_typeCreateWithoutMail_templateInput";
import { Mail_template_typeUpdateWithoutMail_templateInput } from "../inputs/Mail_template_typeUpdateWithoutMail_templateInput";
import { Mail_template_typeWhereInput } from "../inputs/Mail_template_typeWhereInput";

@TypeGraphQL.InputType("Mail_template_typeUpsertWithoutMail_templateInput", {})
export class Mail_template_typeUpsertWithoutMail_templateInput {
  @TypeGraphQL.Field(_type => Mail_template_typeUpdateWithoutMail_templateInput, {
    nullable: false
  })
  update!: Mail_template_typeUpdateWithoutMail_templateInput;

  @TypeGraphQL.Field(_type => Mail_template_typeCreateWithoutMail_templateInput, {
    nullable: false
  })
  create!: Mail_template_typeCreateWithoutMail_templateInput;

  @TypeGraphQL.Field(_type => Mail_template_typeWhereInput, {
    nullable: true
  })
  where?: Mail_template_typeWhereInput | undefined;
}
