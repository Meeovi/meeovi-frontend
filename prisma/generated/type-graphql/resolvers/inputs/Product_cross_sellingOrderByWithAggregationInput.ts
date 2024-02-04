import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_cross_sellingAvgOrderByAggregateInput } from "../inputs/Product_cross_sellingAvgOrderByAggregateInput";
import { Product_cross_sellingCountOrderByAggregateInput } from "../inputs/Product_cross_sellingCountOrderByAggregateInput";
import { Product_cross_sellingMaxOrderByAggregateInput } from "../inputs/Product_cross_sellingMaxOrderByAggregateInput";
import { Product_cross_sellingMinOrderByAggregateInput } from "../inputs/Product_cross_sellingMinOrderByAggregateInput";
import { Product_cross_sellingSumOrderByAggregateInput } from "../inputs/Product_cross_sellingSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Product_cross_sellingOrderByWithAggregationInput", {})
export class Product_cross_sellingOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  position?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  sort_by?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  sort_direction?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  active?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  limit?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  product_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  product_version_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  product_stream_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Product_cross_sellingCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Product_cross_sellingCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_cross_sellingAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Product_cross_sellingAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_cross_sellingMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Product_cross_sellingMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_cross_sellingMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Product_cross_sellingMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_cross_sellingSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Product_cross_sellingSumOrderByAggregateInput | undefined;
}
