import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { Event_actionRelationFilter } from "../inputs/Event_actionRelationFilter";
import { Event_action_ruleWhereInput } from "../inputs/Event_action_ruleWhereInput";
import { RuleRelationFilter } from "../inputs/RuleRelationFilter";
import { event_action_ruleEvent_action_idRule_idCompoundUniqueInput } from "../inputs/event_action_ruleEvent_action_idRule_idCompoundUniqueInput";

@TypeGraphQL.InputType("Event_action_ruleWhereUniqueInput", {})
export class Event_action_ruleWhereUniqueInput {
  @TypeGraphQL.Field(_type => event_action_ruleEvent_action_idRule_idCompoundUniqueInput, {
    nullable: true
  })
  event_action_id_rule_id?: event_action_ruleEvent_action_idRule_idCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [Event_action_ruleWhereInput], {
    nullable: true
  })
  AND?: Event_action_ruleWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Event_action_ruleWhereInput], {
    nullable: true
  })
  OR?: Event_action_ruleWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Event_action_ruleWhereInput], {
    nullable: true
  })
  NOT?: Event_action_ruleWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  event_action_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  rule_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => Event_actionRelationFilter, {
    nullable: true
  })
  event_action?: Event_actionRelationFilter | undefined;

  @TypeGraphQL.Field(_type => RuleRelationFilter, {
    nullable: true
  })
  rule?: RuleRelationFilter | undefined;
}
