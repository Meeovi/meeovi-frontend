import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_delivery_positionAvgOrderByAggregateInput } from "../inputs/Order_delivery_positionAvgOrderByAggregateInput";
import { Order_delivery_positionCountOrderByAggregateInput } from "../inputs/Order_delivery_positionCountOrderByAggregateInput";
import { Order_delivery_positionMaxOrderByAggregateInput } from "../inputs/Order_delivery_positionMaxOrderByAggregateInput";
import { Order_delivery_positionMinOrderByAggregateInput } from "../inputs/Order_delivery_positionMinOrderByAggregateInput";
import { Order_delivery_positionSumOrderByAggregateInput } from "../inputs/Order_delivery_positionSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Order_delivery_positionOrderByWithAggregationInput", {})
export class Order_delivery_positionOrderByWithAggregationInput {
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
  order_delivery_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  order_delivery_version_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  order_line_item_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  order_line_item_version_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  price?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  total_price?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  unit_price?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  quantity?: SortOrderInput | undefined;

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

  @TypeGraphQL.Field(_type => Order_delivery_positionCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Order_delivery_positionCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Order_delivery_positionAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Order_delivery_positionAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Order_delivery_positionMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Order_delivery_positionMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Order_delivery_positionMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Order_delivery_positionMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Order_delivery_positionSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Order_delivery_positionSumOrderByAggregateInput | undefined;
}
