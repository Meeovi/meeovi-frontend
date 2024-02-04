import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_transactionOrderByWithRelationAndSearchRelevanceInput } from "../inputs/Order_transactionOrderByWithRelationAndSearchRelevanceInput";
import { Order_transaction_captureOrderByRelevanceInput } from "../inputs/Order_transaction_captureOrderByRelevanceInput";
import { Order_transaction_capture_refundOrderByRelationAggregateInput } from "../inputs/Order_transaction_capture_refundOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { State_machine_stateOrderByWithRelationAndSearchRelevanceInput } from "../inputs/State_machine_stateOrderByWithRelationAndSearchRelevanceInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Order_transaction_captureOrderByWithRelationAndSearchRelevanceInput", {})
export class Order_transaction_captureOrderByWithRelationAndSearchRelevanceInput {
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
  order_transaction_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  order_transaction_version_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  state_id?: "asc" | "desc" | undefined;

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

  @TypeGraphQL.Field(_type => Order_transactionOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  order_transaction?: Order_transactionOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => State_machine_stateOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  state_machine_state?: State_machine_stateOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Order_transaction_capture_refundOrderByRelationAggregateInput, {
    nullable: true
  })
  order_transaction_capture_refund?: Order_transaction_capture_refundOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Order_transaction_captureOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: Order_transaction_captureOrderByRelevanceInput | undefined;
}
