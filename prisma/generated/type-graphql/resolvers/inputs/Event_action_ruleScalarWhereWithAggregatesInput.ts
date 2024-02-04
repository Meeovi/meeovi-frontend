import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesWithAggregatesFilter } from "../inputs/BytesWithAggregatesFilter";

@TypeGraphQL.InputType("Event_action_ruleScalarWhereWithAggregatesInput", {})
export class Event_action_ruleScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Event_action_ruleScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Event_action_ruleScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Event_action_ruleScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Event_action_ruleScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Event_action_ruleScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Event_action_ruleScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  event_action_id?: BytesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  rule_id?: BytesWithAggregatesFilter | undefined;
}
