import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_category_treeCountOrderByAggregateInput } from "../inputs/Product_category_treeCountOrderByAggregateInput";
import { Product_category_treeMaxOrderByAggregateInput } from "../inputs/Product_category_treeMaxOrderByAggregateInput";
import { Product_category_treeMinOrderByAggregateInput } from "../inputs/Product_category_treeMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Product_category_treeOrderByWithAggregationInput", {})
export class Product_category_treeOrderByWithAggregationInput {
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
  category_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  category_version_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Product_category_treeCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Product_category_treeCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_category_treeMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Product_category_treeMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_category_treeMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Product_category_treeMinOrderByAggregateInput | undefined;
}
