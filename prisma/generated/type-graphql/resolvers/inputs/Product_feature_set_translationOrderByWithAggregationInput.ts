import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_feature_set_translationCountOrderByAggregateInput } from "../inputs/Product_feature_set_translationCountOrderByAggregateInput";
import { Product_feature_set_translationMaxOrderByAggregateInput } from "../inputs/Product_feature_set_translationMaxOrderByAggregateInput";
import { Product_feature_set_translationMinOrderByAggregateInput } from "../inputs/Product_feature_set_translationMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Product_feature_set_translationOrderByWithAggregationInput", {})
export class Product_feature_set_translationOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  product_feature_set_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  language_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  name?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  description?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Product_feature_set_translationCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Product_feature_set_translationCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_feature_set_translationMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Product_feature_set_translationMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_feature_set_translationMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Product_feature_set_translationMinOrderByAggregateInput | undefined;
}
