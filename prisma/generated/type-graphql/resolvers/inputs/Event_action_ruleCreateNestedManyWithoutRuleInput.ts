import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Event_action_ruleCreateManyRuleInputEnvelope } from "../inputs/Event_action_ruleCreateManyRuleInputEnvelope";
import { Event_action_ruleCreateOrConnectWithoutRuleInput } from "../inputs/Event_action_ruleCreateOrConnectWithoutRuleInput";
import { Event_action_ruleCreateWithoutRuleInput } from "../inputs/Event_action_ruleCreateWithoutRuleInput";
import { Event_action_ruleWhereUniqueInput } from "../inputs/Event_action_ruleWhereUniqueInput";

@TypeGraphQL.InputType("Event_action_ruleCreateNestedManyWithoutRuleInput", {})
export class Event_action_ruleCreateNestedManyWithoutRuleInput {
  @TypeGraphQL.Field(_type => [Event_action_ruleCreateWithoutRuleInput], {
    nullable: true
  })
  create?: Event_action_ruleCreateWithoutRuleInput[] | undefined;

  @TypeGraphQL.Field(_type => [Event_action_ruleCreateOrConnectWithoutRuleInput], {
    nullable: true
  })
  connectOrCreate?: Event_action_ruleCreateOrConnectWithoutRuleInput[] | undefined;

  @TypeGraphQL.Field(_type => Event_action_ruleCreateManyRuleInputEnvelope, {
    nullable: true
  })
  createMany?: Event_action_ruleCreateManyRuleInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Event_action_ruleWhereUniqueInput], {
    nullable: true
  })
  connect?: Event_action_ruleWhereUniqueInput[] | undefined;
}
