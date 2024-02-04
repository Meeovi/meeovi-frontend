import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Number_range_sales_channelWhereInput } from "../../../inputs/Number_range_sales_channelWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyNumber_range_sales_channelArgs {
  @TypeGraphQL.Field(_type => Number_range_sales_channelWhereInput, {
    nullable: true
  })
  where?: Number_range_sales_channelWhereInput | undefined;
}
