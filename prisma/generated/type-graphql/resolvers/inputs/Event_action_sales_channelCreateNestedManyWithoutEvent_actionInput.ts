import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Event_action_sales_channelCreateManyEvent_actionInputEnvelope } from "../inputs/Event_action_sales_channelCreateManyEvent_actionInputEnvelope";
import { Event_action_sales_channelCreateOrConnectWithoutEvent_actionInput } from "../inputs/Event_action_sales_channelCreateOrConnectWithoutEvent_actionInput";
import { Event_action_sales_channelCreateWithoutEvent_actionInput } from "../inputs/Event_action_sales_channelCreateWithoutEvent_actionInput";
import { Event_action_sales_channelWhereUniqueInput } from "../inputs/Event_action_sales_channelWhereUniqueInput";

@TypeGraphQL.InputType("Event_action_sales_channelCreateNestedManyWithoutEvent_actionInput", {})
export class Event_action_sales_channelCreateNestedManyWithoutEvent_actionInput {
  @TypeGraphQL.Field(_type => [Event_action_sales_channelCreateWithoutEvent_actionInput], {
    nullable: true
  })
  create?: Event_action_sales_channelCreateWithoutEvent_actionInput[] | undefined;

  @TypeGraphQL.Field(_type => [Event_action_sales_channelCreateOrConnectWithoutEvent_actionInput], {
    nullable: true
  })
  connectOrCreate?: Event_action_sales_channelCreateOrConnectWithoutEvent_actionInput[] | undefined;

  @TypeGraphQL.Field(_type => Event_action_sales_channelCreateManyEvent_actionInputEnvelope, {
    nullable: true
  })
  createMany?: Event_action_sales_channelCreateManyEvent_actionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Event_action_sales_channelWhereUniqueInput], {
    nullable: true
  })
  connect?: Event_action_sales_channelWhereUniqueInput[] | undefined;
}
