import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_group_registration_sales_channelsCountOrderByAggregateInput } from "../inputs/Customer_group_registration_sales_channelsCountOrderByAggregateInput";
import { Customer_group_registration_sales_channelsMaxOrderByAggregateInput } from "../inputs/Customer_group_registration_sales_channelsMaxOrderByAggregateInput";
import { Customer_group_registration_sales_channelsMinOrderByAggregateInput } from "../inputs/Customer_group_registration_sales_channelsMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Customer_group_registration_sales_channelsOrderByWithAggregationInput", {})
export class Customer_group_registration_sales_channelsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  customer_group_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  sales_channel_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Customer_group_registration_sales_channelsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Customer_group_registration_sales_channelsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Customer_group_registration_sales_channelsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Customer_group_registration_sales_channelsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Customer_group_registration_sales_channelsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Customer_group_registration_sales_channelsMinOrderByAggregateInput | undefined;
}
