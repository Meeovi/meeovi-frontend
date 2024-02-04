import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Event_action_ruleCountOrderByAggregateInput } from "../inputs/Event_action_ruleCountOrderByAggregateInput";
import { Event_action_ruleMaxOrderByAggregateInput } from "../inputs/Event_action_ruleMaxOrderByAggregateInput";
import { Event_action_ruleMinOrderByAggregateInput } from "../inputs/Event_action_ruleMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Event_action_ruleOrderByWithAggregationInput", {})
export class Event_action_ruleOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  event_action_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  rule_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Event_action_ruleCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Event_action_ruleCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Event_action_ruleMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Event_action_ruleMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Event_action_ruleMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Event_action_ruleMinOrderByAggregateInput | undefined;
}
