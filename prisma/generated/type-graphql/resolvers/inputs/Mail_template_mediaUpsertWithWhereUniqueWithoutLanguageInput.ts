import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Mail_template_mediaCreateWithoutLanguageInput } from "../inputs/Mail_template_mediaCreateWithoutLanguageInput";
import { Mail_template_mediaUpdateWithoutLanguageInput } from "../inputs/Mail_template_mediaUpdateWithoutLanguageInput";
import { Mail_template_mediaWhereUniqueInput } from "../inputs/Mail_template_mediaWhereUniqueInput";

@TypeGraphQL.InputType("Mail_template_mediaUpsertWithWhereUniqueWithoutLanguageInput", {})
export class Mail_template_mediaUpsertWithWhereUniqueWithoutLanguageInput {
  @TypeGraphQL.Field(_type => Mail_template_mediaWhereUniqueInput, {
    nullable: false
  })
  where!: Mail_template_mediaWhereUniqueInput;

  @TypeGraphQL.Field(_type => Mail_template_mediaUpdateWithoutLanguageInput, {
    nullable: false
  })
  update!: Mail_template_mediaUpdateWithoutLanguageInput;

  @TypeGraphQL.Field(_type => Mail_template_mediaCreateWithoutLanguageInput, {
    nullable: false
  })
  create!: Mail_template_mediaCreateWithoutLanguageInput;
}
