import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppRelationFilter } from "../inputs/AppRelationFilter";
import { App_flow_actionWhereInput } from "../inputs/App_flow_actionWhereInput";
import { App_flow_action_translationListRelationFilter } from "../inputs/App_flow_action_translationListRelationFilter";
import { BoolFilter } from "../inputs/BoolFilter";
import { BytesFilter } from "../inputs/BytesFilter";
import { BytesNullableFilter } from "../inputs/BytesNullableFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { Flow_sequenceListRelationFilter } from "../inputs/Flow_sequenceListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("App_flow_actionWhereUniqueInput", {})
export class App_flow_actionWhereUniqueInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  id?: Buffer | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => [App_flow_actionWhereInput], {
    nullable: true
  })
  AND?: App_flow_actionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_flow_actionWhereInput], {
    nullable: true
  })
  OR?: App_flow_actionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_flow_actionWhereInput], {
    nullable: true
  })
  NOT?: App_flow_actionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  app_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  badge?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  url?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  delayable?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  parameters?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  config?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  headers?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  requirements?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  icon?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  sw_icon?: StringNullableFilter | undefined;

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

  @TypeGraphQL.Field(_type => App_flow_action_translationListRelationFilter, {
    nullable: true
  })
  app_flow_action_translation?: App_flow_action_translationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Flow_sequenceListRelationFilter, {
    nullable: true
  })
  flow_sequence?: Flow_sequenceListRelationFilter | undefined;
}
