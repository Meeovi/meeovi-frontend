import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { LanguageRelationFilter } from "../inputs/LanguageRelationFilter";
import { LocaleRelationFilter } from "../inputs/LocaleRelationFilter";
import { Locale_translationWhereInput } from "../inputs/Locale_translationWhereInput";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { locale_translationLocale_idLanguage_idCompoundUniqueInput } from "../inputs/locale_translationLocale_idLanguage_idCompoundUniqueInput";

@TypeGraphQL.InputType("Locale_translationWhereUniqueInput", {})
export class Locale_translationWhereUniqueInput {
  @TypeGraphQL.Field(_type => locale_translationLocale_idLanguage_idCompoundUniqueInput, {
    nullable: true
  })
  locale_id_language_id?: locale_translationLocale_idLanguage_idCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [Locale_translationWhereInput], {
    nullable: true
  })
  AND?: Locale_translationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Locale_translationWhereInput], {
    nullable: true
  })
  OR?: Locale_translationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Locale_translationWhereInput], {
    nullable: true
  })
  NOT?: Locale_translationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  locale_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  language_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  territory?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  custom_fields?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => LanguageRelationFilter, {
    nullable: true
  })
  language?: LanguageRelationFilter | undefined;

  @TypeGraphQL.Field(_type => LocaleRelationFilter, {
    nullable: true
  })
  locale?: LocaleRelationFilter | undefined;
}
