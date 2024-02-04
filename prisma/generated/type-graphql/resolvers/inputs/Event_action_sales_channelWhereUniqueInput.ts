import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { Event_actionRelationFilter } from "../inputs/Event_actionRelationFilter";
import { Event_action_sales_channelWhereInput } from "../inputs/Event_action_sales_channelWhereInput";
import { Sales_channelRelationFilter } from "../inputs/Sales_channelRelationFilter";
import { event_action_sales_channelEvent_action_idSales_channel_idCompoundUniqueInput } from "../inputs/event_action_sales_channelEvent_action_idSales_channel_idCompoundUniqueInput";

@TypeGraphQL.InputType("Event_action_sales_channelWhereUniqueInput", {})
export class Event_action_sales_channelWhereUniqueInput {
  @TypeGraphQL.Field(_type => event_action_sales_channelEvent_action_idSales_channel_idCompoundUniqueInput, {
    nullable: true
  })
  event_action_id_sales_channel_id?: event_action_sales_channelEvent_action_idSales_channel_idCompoundUniqueInput | undefined;

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
