import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Number_range_sales_channelUpdateInput } from "../../../inputs/Number_range_sales_channelUpdateInput";
import { Number_range_sales_channelWhereUniqueInput } from "../../../inputs/Number_range_sales_channelWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneNumber_range_sales_channelArgs {
  @TypeGraphQL.Field(_type => Number_range_sales_channelUpdateInput, {
    nullable: false
  })
  data!: Number_range_sales_channelUpdateInput;

  @TypeGraphQL.Field(_type => Number_range_sales_channelWhereUniqueInput, {
    nullable: false
  })
  where!: Number_range_sales_channelWhereUniqueInput;
}
