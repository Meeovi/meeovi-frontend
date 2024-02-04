import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Event_action_sales_channelOrderByWithAggregationInput } from "../../../inputs/Event_action_sales_channelOrderByWithAggregationInput";
import { Event_action_sales_channelScalarWhereWithAggregatesInput } from "../../../inputs/Event_action_sales_channelScalarWhereWithAggregatesInput";
import { Event_action_sales_channelWhereInput } from "../../../inputs/Event_action_sales_channelWhereInput";
import { Event_action_sales_channelScalarFieldEnum } from "../../../../enums/Event_action_sales_channelScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByEvent_action_sales_channelArgs {
  @TypeGraphQL.Field(_type => Event_action_sales_channelWhereInput, {
    nullable: true
  })
  where?: Event_action_sales_channelWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Event_action_sales_channelOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Event_action_sales_channelOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Event_action_sales_channelScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"event_action_id" | "sales_channel_id">;

  @TypeGraphQL.Field(_type => Event_action_sales_channelScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Event_action_sales_channelScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
