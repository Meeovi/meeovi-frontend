import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { Event_actionRelationFilter } from "../inputs/Event_actionRelationFilter";
import { RuleRelationFilter } from "../inputs/RuleRelationFilter";

@TypeGraphQL.InputType("Event_action_ruleWhereInput", {})
export class Event_action_ruleWhereInput {
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
