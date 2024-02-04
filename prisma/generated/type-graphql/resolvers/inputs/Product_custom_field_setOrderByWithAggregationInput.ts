import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_custom_field_setCountOrderByAggregateInput } from "../inputs/Product_custom_field_setCountOrderByAggregateInput";
import { Product_custom_field_setMaxOrderByAggregateInput } from "../inputs/Product_custom_field_setMaxOrderByAggregateInput";
import { Product_custom_field_setMinOrderByAggregateInput } from "../inputs/Product_custom_field_setMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Product_custom_field_setOrderByWithAggregationInput", {})
export class Product_custom_field_setOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  custom_field_set_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  product_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  product_version_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Product_custom_field_setCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Product_custom_field_setCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_custom_field_setMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Product_custom_field_setMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_custom_field_setMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Product_custom_field_setMinOrderByAggregateInput | undefined;
}
