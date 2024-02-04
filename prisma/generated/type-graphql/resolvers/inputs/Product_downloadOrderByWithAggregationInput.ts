import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_downloadAvgOrderByAggregateInput } from "../inputs/Product_downloadAvgOrderByAggregateInput";
import { Product_downloadCountOrderByAggregateInput } from "../inputs/Product_downloadCountOrderByAggregateInput";
import { Product_downloadMaxOrderByAggregateInput } from "../inputs/Product_downloadMaxOrderByAggregateInput";
import { Product_downloadMinOrderByAggregateInput } from "../inputs/Product_downloadMinOrderByAggregateInput";
import { Product_downloadSumOrderByAggregateInput } from "../inputs/Product_downloadSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Product_downloadOrderByWithAggregationInput", {})
export class Product_downloadOrderByWithAggregationInput {
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
  position?: "asc" | "desc" | undefined;

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
  media_id?: "asc" | "desc" | undefined;

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

  @TypeGraphQL.Field(_type => Product_downloadCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Product_downloadCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_downloadAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Product_downloadAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_downloadMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Product_downloadMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_downloadMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Product_downloadMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_downloadSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Product_downloadSumOrderByAggregateInput | undefined;
}
