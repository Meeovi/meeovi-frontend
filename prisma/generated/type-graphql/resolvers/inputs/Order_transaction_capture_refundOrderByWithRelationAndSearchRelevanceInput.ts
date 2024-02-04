import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_transaction_captureOrderByWithRelationAndSearchRelevanceInput } from "../inputs/Order_transaction_captureOrderByWithRelationAndSearchRelevanceInput";
import { Order_transaction_capture_refundOrderByRelevanceInput } from "../inputs/Order_transaction_capture_refundOrderByRelevanceInput";
import { Order_transaction_capture_refund_positionOrderByRelationAggregateInput } from "../inputs/Order_transaction_capture_refund_positionOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { State_machine_stateOrderByWithRelationAndSearchRelevanceInput } from "../inputs/State_machine_stateOrderByWithRelationAndSearchRelevanceInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Order_transaction_capture_refundOrderByWithRelationAndSearchRelevanceInput", {})
export class Order_transaction_capture_refundOrderByWithRelationAndSearchRelevanceInput {
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

  @TypeGraphQL.Field(_type => Order_transaction_captureOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  order_transaction_capture?: Order_transaction_captureOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => State_machine_stateOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  state_machine_state?: State_machine_stateOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Order_transaction_capture_refund_positionOrderByRelationAggregateInput, {
    nullable: true
  })
  order_transaction_capture_refund_position?: Order_transaction_capture_refund_positionOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Order_transaction_capture_refundOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: Order_transaction_capture_refundOrderByRelevanceInput | undefined;
}
