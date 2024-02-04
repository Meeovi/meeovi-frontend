import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_search_keywordAvgOrderByAggregateInput } from "../inputs/Product_search_keywordAvgOrderByAggregateInput";
import { Product_search_keywordCountOrderByAggregateInput } from "../inputs/Product_search_keywordCountOrderByAggregateInput";
import { Product_search_keywordMaxOrderByAggregateInput } from "../inputs/Product_search_keywordMaxOrderByAggregateInput";
import { Product_search_keywordMinOrderByAggregateInput } from "../inputs/Product_search_keywordMinOrderByAggregateInput";
import { Product_search_keywordSumOrderByAggregateInput } from "../inputs/Product_search_keywordSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Product_search_keywordOrderByWithAggregationInput", {})
export class Product_search_keywordOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  version_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  language_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  product_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  product_version_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  keyword?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  ranking?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Product_search_keywordCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Product_search_keywordCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_search_keywordAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Product_search_keywordAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_search_keywordMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Product_search_keywordMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_search_keywordMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Product_search_keywordMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_search_keywordSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Product_search_keywordSumOrderByAggregateInput | undefined;
}
