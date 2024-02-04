import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channelWhereInput } from "../../../inputs/Sales_channelWhereInput";

@TypeGraphQL.ArgsType()
export class Sales_channel_api_contextSales_channelArgs {
  @TypeGraphQL.Field(_type => Sales_channelWhereInput, {
    nullable: true
  })
  where?: Sales_channelWhereInput | undefined;
}
