import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_streamCountOrderByAggregateInput } from "../inputs/Product_streamCountOrderByAggregateInput";
import { Product_streamMaxOrderByAggregateInput } from "../inputs/Product_streamMaxOrderByAggregateInput";
import { Product_streamMinOrderByAggregateInput } from "../inputs/Product_streamMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Product_streamOrderByWithAggregationInput", {})
export class Product_streamOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  api_filter?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  invalid?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Product_streamCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Product_streamCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_streamMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Product_streamMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_streamMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Product_streamMinOrderByAggregateInput | undefined;
}
