import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Event_action_ruleUpdateWithoutEvent_actionInput } from "../inputs/Event_action_ruleUpdateWithoutEvent_actionInput";
import { Event_action_ruleWhereUniqueInput } from "../inputs/Event_action_ruleWhereUniqueInput";

@TypeGraphQL.InputType("Event_action_ruleUpdateWithWhereUniqueWithoutEvent_actionInput", {})
export class Event_action_ruleUpdateWithWhereUniqueWithoutEvent_actionInput {
  @TypeGraphQL.Field(_type => Event_action_ruleWhereUniqueInput, {
    nullable: false
  })
  where!: Event_action_ruleWhereUniqueInput;

  @TypeGraphQL.Field(_type => Event_action_ruleUpdateWithoutEvent_actionInput, {
    nullable: false
  })
  data!: Event_action_ruleUpdateWithoutEvent_actionInput;
}
