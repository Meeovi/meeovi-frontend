import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Mail_template_type_translationCreateWithoutLanguageInput } from "../inputs/Mail_template_type_translationCreateWithoutLanguageInput";
import { Mail_template_type_translationUpdateWithoutLanguageInput } from "../inputs/Mail_template_type_translationUpdateWithoutLanguageInput";
import { Mail_template_type_translationWhereUniqueInput } from "../inputs/Mail_template_type_translationWhereUniqueInput";

@TypeGraphQL.InputType("Mail_template_type_translationUpsertWithWhereUniqueWithoutLanguageInput", {})
export class Mail_template_type_translationUpsertWithWhereUniqueWithoutLanguageInput {
  @TypeGraphQL.Field(_type => Mail_template_type_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Mail_template_type_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Mail_template_type_translationUpdateWithoutLanguageInput, {
    nullable: false
  })
  update!: Mail_template_type_translationUpdateWithoutLanguageInput;

  @TypeGraphQL.Field(_type => Mail_template_type_translationCreateWithoutLanguageInput, {
    nullable: false
  })
  create!: Mail_template_type_translationCreateWithoutLanguageInput;
}
