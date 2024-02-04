import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Event_action_ruleOrderByWithAggregationInput } from "../../../inputs/Event_action_ruleOrderByWithAggregationInput";
import { Event_action_ruleScalarWhereWithAggregatesInput } from "../../../inputs/Event_action_ruleScalarWhereWithAggregatesInput";
import { Event_action_ruleWhereInput } from "../../../inputs/Event_action_ruleWhereInput";
import { Event_action_ruleScalarFieldEnum } from "../../../../enums/Event_action_ruleScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByEvent_action_ruleArgs {
  @TypeGraphQL.Field(_type => Event_action_ruleWhereInput, {
    nullable: true
  })
  where?: Event_action_ruleWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Event_action_ruleOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Event_action_ruleOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Event_action_ruleScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"event_action_id" | "rule_id">;

  @TypeGraphQL.Field(_type => Event_action_ruleScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Event_action_ruleScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
