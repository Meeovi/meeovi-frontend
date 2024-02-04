import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_feature_setCountOrderByAggregateInput } from "../inputs/Product_feature_setCountOrderByAggregateInput";
import { Product_feature_setMaxOrderByAggregateInput } from "../inputs/Product_feature_setMaxOrderByAggregateInput";
import { Product_feature_setMinOrderByAggregateInput } from "../inputs/Product_feature_setMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Product_feature_setOrderByWithAggregationInput", {})
export class Product_feature_setOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  features?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Product_feature_setCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Product_feature_setCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_feature_setMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Product_feature_setMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_feature_setMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Product_feature_setMinOrderByAggregateInput | undefined;
}
