import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_administration_snippetCreateNestedManyWithoutLocaleInput } from "../inputs/App_administration_snippetCreateNestedManyWithoutLocaleInput";
import { LanguageCreateNestedManyWithoutLocale_language_locale_idTolocaleInput } from "../inputs/LanguageCreateNestedManyWithoutLocale_language_locale_idTolocaleInput";
import { LanguageCreateNestedOneWithoutLocale_language_translation_code_idTolocaleInput } from "../inputs/LanguageCreateNestedOneWithoutLocale_language_translation_code_idTolocaleInput";
import { UserCreateNestedManyWithoutLocaleInput } from "../inputs/UserCreateNestedManyWithoutLocaleInput";

@TypeGraphQL.InputType("LocaleCreateWithoutLocale_translationInput", {})
export class LocaleCreateWithoutLocale_translationInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  code!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => App_administration_snippetCreateNestedManyWithoutLocaleInput, {
    nullable: true
  })
  app_administration_snippet?: App_administration_snippetCreateNestedManyWithoutLocaleInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateNestedManyWithoutLocale_language_locale_idTolocaleInput, {
    nullable: true
  })
  language_language_locale_idTolocale?: LanguageCreateNestedManyWithoutLocale_language_locale_idTolocaleInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateNestedOneWithoutLocale_language_translation_code_idTolocaleInput, {
    nullable: true
  })
  language_language_translation_code_idTolocale?: LanguageCreateNestedOneWithoutLocale_language_translation_code_idTolocaleInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedManyWithoutLocaleInput, {
    nullable: true
  })
  user?: UserCreateNestedManyWithoutLocaleInput | undefined;
}
