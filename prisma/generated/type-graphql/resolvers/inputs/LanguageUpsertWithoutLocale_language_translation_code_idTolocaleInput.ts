import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutLocale_language_translation_code_idTolocaleInput } from "../inputs/LanguageCreateWithoutLocale_language_translation_code_idTolocaleInput";
import { LanguageUpdateWithoutLocale_language_translation_code_idTolocaleInput } from "../inputs/LanguageUpdateWithoutLocale_language_translation_code_idTolocaleInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpsertWithoutLocale_language_translation_code_idTolocaleInput", {})
export class LanguageUpsertWithoutLocale_language_translation_code_idTolocaleInput {
  @TypeGraphQL.Field(_type => LanguageUpdateWithoutLocale_language_translation_code_idTolocaleInput, {
    nullable: false
  })
  update!: LanguageUpdateWithoutLocale_language_translation_code_idTolocaleInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutLocale_language_translation_code_idTolocaleInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutLocale_language_translation_code_idTolocaleInput;

  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;
}
