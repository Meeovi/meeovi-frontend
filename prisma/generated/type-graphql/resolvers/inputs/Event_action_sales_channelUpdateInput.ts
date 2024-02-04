import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Event_actionUpdateOneRequiredWithoutEvent_action_sales_channelNestedInput } from "../inputs/Event_actionUpdateOneRequiredWithoutEvent_action_sales_channelNestedInput";
import { Sales_channelUpdateOneRequiredWithoutEvent_action_sales_channelNestedInput } from "../inputs/Sales_channelUpdateOneRequiredWithoutEvent_action_sales_channelNestedInput";

@TypeGraphQL.InputType("Event_action_sales_channelUpdateInput", {})
export class Event_action_sales_channelUpdateInput {
  @TypeGraphQL.Field(_type => Event_actionUpdateOneRequiredWithoutEvent_action_sales_channelNestedInput, {
    nullable: true
  })
  event_action?: Event_actionUpdateOneRequiredWithoutEvent_action_sales_channelNestedInput | undefined;

  @TypeGraphQL.Field(_type => Sales_channelUpdateOneRequiredWithoutEvent_action_sales_channelNestedInput, {
    nullable: true
  })
  sales_channel?: Sales_channelUpdateOneRequiredWithoutEvent_action_sales_channelNestedInput | undefined;
}
