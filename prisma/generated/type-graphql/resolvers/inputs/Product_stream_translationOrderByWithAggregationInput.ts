import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_stream_translationCountOrderByAggregateInput } from "../inputs/Product_stream_translationCountOrderByAggregateInput";
import { Product_stream_translationMaxOrderByAggregateInput } from "../inputs/Product_stream_translationMaxOrderByAggregateInput";
import { Product_stream_translationMinOrderByAggregateInput } from "../inputs/Product_stream_translationMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Product_stream_translationOrderByWithAggregationInput", {})
export class Product_stream_translationOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  product_stream_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  language_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  name?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  description?: SortOrderInput | undefined;

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

  @TypeGraphQL.Field(_type => Product_stream_translationCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Product_stream_translationCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_stream_translationMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Product_stream_translationMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_stream_translationMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Product_stream_translationMinOrderByAggregateInput | undefined;
}
