import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Event_actionCreateWithoutEvent_action_ruleInput } from "../inputs/Event_actionCreateWithoutEvent_action_ruleInput";
import { Event_actionWhereUniqueInput } from "../inputs/Event_actionWhereUniqueInput";

@TypeGraphQL.InputType("Event_actionCreateOrConnectWithoutEvent_action_ruleInput", {})
export class Event_actionCreateOrConnectWithoutEvent_action_ruleInput {
  @TypeGraphQL.Field(_type => Event_actionWhereUniqueInput, {
    nullable: false
  })
  where!: Event_actionWhereUniqueInput;

  @TypeGraphQL.Field(_type => Event_actionCreateWithoutEvent_action_ruleInput, {
    nullable: false
  })
  create!: Event_actionCreateWithoutEvent_action_ruleInput;
}
