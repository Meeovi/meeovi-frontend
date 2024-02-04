import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppRelationFilter } from "../inputs/AppRelationFilter";
import { App_script_condition_translationListRelationFilter } from "../inputs/App_script_condition_translationListRelationFilter";
import { BoolFilter } from "../inputs/BoolFilter";
import { BytesFilter } from "../inputs/BytesFilter";
import { BytesNullableFilter } from "../inputs/BytesNullableFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { Rule_conditionListRelationFilter } from "../inputs/Rule_conditionListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("App_script_conditionWhereInput", {})
export class App_script_conditionWhereInput {
  @TypeGraphQL.Field(_type => [App_script_conditionWhereInput], {
    nullable: true
  })
  AND?: App_script_conditionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_script_conditionWhereInput], {
    nullable: true
  })
  OR?: App_script_conditionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_script_conditionWhereInput], {
    nullable: true
  })
  NOT?: App_script_conditionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  app_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  active?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  group?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  script?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  constraints?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  config?: StringNullableFilter | undefined;

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

  @TypeGraphQL.Field(_type => App_script_condition_translationListRelationFilter, {
    nullable: true
  })
  app_script_condition_translation?: App_script_condition_translationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Rule_conditionListRelationFilter, {
    nullable: true
  })
  rule_condition?: Rule_conditionListRelationFilter | undefined;
}
