import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_administration_snippetUpdateManyWithoutLocaleNestedInput } from "../inputs/App_administration_snippetUpdateManyWithoutLocaleNestedInput";
import { BytesFieldUpdateOperationsInput } from "../inputs/BytesFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { LanguageUpdateOneWithoutLocale_language_translation_code_idTolocaleNestedInput } from "../inputs/LanguageUpdateOneWithoutLocale_language_translation_code_idTolocaleNestedInput";
import { Locale_translationUpdateManyWithoutLocaleNestedInput } from "../inputs/Locale_translationUpdateManyWithoutLocaleNestedInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateManyWithoutLocaleNestedInput } from "../inputs/UserUpdateManyWithoutLocaleNestedInput";

@TypeGraphQL.InputType("LocaleUpdateWithoutLanguage_language_locale_idTolocaleInput", {})
export class LocaleUpdateWithoutLanguage_language_locale_idTolocaleInput {
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

  @TypeGraphQL.Field(_type => App_administration_snippetUpdateManyWithoutLocaleNestedInput, {
    nullable: true
  })
  app_administration_snippet?: App_administration_snippetUpdateManyWithoutLocaleNestedInput | undefined;

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
