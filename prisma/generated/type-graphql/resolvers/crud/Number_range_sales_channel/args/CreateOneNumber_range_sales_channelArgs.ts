import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Number_range_sales_channelCreateInput } from "../../../inputs/Number_range_sales_channelCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneNumber_range_sales_channelArgs {
  @TypeGraphQL.Field(_type => Number_range_sales_channelCreateInput, {
    nullable: false
  })
  data!: Number_range_sales_channelCreateInput;
}
