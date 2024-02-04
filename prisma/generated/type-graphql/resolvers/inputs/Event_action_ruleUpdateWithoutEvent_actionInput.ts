import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RuleUpdateOneRequiredWithoutEvent_action_ruleNestedInput } from "../inputs/RuleUpdateOneRequiredWithoutEvent_action_ruleNestedInput";

@TypeGraphQL.InputType("Event_action_ruleUpdateWithoutEvent_actionInput", {})
export class Event_action_ruleUpdateWithoutEvent_actionInput {
  @TypeGraphQL.Field(_type => RuleUpdateOneRequiredWithoutEvent_action_ruleNestedInput, {
    nullable: true
  })
  rule?: RuleUpdateOneRequiredWithoutEvent_action_ruleNestedInput | undefined;
}
