import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_flow_actionOrderByWithRelationAndSearchRelevanceInput } from "../inputs/App_flow_actionOrderByWithRelationAndSearchRelevanceInput";
import { FlowOrderByWithRelationAndSearchRelevanceInput } from "../inputs/FlowOrderByWithRelationAndSearchRelevanceInput";
import { Flow_sequenceOrderByRelationAggregateInput } from "../inputs/Flow_sequenceOrderByRelationAggregateInput";
import { Flow_sequenceOrderByRelevanceInput } from "../inputs/Flow_sequenceOrderByRelevanceInput";
import { RuleOrderByWithRelationAndSearchRelevanceInput } from "../inputs/RuleOrderByWithRelationAndSearchRelevanceInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Flow_sequenceOrderByWithRelationAndSearchRelevanceInput", {})
export class Flow_sequenceOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  flow_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  app_flow_action_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  parent_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  rule_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  action_name?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  config?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  position?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  display_group?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  true_case?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  custom_fields?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => App_flow_actionOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  app_flow_action?: App_flow_actionOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => FlowOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  flow?: FlowOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Flow_sequenceOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  flow_sequence?: Flow_sequenceOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Flow_sequenceOrderByRelationAggregateInput, {
    nullable: true
  })
  other_flow_sequence?: Flow_sequenceOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RuleOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  rule?: RuleOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Flow_sequenceOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: Flow_sequenceOrderByRelevanceInput | undefined;
}
