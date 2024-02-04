import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Event_action_ruleCreateWithoutRuleInput } from "../inputs/Event_action_ruleCreateWithoutRuleInput";
import { Event_action_ruleUpdateWithoutRuleInput } from "../inputs/Event_action_ruleUpdateWithoutRuleInput";
import { Event_action_ruleWhereUniqueInput } from "../inputs/Event_action_ruleWhereUniqueInput";

@TypeGraphQL.InputType("Event_action_ruleUpsertWithWhereUniqueWithoutRuleInput", {})
export class Event_action_ruleUpsertWithWhereUniqueWithoutRuleInput {
  @TypeGraphQL.Field(_type => Event_action_ruleWhereUniqueInput, {
    nullable: false
  })
  where!: Event_action_ruleWhereUniqueInput;

  @TypeGraphQL.Field(_type => Event_action_ruleUpdateWithoutRuleInput, {
    nullable: false
  })
  update!: Event_action_ruleUpdateWithoutRuleInput;

  @TypeGraphQL.Field(_type => Event_action_ruleCreateWithoutRuleInput, {
    nullable: false
  })
  create!: Event_action_ruleCreateWithoutRuleInput;
}
