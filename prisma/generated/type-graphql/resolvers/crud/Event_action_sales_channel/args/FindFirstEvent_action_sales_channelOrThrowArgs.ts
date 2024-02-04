import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Event_action_sales_channelOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Event_action_sales_channelOrderByWithRelationAndSearchRelevanceInput";
import { Event_action_sales_channelWhereInput } from "../../../inputs/Event_action_sales_channelWhereInput";
import { Event_action_sales_channelWhereUniqueInput } from "../../../inputs/Event_action_sales_channelWhereUniqueInput";
import { Event_action_sales_channelScalarFieldEnum } from "../../../../enums/Event_action_sales_channelScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstEvent_action_sales_channelOrThrowArgs {
  @TypeGraphQL.Field(_type => Event_action_sales_channelWhereInput, {
    nullable: true
  })
  where?: Event_action_sales_channelWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Event_action_sales_channelOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Event_action_sales_channelOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Event_action_sales_channelWhereUniqueInput, {
    nullable: true
  })
  cursor?: Event_action_sales_channelWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Event_action_sales_channelScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"event_action_id" | "sales_channel_id"> | undefined;
}
