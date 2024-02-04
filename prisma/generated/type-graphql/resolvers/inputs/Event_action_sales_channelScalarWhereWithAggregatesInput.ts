import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesWithAggregatesFilter } from "../inputs/BytesWithAggregatesFilter";

@TypeGraphQL.InputType("Event_action_sales_channelScalarWhereWithAggregatesInput", {})
export class Event_action_sales_channelScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Event_action_sales_channelScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Event_action_sales_channelScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Event_action_sales_channelScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Event_action_sales_channelScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Event_action_sales_channelScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Event_action_sales_channelScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  event_action_id?: BytesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  sales_channel_id?: BytesWithAggregatesFilter | undefined;
}
