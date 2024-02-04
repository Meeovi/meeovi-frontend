import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocaleCreateOrConnectWithoutLanguage_language_locale_idTolocaleInput } from "../inputs/LocaleCreateOrConnectWithoutLanguage_language_locale_idTolocaleInput";
import { LocaleCreateWithoutLanguage_language_locale_idTolocaleInput } from "../inputs/LocaleCreateWithoutLanguage_language_locale_idTolocaleInput";
import { LocaleUpdateToOneWithWhereWithoutLanguage_language_locale_idTolocaleInput } from "../inputs/LocaleUpdateToOneWithWhereWithoutLanguage_language_locale_idTolocaleInput";
import { LocaleUpsertWithoutLanguage_language_locale_idTolocaleInput } from "../inputs/LocaleUpsertWithoutLanguage_language_locale_idTolocaleInput";
import { LocaleWhereUniqueInput } from "../inputs/LocaleWhereUniqueInput";

@TypeGraphQL.InputType("LocaleUpdateOneRequiredWithoutLanguage_language_locale_idTolocaleNestedInput", {})
export class LocaleUpdateOneRequiredWithoutLanguage_language_locale_idTolocaleNestedInput {
  @TypeGraphQL.Field(_type => LocaleCreateWithoutLanguage_language_locale_idTolocaleInput, {
    nullable: true
  })
  create?: LocaleCreateWithoutLanguage_language_locale_idTolocaleInput | undefined;

  @TypeGraphQL.Field(_type => LocaleCreateOrConnectWithoutLanguage_language_locale_idTolocaleInput, {
    nullable: true
  })
  connectOrCreate?: LocaleCreateOrConnectWithoutLanguage_language_locale_idTolocaleInput | undefined;

  @TypeGraphQL.Field(_type => LocaleUpsertWithoutLanguage_language_locale_idTolocaleInput, {
    nullable: true
  })
  upsert?: LocaleUpsertWithoutLanguage_language_locale_idTolocaleInput | undefined;

  @TypeGraphQL.Field(_type => LocaleWhereUniqueInput, {
    nullable: true
  })
  connect?: LocaleWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => LocaleUpdateToOneWithWhereWithoutLanguage_language_locale_idTolocaleInput, {
    nullable: true
  })
  update?: LocaleUpdateToOneWithWhereWithoutLanguage_language_locale_idTolocaleInput | undefined;
}
