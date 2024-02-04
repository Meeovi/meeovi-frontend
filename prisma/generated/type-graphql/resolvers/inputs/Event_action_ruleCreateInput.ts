import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Event_actionCreateNestedOneWithoutEvent_action_ruleInput } from "../inputs/Event_actionCreateNestedOneWithoutEvent_action_ruleInput";
import { RuleCreateNestedOneWithoutEvent_action_ruleInput } from "../inputs/RuleCreateNestedOneWithoutEvent_action_ruleInput";

@TypeGraphQL.InputType("Event_action_ruleCreateInput", {})
export class Event_action_ruleCreateInput {
  @TypeGraphQL.Field(_type => Event_actionCreateNestedOneWithoutEvent_action_ruleInput, {
    nullable: false
  })
  event_action!: Event_actionCreateNestedOneWithoutEvent_action_ruleInput;

  @TypeGraphQL.Field(_type => RuleCreateNestedOneWithoutEvent_action_ruleInput, {
    nullable: false
  })
  rule!: RuleCreateNestedOneWithoutEvent_action_ruleInput;
}
