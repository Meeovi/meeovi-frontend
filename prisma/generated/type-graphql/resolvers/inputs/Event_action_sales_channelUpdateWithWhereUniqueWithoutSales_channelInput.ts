import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Event_action_sales_channelUpdateWithoutSales_channelInput } from "../inputs/Event_action_sales_channelUpdateWithoutSales_channelInput";
import { Event_action_sales_channelWhereUniqueInput } from "../inputs/Event_action_sales_channelWhereUniqueInput";

@TypeGraphQL.InputType("Event_action_sales_channelUpdateWithWhereUniqueWithoutSales_channelInput", {})
export class Event_action_sales_channelUpdateWithWhereUniqueWithoutSales_channelInput {
  @TypeGraphQL.Field(_type => Event_action_sales_channelWhereUniqueInput, {
    nullable: false
  })
  where!: Event_action_sales_channelWhereUniqueInput;

  @TypeGraphQL.Field(_type => Event_action_sales_channelUpdateWithoutSales_channelInput, {
    nullable: false
  })
  data!: Event_action_sales_channelUpdateWithoutSales_channelInput;
}
