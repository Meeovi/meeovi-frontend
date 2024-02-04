import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_priceAvgOrderByAggregateInput } from "../inputs/Product_priceAvgOrderByAggregateInput";
import { Product_priceCountOrderByAggregateInput } from "../inputs/Product_priceCountOrderByAggregateInput";
import { Product_priceMaxOrderByAggregateInput } from "../inputs/Product_priceMaxOrderByAggregateInput";
import { Product_priceMinOrderByAggregateInput } from "../inputs/Product_priceMinOrderByAggregateInput";
import { Product_priceSumOrderByAggregateInput } from "../inputs/Product_priceSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Product_priceOrderByWithAggregationInput", {})
export class Product_priceOrderByWithAggregationInput {
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
  rule_id?: "asc" | "desc" | undefined;

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
  price?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  quantity_start?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  quantity_end?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  custom_fields?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Product_priceCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Product_priceCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_priceAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Product_priceAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_priceMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Product_priceMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_priceMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Product_priceMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_priceSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Product_priceSumOrderByAggregateInput | undefined;
}
