import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_transaction_capture_refundCountOrderByAggregateInput } from "../inputs/Order_transaction_capture_refundCountOrderByAggregateInput";
import { Order_transaction_capture_refundMaxOrderByAggregateInput } from "../inputs/Order_transaction_capture_refundMaxOrderByAggregateInput";
import { Order_transaction_capture_refundMinOrderByAggregateInput } from "../inputs/Order_transaction_capture_refundMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Order_transaction_capture_refundOrderByWithAggregationInput", {})
export class Order_transaction_capture_refundOrderByWithAggregationInput {
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
  capture_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  capture_version_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  state_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  reason?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  amount?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  custom_fields?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  external_reference?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Order_transaction_capture_refundCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Order_transaction_capture_refundCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Order_transaction_capture_refundMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Order_transaction_capture_refundMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Order_transaction_capture_refundMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Order_transaction_capture_refundMinOrderByAggregateInput | undefined;
}
