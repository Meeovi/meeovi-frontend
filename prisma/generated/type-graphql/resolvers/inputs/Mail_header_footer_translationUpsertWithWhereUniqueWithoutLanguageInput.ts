import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Mail_header_footer_translationCreateWithoutLanguageInput } from "../inputs/Mail_header_footer_translationCreateWithoutLanguageInput";
import { Mail_header_footer_translationUpdateWithoutLanguageInput } from "../inputs/Mail_header_footer_translationUpdateWithoutLanguageInput";
import { Mail_header_footer_translationWhereUniqueInput } from "../inputs/Mail_header_footer_translationWhereUniqueInput";

@TypeGraphQL.InputType("Mail_header_footer_translationUpsertWithWhereUniqueWithoutLanguageInput", {})
export class Mail_header_footer_translationUpsertWithWhereUniqueWithoutLanguageInput {
  @TypeGraphQL.Field(_type => Mail_header_footer_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Mail_header_footer_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Mail_header_footer_translationUpdateWithoutLanguageInput, {
    nullable: false
  })
  update!: Mail_header_footer_translationUpdateWithoutLanguageInput;

  @TypeGraphQL.Field(_type => Mail_header_footer_translationCreateWithoutLanguageInput, {
    nullable: false
  })
  create!: Mail_header_footer_translationCreateWithoutLanguageInput;
}
