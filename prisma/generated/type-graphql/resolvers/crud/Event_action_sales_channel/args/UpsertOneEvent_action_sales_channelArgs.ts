import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Event_action_sales_channelCreateInput } from "../../../inputs/Event_action_sales_channelCreateInput";
import { Event_action_sales_channelUpdateInput } from "../../../inputs/Event_action_sales_channelUpdateInput";
import { Event_action_sales_channelWhereUniqueInput } from "../../../inputs/Event_action_sales_channelWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneEvent_action_sales_channelArgs {
  @TypeGraphQL.Field(_type => Event_action_sales_channelWhereUniqueInput, {
    nullable: false
  })
  where!: Event_action_sales_channelWhereUniqueInput;

  @TypeGraphQL.Field(_type => Event_action_sales_channelCreateInput, {
    nullable: false
  })
  create!: Event_action_sales_channelCreateInput;

  @TypeGraphQL.Field(_type => Event_action_sales_channelUpdateInput, {
    nullable: false
  })
  update!: Event_action_sales_channelUpdateInput;
}
