import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Event_action_ruleOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Event_action_ruleOrderByWithRelationAndSearchRelevanceInput";
import { Event_action_ruleWhereInput } from "../../../inputs/Event_action_ruleWhereInput";
import { Event_action_ruleWhereUniqueInput } from "../../../inputs/Event_action_ruleWhereUniqueInput";
import { Event_action_ruleScalarFieldEnum } from "../../../../enums/Event_action_ruleScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class RuleEvent_action_ruleArgs {
  @TypeGraphQL.Field(_type => Event_action_ruleWhereInput, {
    nullable: true
  })
  where?: Event_action_ruleWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Event_action_ruleOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Event_action_ruleOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Event_action_ruleWhereUniqueInput, {
    nullable: true
  })
  cursor?: Event_action_ruleWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Event_action_ruleScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"event_action_id" | "rule_id"> | undefined;
}
