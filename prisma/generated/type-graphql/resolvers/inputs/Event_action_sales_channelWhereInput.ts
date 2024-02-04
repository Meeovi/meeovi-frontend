import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { Event_actionRelationFilter } from "../inputs/Event_actionRelationFilter";
import { Sales_channelRelationFilter } from "../inputs/Sales_channelRelationFilter";

@TypeGraphQL.InputType("Event_action_sales_channelWhereInput", {})
export class Event_action_sales_channelWhereInput {
  @TypeGraphQL.Field(_type => [Event_action_sales_channelWhereInput], {
    nullable: true
  })
  AND?: Event_action_sales_channelWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Event_action_sales_channelWhereInput], {
    nullable: true
  })
  OR?: Event_action_sales_channelWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Event_action_sales_channelWhereInput], {
    nullable: true
  })
  NOT?: Event_action_sales_channelWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  event_action_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  sales_channel_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => Event_actionRelationFilter, {
    nullable: true
  })
  event_action?: Event_actionRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Sales_channelRelationFilter, {
    nullable: true
  })
  sales_channel?: Sales_channelRelationFilter | undefined;
}
