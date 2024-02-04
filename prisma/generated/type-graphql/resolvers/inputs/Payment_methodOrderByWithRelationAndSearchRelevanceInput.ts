import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_payment_methodOrderByWithRelationAndSearchRelevanceInput } from "../inputs/App_payment_methodOrderByWithRelationAndSearchRelevanceInput";
import { CartOrderByRelationAggregateInput } from "../inputs/CartOrderByRelationAggregateInput";
import { CustomerOrderByRelationAggregateInput } from "../inputs/CustomerOrderByRelationAggregateInput";
import { MediaOrderByWithRelationAndSearchRelevanceInput } from "../inputs/MediaOrderByWithRelationAndSearchRelevanceInput";
import { Order_transactionOrderByRelationAggregateInput } from "../inputs/Order_transactionOrderByRelationAggregateInput";
import { Payment_methodOrderByRelevanceInput } from "../inputs/Payment_methodOrderByRelevanceInput";
import { Payment_method_translationOrderByRelationAggregateInput } from "../inputs/Payment_method_translationOrderByRelationAggregateInput";
import { PluginOrderByWithRelationAndSearchRelevanceInput } from "../inputs/PluginOrderByWithRelationAndSearchRelevanceInput";
import { RuleOrderByWithRelationAndSearchRelevanceInput } from "../inputs/RuleOrderByWithRelationAndSearchRelevanceInput";
import { Sales_channelOrderByRelationAggregateInput } from "../inputs/Sales_channelOrderByRelationAggregateInput";
import { Sales_channel_payment_methodOrderByRelationAggregateInput } from "../inputs/Sales_channel_payment_methodOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Payment_methodOrderByWithRelationAndSearchRelevanceInput", {})
export class Payment_methodOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  handler_identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  position?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  active?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  after_order_enabled?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  availability_rule_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  plugin_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  media_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  technical_name?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => App_payment_methodOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  app_payment_method?: App_payment_methodOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => CartOrderByRelationAggregateInput, {
    nullable: true
  })
  cart?: CartOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CustomerOrderByRelationAggregateInput, {
    nullable: true
  })
  customer_customer_default_payment_method_idTopayment_method?: CustomerOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CustomerOrderByRelationAggregateInput, {
    nullable: true
  })
  customer_customer_last_payment_method_idTopayment_method?: CustomerOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Order_transactionOrderByRelationAggregateInput, {
    nullable: true
  })
  order_transaction?: Order_transactionOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RuleOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  rule?: RuleOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => MediaOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  media?: MediaOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => PluginOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  plugin?: PluginOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Payment_method_translationOrderByRelationAggregateInput, {
    nullable: true
  })
  payment_method_translation?: Payment_method_translationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Sales_channelOrderByRelationAggregateInput, {
    nullable: true
  })
  sales_channel?: Sales_channelOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Sales_channel_payment_methodOrderByRelationAggregateInput, {
    nullable: true
  })
  sales_channel_payment_method?: Sales_channel_payment_methodOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Payment_methodOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: Payment_methodOrderByRelevanceInput | undefined;
}
