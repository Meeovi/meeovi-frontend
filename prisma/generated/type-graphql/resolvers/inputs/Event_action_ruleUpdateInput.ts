import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Event_actionUpdateOneRequiredWithoutEvent_action_ruleNestedInput } from "../inputs/Event_actionUpdateOneRequiredWithoutEvent_action_ruleNestedInput";
import { RuleUpdateOneRequiredWithoutEvent_action_ruleNestedInput } from "../inputs/RuleUpdateOneRequiredWithoutEvent_action_ruleNestedInput";

@TypeGraphQL.InputType("Event_action_ruleUpdateInput", {})
export class Event_action_ruleUpdateInput {
  @TypeGraphQL.Field(_type => Event_actionUpdateOneRequiredWithoutEvent_action_ruleNestedInput, {
    nullable: true
  })
  event_action?: Event_actionUpdateOneRequiredWithoutEvent_action_ruleNestedInput | undefined;

  @TypeGraphQL.Field(_type => RuleUpdateOneRequiredWithoutEvent_action_ruleNestedInput, {
    nullable: true
  })
  rule?: RuleUpdateOneRequiredWithoutEvent_action_ruleNestedInput | undefined;
}
