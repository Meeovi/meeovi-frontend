import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channelWhereInput } from "../../../inputs/Sales_channelWhereInput";

@TypeGraphQL.ArgsType()
export class System_configSales_channelArgs {
  @TypeGraphQL.Field(_type => Sales_channelWhereInput, {
    nullable: true
  })
  where?: Sales_channelWhereInput | undefined;
}
