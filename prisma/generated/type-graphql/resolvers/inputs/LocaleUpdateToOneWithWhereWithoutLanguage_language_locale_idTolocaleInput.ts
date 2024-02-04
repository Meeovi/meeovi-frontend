import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocaleUpdateWithoutLanguage_language_locale_idTolocaleInput } from "../inputs/LocaleUpdateWithoutLanguage_language_locale_idTolocaleInput";
import { LocaleWhereInput } from "../inputs/LocaleWhereInput";

@TypeGraphQL.InputType("LocaleUpdateToOneWithWhereWithoutLanguage_language_locale_idTolocaleInput", {})
export class LocaleUpdateToOneWithWhereWithoutLanguage_language_locale_idTolocaleInput {
  @TypeGraphQL.Field(_type => LocaleWhereInput, {
    nullable: true
  })
  where?: LocaleWhereInput | undefined;

  @TypeGraphQL.Field(_type => LocaleUpdateWithoutLanguage_language_locale_idTolocaleInput, {
    nullable: false
  })
  data!: LocaleUpdateWithoutLanguage_language_locale_idTolocaleInput;
}
