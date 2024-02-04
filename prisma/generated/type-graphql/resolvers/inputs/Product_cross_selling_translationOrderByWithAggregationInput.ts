import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_cross_selling_translationCountOrderByAggregateInput } from "../inputs/Product_cross_selling_translationCountOrderByAggregateInput";
import { Product_cross_selling_translationMaxOrderByAggregateInput } from "../inputs/Product_cross_selling_translationMaxOrderByAggregateInput";
import { Product_cross_selling_translationMinOrderByAggregateInput } from "../inputs/Product_cross_selling_translationMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Product_cross_selling_translationOrderByWithAggregationInput", {})
export class Product_cross_selling_translationOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  product_cross_selling_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  language_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  name?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Product_cross_selling_translationCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Product_cross_selling_translationCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_cross_selling_translationMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Product_cross_selling_translationMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_cross_selling_translationMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Product_cross_selling_translationMinOrderByAggregateInput | undefined;
}
