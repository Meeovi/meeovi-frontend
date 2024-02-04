import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Number_range_sales_channelOrderByWithAggregationInput } from "../../../inputs/Number_range_sales_channelOrderByWithAggregationInput";
import { Number_range_sales_channelScalarWhereWithAggregatesInput } from "../../../inputs/Number_range_sales_channelScalarWhereWithAggregatesInput";
import { Number_range_sales_channelWhereInput } from "../../../inputs/Number_range_sales_channelWhereInput";
import { Number_range_sales_channelScalarFieldEnum } from "../../../../enums/Number_range_sales_channelScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByNumber_range_sales_channelArgs {
  @TypeGraphQL.Field(_type => Number_range_sales_channelWhereInput, {
    nullable: true
  })
  where?: Number_range_sales_channelWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Number_range_sales_channelOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Number_range_sales_channelOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Number_range_sales_channelScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "number_range_id" | "sales_channel_id" | "number_range_type_id" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Number_range_sales_channelScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Number_range_sales_channelScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
