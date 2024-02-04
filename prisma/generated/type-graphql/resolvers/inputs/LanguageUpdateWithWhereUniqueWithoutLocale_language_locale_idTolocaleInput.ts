import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageUpdateWithoutLocale_language_locale_idTolocaleInput } from "../inputs/LanguageUpdateWithoutLocale_language_locale_idTolocaleInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageUpdateWithWhereUniqueWithoutLocale_language_locale_idTolocaleInput", {})
export class LanguageUpdateWithWhereUniqueWithoutLocale_language_locale_idTolocaleInput {
  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: false
  })
  where!: LanguageWhereUniqueInput;

  @TypeGraphQL.Field(_type => LanguageUpdateWithoutLocale_language_locale_idTolocaleInput, {
    nullable: false
  })
  data!: LanguageUpdateWithoutLocale_language_locale_idTolocaleInput;
}
