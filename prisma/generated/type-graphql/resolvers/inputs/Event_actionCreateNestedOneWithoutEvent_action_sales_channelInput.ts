import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Event_actionCreateOrConnectWithoutEvent_action_sales_channelInput } from "../inputs/Event_actionCreateOrConnectWithoutEvent_action_sales_channelInput";
import { Event_actionCreateWithoutEvent_action_sales_channelInput } from "../inputs/Event_actionCreateWithoutEvent_action_sales_channelInput";
import { Event_actionWhereUniqueInput } from "../inputs/Event_actionWhereUniqueInput";

@TypeGraphQL.InputType("Event_actionCreateNestedOneWithoutEvent_action_sales_channelInput", {})
export class Event_actionCreateNestedOneWithoutEvent_action_sales_channelInput {
  @TypeGraphQL.Field(_type => Event_actionCreateWithoutEvent_action_sales_channelInput, {
    nullable: true
  })
  create?: Event_actionCreateWithoutEvent_action_sales_channelInput | undefined;

  @TypeGraphQL.Field(_type => Event_actionCreateOrConnectWithoutEvent_action_sales_channelInput, {
    nullable: true
  })
  connectOrCreate?: Event_actionCreateOrConnectWithoutEvent_action_sales_channelInput | undefined;

  @TypeGraphQL.Field(_type => Event_actionWhereUniqueInput, {
    nullable: true
  })
  connect?: Event_actionWhereUniqueInput | undefined;
}
