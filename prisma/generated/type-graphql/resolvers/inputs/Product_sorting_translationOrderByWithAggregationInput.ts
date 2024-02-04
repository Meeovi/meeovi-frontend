import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_sorting_translationCountOrderByAggregateInput } from "../inputs/Product_sorting_translationCountOrderByAggregateInput";
import { Product_sorting_translationMaxOrderByAggregateInput } from "../inputs/Product_sorting_translationMaxOrderByAggregateInput";
import { Product_sorting_translationMinOrderByAggregateInput } from "../inputs/Product_sorting_translationMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Product_sorting_translationOrderByWithAggregationInput", {})
export class Product_sorting_translationOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  product_sorting_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  language_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  label?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Product_sorting_translationCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Product_sorting_translationCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_sorting_translationMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Product_sorting_translationMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_sorting_translationMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Product_sorting_translationMinOrderByAggregateInput | undefined;
}
