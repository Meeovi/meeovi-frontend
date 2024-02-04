import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Locale_translationUpdateWithoutLanguageInput } from "../inputs/Locale_translationUpdateWithoutLanguageInput";
import { Locale_translationWhereUniqueInput } from "../inputs/Locale_translationWhereUniqueInput";

@TypeGraphQL.InputType("Locale_translationUpdateWithWhereUniqueWithoutLanguageInput", {})
export class Locale_translationUpdateWithWhereUniqueWithoutLanguageInput {
  @TypeGraphQL.Field(_type => Locale_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Locale_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Locale_translationUpdateWithoutLanguageInput, {
    nullable: false
  })
  data!: Locale_translationUpdateWithoutLanguageInput;
}
