import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { Cms_pageRelationFilter } from "../inputs/Cms_pageRelationFilter";
import { Cms_page_translationWhereInput } from "../inputs/Cms_page_translationWhereInput";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { LanguageRelationFilter } from "../inputs/LanguageRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { cms_page_translationCms_page_idLanguage_idCms_page_version_idCompoundUniqueInput } from "../inputs/cms_page_translationCms_page_idLanguage_idCms_page_version_idCompoundUniqueInput";

@TypeGraphQL.InputType("Cms_page_translationWhereUniqueInput", {})
export class Cms_page_translationWhereUniqueInput {
  @TypeGraphQL.Field(_type => cms_page_translationCms_page_idLanguage_idCms_page_version_idCompoundUniqueInput, {
    nullable: true
  })
  cms_page_id_language_id_cms_page_version_id?: cms_page_translationCms_page_idLanguage_idCms_page_version_idCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [Cms_page_translationWhereInput], {
    nullable: true
  })
  AND?: Cms_page_translationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_page_translationWhereInput], {
    nullable: true
  })
  OR?: Cms_page_translationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_page_translationWhereInput], {
    nullable: true
  })
  NOT?: Cms_page_translationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  cms_page_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  cms_page_version_id?: BytesFilter | undefined;

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

  @TypeGraphQL.Field(_type => Cms_pageRelationFilter, {
    nullable: true
  })
  cms_page?: Cms_pageRelationFilter | undefined;

  @TypeGraphQL.Field(_type => LanguageRelationFilter, {
    nullable: true
  })
  language?: LanguageRelationFilter | undefined;
}
