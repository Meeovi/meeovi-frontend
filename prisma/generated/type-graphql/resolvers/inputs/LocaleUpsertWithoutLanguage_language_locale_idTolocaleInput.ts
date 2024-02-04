import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocaleCreateWithoutLanguage_language_locale_idTolocaleInput } from "../inputs/LocaleCreateWithoutLanguage_language_locale_idTolocaleInput";
import { LocaleUpdateWithoutLanguage_language_locale_idTolocaleInput } from "../inputs/LocaleUpdateWithoutLanguage_language_locale_idTolocaleInput";
import { LocaleWhereInput } from "../inputs/LocaleWhereInput";

@TypeGraphQL.InputType("LocaleUpsertWithoutLanguage_language_locale_idTolocaleInput", {})
export class LocaleUpsertWithoutLanguage_language_locale_idTolocaleInput {
  @TypeGraphQL.Field(_type => LocaleUpdateWithoutLanguage_language_locale_idTolocaleInput, {
    nullable: false
  })
  update!: LocaleUpdateWithoutLanguage_language_locale_idTolocaleInput;

  @TypeGraphQL.Field(_type => LocaleCreateWithoutLanguage_language_locale_idTolocaleInput, {
    nullable: false
  })
  create!: LocaleCreateWithoutLanguage_language_locale_idTolocaleInput;

  @TypeGraphQL.Field(_type => LocaleWhereInput, {
    nullable: true
  })
  where?: LocaleWhereInput | undefined;
}
