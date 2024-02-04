import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Mail_template_typeCreateWithoutMail_template_type_translationInput } from "../inputs/Mail_template_typeCreateWithoutMail_template_type_translationInput";
import { Mail_template_typeUpdateWithoutMail_template_type_translationInput } from "../inputs/Mail_template_typeUpdateWithoutMail_template_type_translationInput";
import { Mail_template_typeWhereInput } from "../inputs/Mail_template_typeWhereInput";

@TypeGraphQL.InputType("Mail_template_typeUpsertWithoutMail_template_type_translationInput", {})
export class Mail_template_typeUpsertWithoutMail_template_type_translationInput {
  @TypeGraphQL.Field(_type => Mail_template_typeUpdateWithoutMail_template_type_translationInput, {
    nullable: false
  })
  update!: Mail_template_typeUpdateWithoutMail_template_type_translationInput;

  @TypeGraphQL.Field(_type => Mail_template_typeCreateWithoutMail_template_type_translationInput, {
    nullable: false
  })
  create!: Mail_template_typeCreateWithoutMail_template_type_translationInput;

  @TypeGraphQL.Field(_type => Mail_template_typeWhereInput, {
    nullable: true
  })
  where?: Mail_template_typeWhereInput | undefined;
}
