import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartAvgOrderByAggregateInput } from "../inputs/CartAvgOrderByAggregateInput";
import { CartCountOrderByAggregateInput } from "../inputs/CartCountOrderByAggregateInput";
import { CartMaxOrderByAggregateInput } from "../inputs/CartMaxOrderByAggregateInput";
import { CartMinOrderByAggregateInput } from "../inputs/CartMinOrderByAggregateInput";
import { CartSumOrderByAggregateInput } from "../inputs/CartSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CartOrderByWithAggregationInput", {})
export class CartOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  token?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  name?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  cart?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  price?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  line_item_count?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  currency_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  shipping_method_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  payment_method_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  country_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  customer_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  sales_channel_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  rule_ids?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  auto_increment?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CartCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: CartCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CartAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: CartAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CartMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: CartMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CartMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: CartMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CartSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: CartSumOrderByAggregateInput | undefined;
}
