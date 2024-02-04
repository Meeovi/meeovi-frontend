import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_stream_mappingCountOrderByAggregateInput } from "../inputs/Product_stream_mappingCountOrderByAggregateInput";
import { Product_stream_mappingMaxOrderByAggregateInput } from "../inputs/Product_stream_mappingMaxOrderByAggregateInput";
import { Product_stream_mappingMinOrderByAggregateInput } from "../inputs/Product_stream_mappingMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Product_stream_mappingOrderByWithAggregationInput", {})
export class Product_stream_mappingOrderByWithAggregationInput {
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
  product_stream_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Product_stream_mappingCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Product_stream_mappingCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_stream_mappingMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Product_stream_mappingMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_stream_mappingMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Product_stream_mappingMinOrderByAggregateInput | undefined;
}
