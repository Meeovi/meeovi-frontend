import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Adyen_paymentOrderByRelationAggregateInput } from "../inputs/Adyen_paymentOrderByRelationAggregateInput";
import { Adyen_payment_captureOrderByRelationAggregateInput } from "../inputs/Adyen_payment_captureOrderByRelationAggregateInput";
import { Adyen_refundOrderByRelationAggregateInput } from "../inputs/Adyen_refundOrderByRelationAggregateInput";
import { OrderOrderByWithRelationAndSearchRelevanceInput } from "../inputs/OrderOrderByWithRelationAndSearchRelevanceInput";
import { Order_transactionOrderByRelevanceInput } from "../inputs/Order_transactionOrderByRelevanceInput";
import { Order_transaction_captureOrderByRelationAggregateInput } from "../inputs/Order_transaction_captureOrderByRelationAggregateInput";
import { Payment_methodOrderByWithRelationAndSearchRelevanceInput } from "../inputs/Payment_methodOrderByWithRelationAndSearchRelevanceInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { State_machine_stateOrderByWithRelationAndSearchRelevanceInput } from "../inputs/State_machine_stateOrderByWithRelationAndSearchRelevanceInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Order_transactionOrderByWithRelationAndSearchRelevanceInput", {})
export class Order_transactionOrderByWithRelationAndSearchRelevanceInput {
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

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  state_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  payment_method_id?: "asc" | "desc" | undefined;

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

  @TypeGraphQL.Field(_type => Adyen_paymentOrderByRelationAggregateInput, {
    nullable: true
  })
  adyen_payment?: Adyen_paymentOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Adyen_payment_captureOrderByRelationAggregateInput, {
    nullable: true
  })
  adyen_payment_capture?: Adyen_payment_captureOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Adyen_refundOrderByRelationAggregateInput, {
    nullable: true
  })
  adyen_refund?: Adyen_refundOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OrderOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  order?: OrderOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Payment_methodOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  payment_method?: Payment_methodOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => State_machine_stateOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  state_machine_state?: State_machine_stateOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Order_transaction_captureOrderByRelationAggregateInput, {
    nullable: true
  })
  order_transaction_capture?: Order_transaction_captureOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Order_transactionOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: Order_transactionOrderByRelevanceInput | undefined;
}
