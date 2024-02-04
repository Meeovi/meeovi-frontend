import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutLocale_language_translation_code_idTolocaleInput } from "../inputs/LanguageCreateOrConnectWithoutLocale_language_translation_code_idTolocaleInput";
import { LanguageCreateWithoutLocale_language_translation_code_idTolocaleInput } from "../inputs/LanguageCreateWithoutLocale_language_translation_code_idTolocaleInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageCreateNestedOneWithoutLocale_language_translation_code_idTolocaleInput", {})
export class LanguageCreateNestedOneWithoutLocale_language_translation_code_idTolocaleInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutLocale_language_translation_code_idTolocaleInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutLocale_language_translation_code_idTolocaleInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutLocale_language_translation_code_idTolocaleInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutLocale_language_translation_code_idTolocaleInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;
}
