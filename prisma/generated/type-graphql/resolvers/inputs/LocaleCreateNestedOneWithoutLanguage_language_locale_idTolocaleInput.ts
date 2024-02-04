import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocaleCreateOrConnectWithoutLanguage_language_locale_idTolocaleInput } from "../inputs/LocaleCreateOrConnectWithoutLanguage_language_locale_idTolocaleInput";
import { LocaleCreateWithoutLanguage_language_locale_idTolocaleInput } from "../inputs/LocaleCreateWithoutLanguage_language_locale_idTolocaleInput";
import { LocaleWhereUniqueInput } from "../inputs/LocaleWhereUniqueInput";

@TypeGraphQL.InputType("LocaleCreateNestedOneWithoutLanguage_language_locale_idTolocaleInput", {})
export class LocaleCreateNestedOneWithoutLanguage_language_locale_idTolocaleInput {
  @TypeGraphQL.Field(_type => LocaleCreateWithoutLanguage_language_locale_idTolocaleInput, {
    nullable: true
  })
  create?: LocaleCreateWithoutLanguage_language_locale_idTolocaleInput | undefined;

  @TypeGraphQL.Field(_type => LocaleCreateOrConnectWithoutLanguage_language_locale_idTolocaleInput, {
    nullable: true
  })
  connectOrCreate?: LocaleCreateOrConnectWithoutLanguage_language_locale_idTolocaleInput | undefined;

  @TypeGraphQL.Field(_type => LocaleWhereUniqueInput, {
    nullable: true
  })
  connect?: LocaleWhereUniqueInput | undefined;
}
