import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Event_action_sales_channelCreateManyInput } from "../../../inputs/Event_action_sales_channelCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyEvent_action_sales_channelArgs {
  @TypeGraphQL.Field(_type => [Event_action_sales_channelCreateManyInput], {
    nullable: false
  })
  data!: Event_action_sales_channelCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
