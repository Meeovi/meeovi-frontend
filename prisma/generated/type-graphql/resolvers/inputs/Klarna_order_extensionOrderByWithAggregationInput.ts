import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Klarna_order_extensionAvgOrderByAggregateInput } from "../inputs/Klarna_order_extensionAvgOrderByAggregateInput";
import { Klarna_order_extensionCountOrderByAggregateInput } from "../inputs/Klarna_order_extensionCountOrderByAggregateInput";
import { Klarna_order_extensionMaxOrderByAggregateInput } from "../inputs/Klarna_order_extensionMaxOrderByAggregateInput";
import { Klarna_order_extensionMinOrderByAggregateInput } from "../inputs/Klarna_order_extensionMinOrderByAggregateInput";
import { Klarna_order_extensionSumOrderByAggregateInput } from "../inputs/Klarna_order_extensionSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Klarna_order_extensionOrderByWithAggregationInput", {})
export class Klarna_order_extensionOrderByWithAggregationInput {
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
  order_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  order_version_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  order_address_hash?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  order_cart_hash?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  order_cart_hash_version?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Klarna_order_extensionCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Klarna_order_extensionCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Klarna_order_extensionAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Klarna_order_extensionAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Klarna_order_extensionMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Klarna_order_extensionMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Klarna_order_extensionMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Klarna_order_extensionMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Klarna_order_extensionSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Klarna_order_extensionSumOrderByAggregateInput | undefined;
}
