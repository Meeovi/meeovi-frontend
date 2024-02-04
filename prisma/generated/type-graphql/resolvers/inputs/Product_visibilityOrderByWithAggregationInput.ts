import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_visibilityAvgOrderByAggregateInput } from "../inputs/Product_visibilityAvgOrderByAggregateInput";
import { Product_visibilityCountOrderByAggregateInput } from "../inputs/Product_visibilityCountOrderByAggregateInput";
import { Product_visibilityMaxOrderByAggregateInput } from "../inputs/Product_visibilityMaxOrderByAggregateInput";
import { Product_visibilityMinOrderByAggregateInput } from "../inputs/Product_visibilityMinOrderByAggregateInput";
import { Product_visibilitySumOrderByAggregateInput } from "../inputs/Product_visibilitySumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Product_visibilityOrderByWithAggregationInput", {})
export class Product_visibilityOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

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
  sales_channel_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  visibility?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Product_visibilityCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Product_visibilityCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_visibilityAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Product_visibilityAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_visibilityMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Product_visibilityMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_visibilityMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Product_visibilityMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_visibilitySumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Product_visibilitySumOrderByAggregateInput | undefined;
}
