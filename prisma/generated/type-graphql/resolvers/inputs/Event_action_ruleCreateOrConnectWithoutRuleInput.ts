import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Event_action_ruleCreateWithoutRuleInput } from "../inputs/Event_action_ruleCreateWithoutRuleInput";
import { Event_action_ruleWhereUniqueInput } from "../inputs/Event_action_ruleWhereUniqueInput";

@TypeGraphQL.InputType("Event_action_ruleCreateOrConnectWithoutRuleInput", {})
export class Event_action_ruleCreateOrConnectWithoutRuleInput {
  @TypeGraphQL.Field(_type => Event_action_ruleWhereUniqueInput, {
    nullable: false
  })
  where!: Event_action_ruleWhereUniqueInput;

  @TypeGraphQL.Field(_type => Event_action_ruleCreateWithoutRuleInput, {
    nullable: false
  })
  create!: Event_action_ruleCreateWithoutRuleInput;
}
