import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_search_config_fieldAvgOrderByAggregateInput } from "../inputs/Product_search_config_fieldAvgOrderByAggregateInput";
import { Product_search_config_fieldCountOrderByAggregateInput } from "../inputs/Product_search_config_fieldCountOrderByAggregateInput";
import { Product_search_config_fieldMaxOrderByAggregateInput } from "../inputs/Product_search_config_fieldMaxOrderByAggregateInput";
import { Product_search_config_fieldMinOrderByAggregateInput } from "../inputs/Product_search_config_fieldMinOrderByAggregateInput";
import { Product_search_config_fieldSumOrderByAggregateInput } from "../inputs/Product_search_config_fieldSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Product_search_config_fieldOrderByWithAggregationInput", {})
export class Product_search_config_fieldOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  product_search_config_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  custom_field_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  field?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tokenize?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  searchable?: "asc" | "desc" | undefined;

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

  @TypeGraphQL.Field(_type => Product_search_config_fieldCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Product_search_config_fieldCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_search_config_fieldAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Product_search_config_fieldAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_search_config_fieldMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Product_search_config_fieldMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_search_config_fieldMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Product_search_config_fieldMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_search_config_fieldSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Product_search_config_fieldSumOrderByAggregateInput | undefined;
}
