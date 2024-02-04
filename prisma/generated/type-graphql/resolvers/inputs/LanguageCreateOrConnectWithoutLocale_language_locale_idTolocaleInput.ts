import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutLocale_language_locale_idTolocaleInput } from "../inputs/LanguageCreateWithoutLocale_language_locale_idTolocaleInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageCreateOrConnectWithoutLocale_language_locale_idTolocaleInput", {})
export class LanguageCreateOrConnectWithoutLocale_language_locale_idTolocaleInput {
  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: false
  })
  where!: LanguageWhereUniqueInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutLocale_language_locale_idTolocaleInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutLocale_language_locale_idTolocaleInput;
}
