import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_tagCountOrderByAggregateInput } from "../inputs/Product_tagCountOrderByAggregateInput";
import { Product_tagMaxOrderByAggregateInput } from "../inputs/Product_tagMaxOrderByAggregateInput";
import { Product_tagMinOrderByAggregateInput } from "../inputs/Product_tagMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Product_tagOrderByWithAggregationInput", {})
export class Product_tagOrderByWithAggregationInput {
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
  tag_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Product_tagCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Product_tagCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_tagMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Product_tagMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_tagMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Product_tagMinOrderByAggregateInput | undefined;
}
