import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Mail_template_translationUpdateWithoutLanguageInput } from "../inputs/Mail_template_translationUpdateWithoutLanguageInput";
import { Mail_template_translationWhereUniqueInput } from "../inputs/Mail_template_translationWhereUniqueInput";

@TypeGraphQL.InputType("Mail_template_translationUpdateWithWhereUniqueWithoutLanguageInput", {})
export class Mail_template_translationUpdateWithWhereUniqueWithoutLanguageInput {
  @TypeGraphQL.Field(_type => Mail_template_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Mail_template_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Mail_template_translationUpdateWithoutLanguageInput, {
    nullable: false
  })
  data!: Mail_template_translationUpdateWithoutLanguageInput;
}
