import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Event_action_sales_channelCreateManySales_channelInputEnvelope } from "../inputs/Event_action_sales_channelCreateManySales_channelInputEnvelope";
import { Event_action_sales_channelCreateOrConnectWithoutSales_channelInput } from "../inputs/Event_action_sales_channelCreateOrConnectWithoutSales_channelInput";
import { Event_action_sales_channelCreateWithoutSales_channelInput } from "../inputs/Event_action_sales_channelCreateWithoutSales_channelInput";
import { Event_action_sales_channelWhereUniqueInput } from "../inputs/Event_action_sales_channelWhereUniqueInput";

@TypeGraphQL.InputType("Event_action_sales_channelCreateNestedManyWithoutSales_channelInput", {})
export class Event_action_sales_channelCreateNestedManyWithoutSales_channelInput {
  @TypeGraphQL.Field(_type => [Event_action_sales_channelCreateWithoutSales_channelInput], {
    nullable: true
  })
  create?: Event_action_sales_channelCreateWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => [Event_action_sales_channelCreateOrConnectWithoutSales_channelInput], {
    nullable: true
  })
  connectOrCreate?: Event_action_sales_channelCreateOrConnectWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => Event_action_sales_channelCreateManySales_channelInputEnvelope, {
    nullable: true
  })
  createMany?: Event_action_sales_channelCreateManySales_channelInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Event_action_sales_channelWhereUniqueInput], {
    nullable: true
  })
  connect?: Event_action_sales_channelWhereUniqueInput[] | undefined;
}
