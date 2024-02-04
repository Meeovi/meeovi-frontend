import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_cross_selling_assigned_productsAvgOrderByAggregateInput } from "../inputs/Product_cross_selling_assigned_productsAvgOrderByAggregateInput";
import { Product_cross_selling_assigned_productsCountOrderByAggregateInput } from "../inputs/Product_cross_selling_assigned_productsCountOrderByAggregateInput";
import { Product_cross_selling_assigned_productsMaxOrderByAggregateInput } from "../inputs/Product_cross_selling_assigned_productsMaxOrderByAggregateInput";
import { Product_cross_selling_assigned_productsMinOrderByAggregateInput } from "../inputs/Product_cross_selling_assigned_productsMinOrderByAggregateInput";
import { Product_cross_selling_assigned_productsSumOrderByAggregateInput } from "../inputs/Product_cross_selling_assigned_productsSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Product_cross_selling_assigned_productsOrderByWithAggregationInput", {})
export class Product_cross_selling_assigned_productsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  cross_selling_id?: "asc" | "desc" | undefined;

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
  position?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Product_cross_selling_assigned_productsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Product_cross_selling_assigned_productsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_cross_selling_assigned_productsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Product_cross_selling_assigned_productsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_cross_selling_assigned_productsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Product_cross_selling_assigned_productsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_cross_selling_assigned_productsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Product_cross_selling_assigned_productsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_cross_selling_assigned_productsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Product_cross_selling_assigned_productsSumOrderByAggregateInput | undefined;
}
