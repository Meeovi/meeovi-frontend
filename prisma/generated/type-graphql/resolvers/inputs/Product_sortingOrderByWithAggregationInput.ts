import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_sortingAvgOrderByAggregateInput } from "../inputs/Product_sortingAvgOrderByAggregateInput";
import { Product_sortingCountOrderByAggregateInput } from "../inputs/Product_sortingCountOrderByAggregateInput";
import { Product_sortingMaxOrderByAggregateInput } from "../inputs/Product_sortingMaxOrderByAggregateInput";
import { Product_sortingMinOrderByAggregateInput } from "../inputs/Product_sortingMinOrderByAggregateInput";
import { Product_sortingSumOrderByAggregateInput } from "../inputs/Product_sortingSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Product_sortingOrderByWithAggregationInput", {})
export class Product_sortingOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  url_key?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  priority?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  active?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  fields?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  locked?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Product_sortingCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Product_sortingCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_sortingAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Product_sortingAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_sortingMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Product_sortingMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_sortingMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Product_sortingMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_sortingSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Product_sortingSumOrderByAggregateInput | undefined;
}
