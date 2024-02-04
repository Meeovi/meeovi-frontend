import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Event_action_sales_channelCreateInput } from "../../../inputs/Event_action_sales_channelCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneEvent_action_sales_channelArgs {
  @TypeGraphQL.Field(_type => Event_action_sales_channelCreateInput, {
    nullable: false
  })
  data!: Event_action_sales_channelCreateInput;
}
