import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_transaction_capture_refund_positionAvgOrderByAggregateInput } from "../inputs/Order_transaction_capture_refund_positionAvgOrderByAggregateInput";
import { Order_transaction_capture_refund_positionCountOrderByAggregateInput } from "../inputs/Order_transaction_capture_refund_positionCountOrderByAggregateInput";
import { Order_transaction_capture_refund_positionMaxOrderByAggregateInput } from "../inputs/Order_transaction_capture_refund_positionMaxOrderByAggregateInput";
import { Order_transaction_capture_refund_positionMinOrderByAggregateInput } from "../inputs/Order_transaction_capture_refund_positionMinOrderByAggregateInput";
import { Order_transaction_capture_refund_positionSumOrderByAggregateInput } from "../inputs/Order_transaction_capture_refund_positionSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Order_transaction_capture_refund_positionOrderByWithAggregationInput", {})
export class Order_transaction_capture_refund_positionOrderByWithAggregationInput {
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
  refund_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  refund_version_id?: "asc" | "desc" | undefined;

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
  quantity?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  reason?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  external_reference?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  amount?: "asc" | "desc" | undefined;

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

  @TypeGraphQL.Field(_type => Order_transaction_capture_refund_positionCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Order_transaction_capture_refund_positionCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Order_transaction_capture_refund_positionAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Order_transaction_capture_refund_positionAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Order_transaction_capture_refund_positionMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Order_transaction_capture_refund_positionMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Order_transaction_capture_refund_positionMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Order_transaction_capture_refund_positionMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Order_transaction_capture_refund_positionSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Order_transaction_capture_refund_positionSumOrderByAggregateInput | undefined;
}
