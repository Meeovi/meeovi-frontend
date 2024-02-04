import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppRelationFilter } from "../inputs/AppRelationFilter";
import { App_translationWhereInput } from "../inputs/App_translationWhereInput";
import { BytesFilter } from "../inputs/BytesFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { LanguageRelationFilter } from "../inputs/LanguageRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { app_translationApp_idLanguage_idCompoundUniqueInput } from "../inputs/app_translationApp_idLanguage_idCompoundUniqueInput";

@TypeGraphQL.InputType("App_translationWhereUniqueInput", {})
export class App_translationWhereUniqueInput {
  @TypeGraphQL.Field(_type => app_translationApp_idLanguage_idCompoundUniqueInput, {
    nullable: true
  })
  app_id_language_id?: app_translationApp_idLanguage_idCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [App_translationWhereInput], {
    nullable: true
  })
  AND?: App_translationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_translationWhereInput], {
    nullable: true
  })
  OR?: App_translationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_translationWhereInput], {
    nullable: true
  })
  NOT?: App_translationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  app_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  language_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  label?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  description?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  privacy_policy_extensions?: StringNullableFilter | undefined;

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

  @TypeGraphQL.Field(_type => AppRelationFilter, {
    nullable: true
  })
  app?: AppRelationFilter | undefined;

  @TypeGraphQL.Field(_type => LanguageRelationFilter, {
    nullable: true
  })
  language?: LanguageRelationFilter | undefined;
}
