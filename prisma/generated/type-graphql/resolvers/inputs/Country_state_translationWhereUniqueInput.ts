import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { Country_stateRelationFilter } from "../inputs/Country_stateRelationFilter";
import { Country_state_translationWhereInput } from "../inputs/Country_state_translationWhereInput";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { LanguageRelationFilter } from "../inputs/LanguageRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { country_state_translationCountry_state_idLanguage_idCompoundUniqueInput } from "../inputs/country_state_translationCountry_state_idLanguage_idCompoundUniqueInput";

@TypeGraphQL.InputType("Country_state_translationWhereUniqueInput", {})
export class Country_state_translationWhereUniqueInput {
  @TypeGraphQL.Field(_type => country_state_translationCountry_state_idLanguage_idCompoundUniqueInput, {
    nullable: true
  })
  country_state_id_language_id?: country_state_translationCountry_state_idLanguage_idCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [Country_state_translationWhereInput], {
    nullable: true
  })
  AND?: Country_state_translationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Country_state_translationWhereInput], {
    nullable: true
  })
  OR?: Country_state_translationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Country_state_translationWhereInput], {
    nullable: true
  })
  NOT?: Country_state_translationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  country_state_id?: BytesFilter | undefined;

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
  custom_fields?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => Country_stateRelationFilter, {
    nullable: true
  })
  country_state?: Country_stateRelationFilter | undefined;

  @TypeGraphQL.Field(_type => LanguageRelationFilter, {
    nullable: true
  })
  language?: LanguageRelationFilter | undefined;
}
