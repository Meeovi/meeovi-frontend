import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Event_action_sales_channelWhereInput } from "../../../inputs/Event_action_sales_channelWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyEvent_action_sales_channelArgs {
  @TypeGraphQL.Field(_type => Event_action_sales_channelWhereInput, {
    nullable: true
  })
  where?: Event_action_sales_channelWhereInput | undefined;
}
