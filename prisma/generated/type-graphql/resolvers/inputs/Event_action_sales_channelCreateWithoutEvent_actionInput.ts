import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Sales_channelCreateNestedOneWithoutEvent_action_sales_channelInput } from "../inputs/Sales_channelCreateNestedOneWithoutEvent_action_sales_channelInput";

@TypeGraphQL.InputType("Event_action_sales_channelCreateWithoutEvent_actionInput", {})
export class Event_action_sales_channelCreateWithoutEvent_actionInput {
  @TypeGraphQL.Field(_type => Sales_channelCreateNestedOneWithoutEvent_action_sales_channelInput, {
    nullable: false
  })
  sales_channel!: Sales_channelCreateNestedOneWithoutEvent_action_sales_channelInput;
}
