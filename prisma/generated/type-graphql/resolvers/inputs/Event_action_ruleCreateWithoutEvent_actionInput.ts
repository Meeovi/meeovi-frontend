import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RuleCreateNestedOneWithoutEvent_action_ruleInput } from "../inputs/RuleCreateNestedOneWithoutEvent_action_ruleInput";

@TypeGraphQL.InputType("Event_action_ruleCreateWithoutEvent_actionInput", {})
export class Event_action_ruleCreateWithoutEvent_actionInput {
  @TypeGraphQL.Field(_type => RuleCreateNestedOneWithoutEvent_action_ruleInput, {
    nullable: false
  })
  rule!: RuleCreateNestedOneWithoutEvent_action_ruleInput;
}
