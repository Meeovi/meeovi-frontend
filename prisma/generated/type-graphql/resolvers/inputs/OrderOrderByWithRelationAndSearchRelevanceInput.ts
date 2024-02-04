import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CurrencyOrderByWithRelationAndSearchRelevanceInput } from "../inputs/CurrencyOrderByWithRelationAndSearchRelevanceInput";
import { DocumentOrderByRelationAggregateInput } from "../inputs/DocumentOrderByRelationAggregateInput";
import { Klarna_order_extensionOrderByRelationAggregateInput } from "../inputs/Klarna_order_extensionOrderByRelationAggregateInput";
import { LanguageOrderByWithRelationAndSearchRelevanceInput } from "../inputs/LanguageOrderByWithRelationAndSearchRelevanceInput";
import { OrderOrderByRelevanceInput } from "../inputs/OrderOrderByRelevanceInput";
import { Order_addressOrderByRelationAggregateInput } from "../inputs/Order_addressOrderByRelationAggregateInput";
import { Order_customerOrderByRelationAggregateInput } from "../inputs/Order_customerOrderByRelationAggregateInput";
import { Order_deliveryOrderByRelationAggregateInput } from "../inputs/Order_deliveryOrderByRelationAggregateInput";
import { Order_line_itemOrderByRelationAggregateInput } from "../inputs/Order_line_itemOrderByRelationAggregateInput";
import { Order_tagOrderByRelationAggregateInput } from "../inputs/Order_tagOrderByRelationAggregateInput";
import { Order_transactionOrderByRelationAggregateInput } from "../inputs/Order_transactionOrderByRelationAggregateInput";
import { Sales_channelOrderByWithRelationAndSearchRelevanceInput } from "../inputs/Sales_channelOrderByWithRelationAndSearchRelevanceInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { UserOrderByWithRelationAndSearchRelevanceInput } from "../inputs/UserOrderByWithRelationAndSearchRelevanceInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("OrderOrderByWithRelationAndSearchRelevanceInput", {})
export class OrderOrderByWithRelationAndSearchRelevanceInput {
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
  state_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  auto_increment?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  order_number?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  currency_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  language_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  currency_factor?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  sales_channel_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  billing_address_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  billing_address_version_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  price?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  order_date_time?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  order_date?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  amount_total?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  amount_net?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  position_price?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  tax_status?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  shipping_costs?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  shipping_total?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  deep_link_code?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  custom_fields?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  affiliate_code?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  campaign_code?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  customer_comment?: SortOrderInput | undefined;

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
  item_rounding?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  total_rounding?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  rule_ids?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  created_by_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_by_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  source?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => DocumentOrderByRelationAggregateInput, {
    nullable: true
  })
  document?: DocumentOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Klarna_order_extensionOrderByRelationAggregateInput, {
    nullable: true
  })
  klarna_order_extension?: Klarna_order_extensionOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LanguageOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  language?: LanguageOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => UserOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  user_order_created_by_idTouser?: UserOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => CurrencyOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  currency?: CurrencyOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Sales_channelOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  sales_channel?: Sales_channelOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => UserOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  user_order_updated_by_idTouser?: UserOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Order_addressOrderByRelationAggregateInput, {
    nullable: true
  })
  order_address?: Order_addressOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Order_customerOrderByRelationAggregateInput, {
    nullable: true
  })
  order_customer?: Order_customerOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Order_deliveryOrderByRelationAggregateInput, {
    nullable: true
  })
  order_delivery?: Order_deliveryOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Order_line_itemOrderByRelationAggregateInput, {
    nullable: true
  })
  order_line_item?: Order_line_itemOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Order_tagOrderByRelationAggregateInput, {
    nullable: true
  })
  order_tag?: Order_tagOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Order_transactionOrderByRelationAggregateInput, {
    nullable: true
  })
  order_transaction?: Order_transactionOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OrderOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: OrderOrderByRelevanceInput | undefined;
}
