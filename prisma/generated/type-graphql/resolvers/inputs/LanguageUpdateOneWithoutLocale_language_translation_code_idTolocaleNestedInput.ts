import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutLocale_language_translation_code_idTolocaleInput } from "../inputs/LanguageCreateOrConnectWithoutLocale_language_translation_code_idTolocaleInput";
import { LanguageCreateWithoutLocale_language_translation_code_idTolocaleInput } from "../inputs/LanguageCreateWithoutLocale_language_translation_code_idTolocaleInput";
import { LanguageUpdateToOneWithWhereWithoutLocale_language_translation_code_idTolocaleInput } from "../inputs/LanguageUpdateToOneWithWhereWithoutLocale_language_translation_code_idTolocaleInput";
import { LanguageUpsertWithoutLocale_language_translation_code_idTolocaleInput } from "../inputs/LanguageUpsertWithoutLocale_language_translation_code_idTolocaleInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageUpdateOneWithoutLocale_language_translation_code_idTolocaleNestedInput", {})
export class LanguageUpdateOneWithoutLocale_language_translation_code_idTolocaleNestedInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutLocale_language_translation_code_idTolocaleInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutLocale_language_translation_code_idTolocaleInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutLocale_language_translation_code_idTolocaleInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutLocale_language_translation_code_idTolocaleInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpsertWithoutLocale_language_translation_code_idTolocaleInput, {
    nullable: true
  })
  upsert?: LanguageUpsertWithoutLocale_language_translation_code_idTolocaleInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  disconnect?: LanguageWhereInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  delete?: LanguageWhereInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateToOneWithWhereWithoutLocale_language_translation_code_idTolocaleInput, {
    nullable: true
  })
  update?: LanguageUpdateToOneWithWhereWithoutLocale_language_translation_code_idTolocaleInput | undefined;
}
