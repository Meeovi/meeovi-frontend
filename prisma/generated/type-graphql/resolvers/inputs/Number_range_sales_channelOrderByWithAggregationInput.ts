import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Number_range_sales_channelCountOrderByAggregateInput } from "../inputs/Number_range_sales_channelCountOrderByAggregateInput";
import { Number_range_sales_channelMaxOrderByAggregateInput } from "../inputs/Number_range_sales_channelMaxOrderByAggregateInput";
import { Number_range_sales_channelMinOrderByAggregateInput } from "../inputs/Number_range_sales_channelMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Number_range_sales_channelOrderByWithAggregationInput", {})
export class Number_range_sales_channelOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  number_range_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  sales_channel_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  number_range_type_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Number_range_sales_channelCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Number_range_sales_channelCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Number_range_sales_channelMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Number_range_sales_channelMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Number_range_sales_channelMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Number_range_sales_channelMinOrderByAggregateInput | undefined;
}
