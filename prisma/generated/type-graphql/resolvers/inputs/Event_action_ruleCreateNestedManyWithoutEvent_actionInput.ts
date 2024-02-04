import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Event_action_ruleCreateManyEvent_actionInputEnvelope } from "../inputs/Event_action_ruleCreateManyEvent_actionInputEnvelope";
import { Event_action_ruleCreateOrConnectWithoutEvent_actionInput } from "../inputs/Event_action_ruleCreateOrConnectWithoutEvent_actionInput";
import { Event_action_ruleCreateWithoutEvent_actionInput } from "../inputs/Event_action_ruleCreateWithoutEvent_actionInput";
import { Event_action_ruleWhereUniqueInput } from "../inputs/Event_action_ruleWhereUniqueInput";

@TypeGraphQL.InputType("Event_action_ruleCreateNestedManyWithoutEvent_actionInput", {})
export class Event_action_ruleCreateNestedManyWithoutEvent_actionInput {
  @TypeGraphQL.Field(_type => [Event_action_ruleCreateWithoutEvent_actionInput], {
    nullable: true
  })
  create?: Event_action_ruleCreateWithoutEvent_actionInput[] | undefined;

  @TypeGraphQL.Field(_type => [Event_action_ruleCreateOrConnectWithoutEvent_actionInput], {
    nullable: true
  })
  connectOrCreate?: Event_action_ruleCreateOrConnectWithoutEvent_actionInput[] | undefined;

  @TypeGraphQL.Field(_type => Event_action_ruleCreateManyEvent_actionInputEnvelope, {
    nullable: true
  })
  createMany?: Event_action_ruleCreateManyEvent_actionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Event_action_ruleWhereUniqueInput], {
    nullable: true
  })
  connect?: Event_action_ruleWhereUniqueInput[] | undefined;
}
