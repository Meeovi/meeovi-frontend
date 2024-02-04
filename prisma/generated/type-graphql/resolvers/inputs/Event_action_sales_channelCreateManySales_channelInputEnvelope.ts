import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Event_action_sales_channelCreateManySales_channelInput } from "../inputs/Event_action_sales_channelCreateManySales_channelInput";

@TypeGraphQL.InputType("Event_action_sales_channelCreateManySales_channelInputEnvelope", {})
export class Event_action_sales_channelCreateManySales_channelInputEnvelope {
  @TypeGraphQL.Field(_type => [Event_action_sales_channelCreateManySales_channelInput], {
    nullable: false
  })
  data!: Event_action_sales_channelCreateManySales_channelInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
