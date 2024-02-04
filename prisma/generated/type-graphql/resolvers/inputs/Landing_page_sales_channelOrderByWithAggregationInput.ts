import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Landing_page_sales_channelCountOrderByAggregateInput } from "../inputs/Landing_page_sales_channelCountOrderByAggregateInput";
import { Landing_page_sales_channelMaxOrderByAggregateInput } from "../inputs/Landing_page_sales_channelMaxOrderByAggregateInput";
import { Landing_page_sales_channelMinOrderByAggregateInput } from "../inputs/Landing_page_sales_channelMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Landing_page_sales_channelOrderByWithAggregationInput", {})
export class Landing_page_sales_channelOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  landing_page_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  landing_page_version_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  sales_channel_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Landing_page_sales_channelCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Landing_page_sales_channelCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Landing_page_sales_channelMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Landing_page_sales_channelMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Landing_page_sales_channelMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Landing_page_sales_channelMinOrderByAggregateInput | undefined;
}
