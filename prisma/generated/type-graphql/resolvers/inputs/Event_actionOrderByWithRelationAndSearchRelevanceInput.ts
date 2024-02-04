import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Event_actionOrderByRelevanceInput } from "../inputs/Event_actionOrderByRelevanceInput";
import { Event_action_ruleOrderByRelationAggregateInput } from "../inputs/Event_action_ruleOrderByRelationAggregateInput";
import { Event_action_sales_channelOrderByRelationAggregateInput } from "../inputs/Event_action_sales_channelOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Event_actionOrderByWithRelationAndSearchRelevanceInput", {})
export class Event_actionOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  title?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  event_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  action_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  config?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  custom_fields?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  active?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  migrated_flow_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Event_action_ruleOrderByRelationAggregateInput, {
    nullable: true
  })
  event_action_rule?: Event_action_ruleOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Event_action_sales_channelOrderByRelationAggregateInput, {
    nullable: true
  })
  event_action_sales_channel?: Event_action_sales_channelOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Event_actionOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: Event_actionOrderByRelevanceInput | undefined;
}
