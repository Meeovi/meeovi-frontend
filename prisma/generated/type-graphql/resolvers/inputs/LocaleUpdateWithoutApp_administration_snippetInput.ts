import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFieldUpdateOperationsInput } from "../inputs/BytesFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { LanguageUpdateManyWithoutLocale_language_locale_idTolocaleNestedInput } from "../inputs/LanguageUpdateManyWithoutLocale_language_locale_idTolocaleNestedInput";
import { LanguageUpdateOneWithoutLocale_language_translation_code_idTolocaleNestedInput } from "../inputs/LanguageUpdateOneWithoutLocale_language_translation_code_idTolocaleNestedInput";
import { Locale_translationUpdateManyWithoutLocaleNestedInput } from "../inputs/Locale_translationUpdateManyWithoutLocaleNestedInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateManyWithoutLocaleNestedInput } from "../inputs/UserUpdateManyWithoutLocaleNestedInput";

@TypeGraphQL.InputType("LocaleUpdateWithoutApp_administration_snippetInput", {})
export class LocaleUpdateWithoutApp_administration_snippetInput {
  @TypeGraphQL.Field(_type => BytesFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: BytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  code?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  created_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updated_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateManyWithoutLocale_language_locale_idTolocaleNestedInput, {
    nullable: true
  })
  language_language_locale_idTolocale?: LanguageUpdateManyWithoutLocale_language_locale_idTolocaleNestedInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateOneWithoutLocale_language_translation_code_idTolocaleNestedInput, {
    nullable: true
  })
  language_language_translation_code_idTolocale?: LanguageUpdateOneWithoutLocale_language_translation_code_idTolocaleNestedInput | undefined;

  @TypeGraphQL.Field(_type => Locale_translationUpdateManyWithoutLocaleNestedInput, {
    nullable: true
  })
  locale_translation?: Locale_translationUpdateManyWithoutLocaleNestedInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateManyWithoutLocaleNestedInput, {
    nullable: true
  })
  user?: UserUpdateManyWithoutLocaleNestedInput | undefined;
}
