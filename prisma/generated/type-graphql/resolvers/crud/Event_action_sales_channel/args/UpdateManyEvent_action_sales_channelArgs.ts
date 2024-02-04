import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Event_action_sales_channelUpdateManyMutationInput } from "../../../inputs/Event_action_sales_channelUpdateManyMutationInput";
import { Event_action_sales_channelWhereInput } from "../../../inputs/Event_action_sales_channelWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyEvent_action_sales_channelArgs {
  @TypeGraphQL.Field(_type => Event_action_sales_channelUpdateManyMutationInput, {
    nullable: false
  })
  data!: Event_action_sales_channelUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Event_action_sales_channelWhereInput, {
    nullable: true
  })
  where?: Event_action_sales_channelWhereInput | undefined;
}
