import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Mail_header_footer_translationUpdateWithoutLanguageInput } from "../inputs/Mail_header_footer_translationUpdateWithoutLanguageInput";
import { Mail_header_footer_translationWhereUniqueInput } from "../inputs/Mail_header_footer_translationWhereUniqueInput";

@TypeGraphQL.InputType("Mail_header_footer_translationUpdateWithWhereUniqueWithoutLanguageInput", {})
export class Mail_header_footer_translationUpdateWithWhereUniqueWithoutLanguageInput {
  @TypeGraphQL.Field(_type => Mail_header_footer_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Mail_header_footer_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Mail_header_footer_translationUpdateWithoutLanguageInput, {
    nullable: false
  })
  data!: Mail_header_footer_translationUpdateWithoutLanguageInput;
}
