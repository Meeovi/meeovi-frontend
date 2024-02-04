import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Event_actionOrderByWithRelationAndSearchRelevanceInput } from "../inputs/Event_actionOrderByWithRelationAndSearchRelevanceInput";
import { RuleOrderByWithRelationAndSearchRelevanceInput } from "../inputs/RuleOrderByWithRelationAndSearchRelevanceInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Event_action_ruleOrderByWithRelationAndSearchRelevanceInput", {})
export class Event_action_ruleOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  event_action_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  rule_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Event_actionOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  event_action?: Event_actionOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => RuleOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  rule?: RuleOrderByWithRelationAndSearchRelevanceInput | undefined;
}
