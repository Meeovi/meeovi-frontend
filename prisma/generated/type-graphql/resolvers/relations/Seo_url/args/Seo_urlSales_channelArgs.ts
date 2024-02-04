import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channelWhereInput } from "../../../inputs/Sales_channelWhereInput";

@TypeGraphQL.ArgsType()
export class Seo_urlSales_channelArgs {
  @TypeGraphQL.Field(_type => Sales_channelWhereInput, {
    nullable: true
  })
  where?: Sales_channelWhereInput | undefined;
}
