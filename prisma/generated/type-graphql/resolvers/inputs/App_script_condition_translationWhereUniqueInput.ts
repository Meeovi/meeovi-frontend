import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_script_conditionRelationFilter } from "../inputs/App_script_conditionRelationFilter";
import { App_script_condition_translationWhereInput } from "../inputs/App_script_condition_translationWhereInput";
import { BytesFilter } from "../inputs/BytesFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { LanguageRelationFilter } from "../inputs/LanguageRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { app_script_condition_translationApp_script_condition_idLanguage_idCompoundUniqueInput } from "../inputs/app_script_condition_translationApp_script_condition_idLanguage_idCompoundUniqueInput";

@TypeGraphQL.InputType("App_script_condition_translationWhereUniqueInput", {})
export class App_script_condition_translationWhereUniqueInput {
  @TypeGraphQL.Field(_type => app_script_condition_translationApp_script_condition_idLanguage_idCompoundUniqueInput, {
    nullable: true
  })
  app_script_condition_id_language_id?: app_script_condition_translationApp_script_condition_idLanguage_idCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [App_script_condition_translationWhereInput], {
    nullable: true
  })
  AND?: App_script_condition_translationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_script_condition_translationWhereInput], {
    nullable: true
  })
  OR?: App_script_condition_translationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_script_condition_translationWhereInput], {
    nullable: true
  })
  NOT?: App_script_condition_translationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  app_script_condition_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  language_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => App_script_conditionRelationFilter, {
    nullable: true
  })
  app_script_condition?: App_script_conditionRelationFilter | undefined;

  @TypeGraphQL.Field(_type => LanguageRelationFilter, {
    nullable: true
  })
  language?: LanguageRelationFilter | undefined;
}
