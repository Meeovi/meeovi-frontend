import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_administration_snippetListRelationFilter } from "../inputs/App_administration_snippetListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { LanguageListRelationFilter } from "../inputs/LanguageListRelationFilter";
import { LanguageNullableRelationFilter } from "../inputs/LanguageNullableRelationFilter";
import { LocaleWhereInput } from "../inputs/LocaleWhereInput";
import { Locale_translationListRelationFilter } from "../inputs/Locale_translationListRelationFilter";
import { UserListRelationFilter } from "../inputs/UserListRelationFilter";

@TypeGraphQL.InputType("LocaleWhereUniqueInput", {})
export class LocaleWhereUniqueInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  id?: Buffer | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  code?: string | undefined;

  @TypeGraphQL.Field(_type => [LocaleWhereInput], {
    nullable: true
  })
  AND?: LocaleWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocaleWhereInput], {
    nullable: true
  })
  OR?: LocaleWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocaleWhereInput], {
    nullable: true
  })
  NOT?: LocaleWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => App_administration_snippetListRelationFilter, {
    nullable: true
  })
  app_administration_snippet?: App_administration_snippetListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => LanguageListRelationFilter, {
    nullable: true
  })
  language_language_locale_idTolocale?: LanguageListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => LanguageNullableRelationFilter, {
    nullable: true
  })
  language_language_translation_code_idTolocale?: LanguageNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Locale_translationListRelationFilter, {
    nullable: true
  })
  locale_translation?: Locale_translationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => UserListRelationFilter, {
    nullable: true
  })
  user?: UserListRelationFilter | undefined;
}
