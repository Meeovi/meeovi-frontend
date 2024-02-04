import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_administration_snippetCreateNestedManyWithoutLocaleInput } from "../inputs/App_administration_snippetCreateNestedManyWithoutLocaleInput";
import { LanguageCreateNestedOneWithoutLocale_language_translation_code_idTolocaleInput } from "../inputs/LanguageCreateNestedOneWithoutLocale_language_translation_code_idTolocaleInput";
import { Locale_translationCreateNestedManyWithoutLocaleInput } from "../inputs/Locale_translationCreateNestedManyWithoutLocaleInput";
import { UserCreateNestedManyWithoutLocaleInput } from "../inputs/UserCreateNestedManyWithoutLocaleInput";

@TypeGraphQL.InputType("LocaleCreateWithoutLanguage_language_locale_idTolocaleInput", {})
export class LocaleCreateWithoutLanguage_language_locale_idTolocaleInput {
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

  @TypeGraphQL.Field(_type => LanguageCreateNestedOneWithoutLocale_language_translation_code_idTolocaleInput, {
    nullable: true
  })
  language_language_translation_code_idTolocale?: LanguageCreateNestedOneWithoutLocale_language_translation_code_idTolocaleInput | undefined;

  @TypeGraphQL.Field(_type => Locale_translationCreateNestedManyWithoutLocaleInput, {
    nullable: true
  })
  locale_translation?: Locale_translationCreateNestedManyWithoutLocaleInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedManyWithoutLocaleInput, {
    nullable: true
  })
  user?: UserCreateNestedManyWithoutLocaleInput | undefined;
}
