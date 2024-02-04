import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Event_actionCreateNestedOneWithoutEvent_action_ruleInput } from "../inputs/Event_actionCreateNestedOneWithoutEvent_action_ruleInput";

@TypeGraphQL.InputType("Event_action_ruleCreateWithoutRuleInput", {})
export class Event_action_ruleCreateWithoutRuleInput {
  @TypeGraphQL.Field(_type => Event_actionCreateNestedOneWithoutEvent_action_ruleInput, {
    nullable: false
  })
  event_action!: Event_actionCreateNestedOneWithoutEvent_action_ruleInput;
}
