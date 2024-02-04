import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { BytesNullableFilter } from "../inputs/BytesNullableFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { Event_actionWhereInput } from "../inputs/Event_actionWhereInput";
import { Event_action_ruleListRelationFilter } from "../inputs/Event_action_ruleListRelationFilter";
import { Event_action_sales_channelListRelationFilter } from "../inputs/Event_action_sales_channelListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("Event_actionWhereUniqueInput", {})
export class Event_actionWhereUniqueInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  id?: Buffer | undefined;

  @TypeGraphQL.Field(_type => [Event_actionWhereInput], {
    nullable: true
  })
  AND?: Event_actionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Event_actionWhereInput], {
    nullable: true
  })
  OR?: Event_actionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Event_actionWhereInput], {
    nullable: true
  })
  NOT?: Event_actionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  title?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  event_name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  action_name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  config?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  custom_fields?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  active?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  migrated_flow_id?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => Event_action_ruleListRelationFilter, {
    nullable: true
  })
  event_action_rule?: Event_action_ruleListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Event_action_sales_channelListRelationFilter, {
    nullable: true
  })
  event_action_sales_channel?: Event_action_sales_channelListRelationFilter | undefined;
}
