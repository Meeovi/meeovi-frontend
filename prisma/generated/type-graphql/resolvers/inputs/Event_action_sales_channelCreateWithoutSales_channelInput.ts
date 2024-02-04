import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Event_actionCreateNestedOneWithoutEvent_action_sales_channelInput } from "../inputs/Event_actionCreateNestedOneWithoutEvent_action_sales_channelInput";

@TypeGraphQL.InputType("Event_action_sales_channelCreateWithoutSales_channelInput", {})
export class Event_action_sales_channelCreateWithoutSales_channelInput {
  @TypeGraphQL.Field(_type => Event_actionCreateNestedOneWithoutEvent_action_sales_channelInput, {
    nullable: false
  })
  event_action!: Event_actionCreateNestedOneWithoutEvent_action_sales_channelInput;
}
