import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Event_action_sales_channelCountOrderByAggregateInput } from "../inputs/Event_action_sales_channelCountOrderByAggregateInput";
import { Event_action_sales_channelMaxOrderByAggregateInput } from "../inputs/Event_action_sales_channelMaxOrderByAggregateInput";
import { Event_action_sales_channelMinOrderByAggregateInput } from "../inputs/Event_action_sales_channelMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Event_action_sales_channelOrderByWithAggregationInput", {})
export class Event_action_sales_channelOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  event_action_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  sales_channel_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Event_action_sales_channelCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Event_action_sales_channelCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Event_action_sales_channelMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Event_action_sales_channelMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Event_action_sales_channelMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Event_action_sales_channelMinOrderByAggregateInput | undefined;
}
