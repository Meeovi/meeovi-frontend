import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_reviewAvgOrderByAggregateInput } from "../inputs/Product_reviewAvgOrderByAggregateInput";
import { Product_reviewCountOrderByAggregateInput } from "../inputs/Product_reviewCountOrderByAggregateInput";
import { Product_reviewMaxOrderByAggregateInput } from "../inputs/Product_reviewMaxOrderByAggregateInput";
import { Product_reviewMinOrderByAggregateInput } from "../inputs/Product_reviewMinOrderByAggregateInput";
import { Product_reviewSumOrderByAggregateInput } from "../inputs/Product_reviewSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Product_reviewOrderByWithAggregationInput", {})
export class Product_reviewOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  product_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  customer_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  sales_channel_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  language_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  external_user?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  external_email?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  title?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  content?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  points?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  status?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  comment?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  custom_fields?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  product_version_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Product_reviewCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Product_reviewCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_reviewAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Product_reviewAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_reviewMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Product_reviewMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_reviewMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Product_reviewMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_reviewSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Product_reviewSumOrderByAggregateInput | undefined;
}
