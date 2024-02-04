import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { Landing_pageRelationFilter } from "../inputs/Landing_pageRelationFilter";
import { Landing_page_translationWhereInput } from "../inputs/Landing_page_translationWhereInput";
import { LanguageRelationFilter } from "../inputs/LanguageRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { landing_page_translationLanding_page_idLanding_page_version_idLanguage_idCompoundUniqueInput } from "../inputs/landing_page_translationLanding_page_idLanding_page_version_idLanguage_idCompoundUniqueInput";

@TypeGraphQL.InputType("Landing_page_translationWhereUniqueInput", {})
export class Landing_page_translationWhereUniqueInput {
  @TypeGraphQL.Field(_type => landing_page_translationLanding_page_idLanding_page_version_idLanguage_idCompoundUniqueInput, {
    nullable: true
  })
  landing_page_id_landing_page_version_id_language_id?: landing_page_translationLanding_page_idLanding_page_version_idLanguage_idCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [Landing_page_translationWhereInput], {
    nullable: true
  })
  AND?: Landing_page_translationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Landing_page_translationWhereInput], {
    nullable: true
  })
  OR?: Landing_page_translationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Landing_page_translationWhereInput], {
    nullable: true
  })
  NOT?: Landing_page_translationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  landing_page_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  landing_page_version_id?: BytesFilter | undefined;

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
  url?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  meta_title?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  meta_description?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  keywords?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  custom_fields?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  slot_config?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => Landing_pageRelationFilter, {
    nullable: true
  })
  landing_page?: Landing_pageRelationFilter | undefined;

  @TypeGraphQL.Field(_type => LanguageRelationFilter, {
    nullable: true
  })
  language?: LanguageRelationFilter | undefined;
}
