import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageUpdateWithoutLocale_language_translation_code_idTolocaleInput } from "../inputs/LanguageUpdateWithoutLocale_language_translation_code_idTolocaleInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpdateToOneWithWhereWithoutLocale_language_translation_code_idTolocaleInput", {})
export class LanguageUpdateToOneWithWhereWithoutLocale_language_translation_code_idTolocaleInput {
  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateWithoutLocale_language_translation_code_idTolocaleInput, {
    nullable: false
  })
  data!: LanguageUpdateWithoutLocale_language_translation_code_idTolocaleInput;
}
