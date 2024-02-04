import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Event_actionCreateWithoutEvent_action_sales_channelInput } from "../inputs/Event_actionCreateWithoutEvent_action_sales_channelInput";
import { Event_actionWhereUniqueInput } from "../inputs/Event_actionWhereUniqueInput";

@TypeGraphQL.InputType("Event_actionCreateOrConnectWithoutEvent_action_sales_channelInput", {})
export class Event_actionCreateOrConnectWithoutEvent_action_sales_channelInput {
  @TypeGraphQL.Field(_type => Event_actionWhereUniqueInput, {
    nullable: false
  })
  where!: Event_actionWhereUniqueInput;

  @TypeGraphQL.Field(_type => Event_actionCreateWithoutEvent_action_sales_channelInput, {
    nullable: false
  })
  create!: Event_actionCreateWithoutEvent_action_sales_channelInput;
}
