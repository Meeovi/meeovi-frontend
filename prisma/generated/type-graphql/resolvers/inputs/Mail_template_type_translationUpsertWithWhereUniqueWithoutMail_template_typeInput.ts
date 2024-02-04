import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Mail_template_type_translationCreateWithoutMail_template_typeInput } from "../inputs/Mail_template_type_translationCreateWithoutMail_template_typeInput";
import { Mail_template_type_translationUpdateWithoutMail_template_typeInput } from "../inputs/Mail_template_type_translationUpdateWithoutMail_template_typeInput";
import { Mail_template_type_translationWhereUniqueInput } from "../inputs/Mail_template_type_translationWhereUniqueInput";

@TypeGraphQL.InputType("Mail_template_type_translationUpsertWithWhereUniqueWithoutMail_template_typeInput", {})
export class Mail_template_type_translationUpsertWithWhereUniqueWithoutMail_template_typeInput {
  @TypeGraphQL.Field(_type => Mail_template_type_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Mail_template_type_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Mail_template_type_translationUpdateWithoutMail_template_typeInput, {
    nullable: false
  })
  update!: Mail_template_type_translationUpdateWithoutMail_template_typeInput;

  @TypeGraphQL.Field(_type => Mail_template_type_translationCreateWithoutMail_template_typeInput, {
    nullable: false
  })
  create!: Mail_template_type_translationCreateWithoutMail_template_typeInput;
}
