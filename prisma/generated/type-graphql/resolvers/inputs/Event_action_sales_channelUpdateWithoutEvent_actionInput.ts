import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Sales_channelUpdateOneRequiredWithoutEvent_action_sales_channelNestedInput } from "../inputs/Sales_channelUpdateOneRequiredWithoutEvent_action_sales_channelNestedInput";

@TypeGraphQL.InputType("Event_action_sales_channelUpdateWithoutEvent_actionInput", {})
export class Event_action_sales_channelUpdateWithoutEvent_actionInput {
  @TypeGraphQL.Field(_type => Sales_channelUpdateOneRequiredWithoutEvent_action_sales_channelNestedInput, {
    nullable: true
  })
  sales_channel?: Sales_channelUpdateOneRequiredWithoutEvent_action_sales_channelNestedInput | undefined;
}
