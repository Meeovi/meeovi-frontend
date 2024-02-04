import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { CountryRelationFilter } from "../inputs/CountryRelationFilter";
import { Country_translationWhereInput } from "../inputs/Country_translationWhereInput";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { LanguageRelationFilter } from "../inputs/LanguageRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { country_translationCountry_idLanguage_idCompoundUniqueInput } from "../inputs/country_translationCountry_idLanguage_idCompoundUniqueInput";

@TypeGraphQL.InputType("Country_translationWhereUniqueInput", {})
export class Country_translationWhereUniqueInput {
  @TypeGraphQL.Field(_type => country_translationCountry_idLanguage_idCompoundUniqueInput, {
    nullable: true
  })
  country_id_language_id?: country_translationCountry_idLanguage_idCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [Country_translationWhereInput], {
    nullable: true
  })
  AND?: Country_translationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Country_translationWhereInput], {
    nullable: true
  })
  OR?: Country_translationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Country_translationWhereInput], {
    nullable: true
  })
  NOT?: Country_translationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  country_id?: BytesFilter | undefined;

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
  address_format?: StringNullableFilter | undefined;

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

  @TypeGraphQL.Field(_type => CountryRelationFilter, {
    nullable: true
  })
  country?: CountryRelationFilter | undefined;

  @TypeGraphQL.Field(_type => LanguageRelationFilter, {
    nullable: true
  })
  language?: LanguageRelationFilter | undefined;
}
