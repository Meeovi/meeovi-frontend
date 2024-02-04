import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Event_action_sales_channelWhereInput } from "../inputs/Event_action_sales_channelWhereInput";

@TypeGraphQL.InputType("Event_action_sales_channelListRelationFilter", {})
export class Event_action_sales_channelListRelationFilter {
  @TypeGraphQL.Field(_type => Event_action_sales_channelWhereInput, {
    nullable: true
  })
  every?: Event_action_sales_channelWhereInput | undefined;

  @TypeGraphQL.Field(_type => Event_action_sales_channelWhereInput, {
    nullable: true
  })
  some?: Event_action_sales_channelWhereInput | undefined;

  @TypeGraphQL.Field(_type => Event_action_sales_channelWhereInput, {
    nullable: true
  })
  none?: Event_action_sales_channelWhereInput | undefined;
}
