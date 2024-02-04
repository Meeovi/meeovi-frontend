import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Number_range_sales_channelWhereUniqueInput } from "../../../inputs/Number_range_sales_channelWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueNumber_range_sales_channelArgs {
  @TypeGraphQL.Field(_type => Number_range_sales_channelWhereUniqueInput, {
    nullable: false
  })
  where!: Number_range_sales_channelWhereUniqueInput;
}
