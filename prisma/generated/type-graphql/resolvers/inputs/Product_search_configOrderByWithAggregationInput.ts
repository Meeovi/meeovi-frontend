import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_search_configAvgOrderByAggregateInput } from "../inputs/Product_search_configAvgOrderByAggregateInput";
import { Product_search_configCountOrderByAggregateInput } from "../inputs/Product_search_configCountOrderByAggregateInput";
import { Product_search_configMaxOrderByAggregateInput } from "../inputs/Product_search_configMaxOrderByAggregateInput";
import { Product_search_configMinOrderByAggregateInput } from "../inputs/Product_search_configMinOrderByAggregateInput";
import { Product_search_configSumOrderByAggregateInput } from "../inputs/Product_search_configSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Product_search_configOrderByWithAggregationInput", {})
export class Product_search_configOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  language_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  and_logic?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  min_search_length?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  excluded_terms?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Product_search_configCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Product_search_configCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_search_configAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Product_search_configAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_search_configMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Product_search_configMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_search_configMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Product_search_configMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_search_configSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Product_search_configSumOrderByAggregateInput | undefined;
}
