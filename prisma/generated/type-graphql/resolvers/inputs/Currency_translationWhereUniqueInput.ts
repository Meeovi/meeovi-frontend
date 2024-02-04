import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { CurrencyRelationFilter } from "../inputs/CurrencyRelationFilter";
import { Currency_translationWhereInput } from "../inputs/Currency_translationWhereInput";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { LanguageRelationFilter } from "../inputs/LanguageRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { currency_translationCurrency_idLanguage_idCompoundUniqueInput } from "../inputs/currency_translationCurrency_idLanguage_idCompoundUniqueInput";

@TypeGraphQL.InputType("Currency_translationWhereUniqueInput", {})
export class Currency_translationWhereUniqueInput {
  @TypeGraphQL.Field(_type => currency_translationCurrency_idLanguage_idCompoundUniqueInput, {
    nullable: true
  })
  currency_id_language_id?: currency_translationCurrency_idLanguage_idCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [Currency_translationWhereInput], {
    nullable: true
  })
  AND?: Currency_translationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Currency_translationWhereInput], {
    nullable: true
  })
  OR?: Currency_translationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Currency_translationWhereInput], {
    nullable: true
  })
  NOT?: Currency_translationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  currency_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  language_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  short_name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  name?: StringNullableFilter | undefined;

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

  @TypeGraphQL.Field(_type => CurrencyRelationFilter, {
    nullable: true
  })
  currency?: CurrencyRelationFilter | undefined;

  @TypeGraphQL.Field(_type => LanguageRelationFilter, {
    nullable: true
  })
  language?: LanguageRelationFilter | undefined;
}
