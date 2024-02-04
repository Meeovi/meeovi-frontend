import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocaleCreateOrConnectWithoutLanguage_language_translation_code_idTolocaleInput } from "../inputs/LocaleCreateOrConnectWithoutLanguage_language_translation_code_idTolocaleInput";
import { LocaleCreateWithoutLanguage_language_translation_code_idTolocaleInput } from "../inputs/LocaleCreateWithoutLanguage_language_translation_code_idTolocaleInput";
import { LocaleUpdateToOneWithWhereWithoutLanguage_language_translation_code_idTolocaleInput } from "../inputs/LocaleUpdateToOneWithWhereWithoutLanguage_language_translation_code_idTolocaleInput";
import { LocaleUpsertWithoutLanguage_language_translation_code_idTolocaleInput } from "../inputs/LocaleUpsertWithoutLanguage_language_translation_code_idTolocaleInput";
import { LocaleWhereInput } from "../inputs/LocaleWhereInput";
import { LocaleWhereUniqueInput } from "../inputs/LocaleWhereUniqueInput";

@TypeGraphQL.InputType("LocaleUpdateOneWithoutLanguage_language_translation_code_idTolocaleNestedInput", {})
export class LocaleUpdateOneWithoutLanguage_language_translation_code_idTolocaleNestedInput {
  @TypeGraphQL.Field(_type => LocaleCreateWithoutLanguage_language_translation_code_idTolocaleInput, {
    nullable: true
  })
  create?: LocaleCreateWithoutLanguage_language_translation_code_idTolocaleInput | undefined;

  @TypeGraphQL.Field(_type => LocaleCreateOrConnectWithoutLanguage_language_translation_code_idTolocaleInput, {
    nullable: true
  })
  connectOrCreate?: LocaleCreateOrConnectWithoutLanguage_language_translation_code_idTolocaleInput | undefined;

  @TypeGraphQL.Field(_type => LocaleUpsertWithoutLanguage_language_translation_code_idTolocaleInput, {
    nullable: true
  })
  upsert?: LocaleUpsertWithoutLanguage_language_translation_code_idTolocaleInput | undefined;

  @TypeGraphQL.Field(_type => LocaleWhereInput, {
    nullable: true
  })
  disconnect?: LocaleWhereInput | undefined;

  @TypeGraphQL.Field(_type => LocaleWhereInput, {
    nullable: true
  })
  delete?: LocaleWhereInput | undefined;

  @TypeGraphQL.Field(_type => LocaleWhereUniqueInput, {
    nullable: true
  })
  connect?: LocaleWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => LocaleUpdateToOneWithWhereWithoutLanguage_language_translation_code_idTolocaleInput, {
    nullable: true
  })
  update?: LocaleUpdateToOneWithWhereWithoutLanguage_language_translation_code_idTolocaleInput | undefined;
}
