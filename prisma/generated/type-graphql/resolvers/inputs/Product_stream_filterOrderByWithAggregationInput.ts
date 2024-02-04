import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_stream_filterAvgOrderByAggregateInput } from "../inputs/Product_stream_filterAvgOrderByAggregateInput";
import { Product_stream_filterCountOrderByAggregateInput } from "../inputs/Product_stream_filterCountOrderByAggregateInput";
import { Product_stream_filterMaxOrderByAggregateInput } from "../inputs/Product_stream_filterMaxOrderByAggregateInput";
import { Product_stream_filterMinOrderByAggregateInput } from "../inputs/Product_stream_filterMinOrderByAggregateInput";
import { Product_stream_filterSumOrderByAggregateInput } from "../inputs/Product_stream_filterSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Product_stream_filterOrderByWithAggregationInput", {})
export class Product_stream_filterOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  product_stream_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  parent_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  field?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  operator?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  value?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  parameters?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  position?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  custom_fields?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Product_stream_filterCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Product_stream_filterCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_stream_filterAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Product_stream_filterAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_stream_filterMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Product_stream_filterMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_stream_filterMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Product_stream_filterMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_stream_filterSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Product_stream_filterSumOrderByAggregateInput | undefined;
}
