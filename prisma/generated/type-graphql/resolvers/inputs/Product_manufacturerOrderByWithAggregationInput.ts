import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_manufacturerCountOrderByAggregateInput } from "../inputs/Product_manufacturerCountOrderByAggregateInput";
import { Product_manufacturerMaxOrderByAggregateInput } from "../inputs/Product_manufacturerMaxOrderByAggregateInput";
import { Product_manufacturerMinOrderByAggregateInput } from "../inputs/Product_manufacturerMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Product_manufacturerOrderByWithAggregationInput", {})
export class Product_manufacturerOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  version_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  link?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  media_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Product_manufacturerCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Product_manufacturerCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_manufacturerMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Product_manufacturerMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_manufacturerMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Product_manufacturerMinOrderByAggregateInput | undefined;
}
