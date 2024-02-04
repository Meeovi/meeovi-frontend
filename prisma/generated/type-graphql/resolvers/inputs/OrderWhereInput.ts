import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntFilter } from "../inputs/BigIntFilter";
import { BytesFilter } from "../inputs/BytesFilter";
import { BytesNullableFilter } from "../inputs/BytesNullableFilter";
import { CurrencyRelationFilter } from "../inputs/CurrencyRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { DocumentListRelationFilter } from "../inputs/DocumentListRelationFilter";
import { FloatNullableFilter } from "../inputs/FloatNullableFilter";
import { Klarna_order_extensionListRelationFilter } from "../inputs/Klarna_order_extensionListRelationFilter";
import { LanguageRelationFilter } from "../inputs/LanguageRelationFilter";
import { Order_addressListRelationFilter } from "../inputs/Order_addressListRelationFilter";
import { Order_customerListRelationFilter } from "../inputs/Order_customerListRelationFilter";
import { Order_deliveryListRelationFilter } from "../inputs/Order_deliveryListRelationFilter";
import { Order_line_itemListRelationFilter } from "../inputs/Order_line_itemListRelationFilter";
import { Order_tagListRelationFilter } from "../inputs/Order_tagListRelationFilter";
import { Order_transactionListRelationFilter } from "../inputs/Order_transactionListRelationFilter";
import { Sales_channelRelationFilter } from "../inputs/Sales_channelRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserNullableRelationFilter } from "../inputs/UserNullableRelationFilter";

@TypeGraphQL.InputType("OrderWhereInput", {})
export class OrderWhereInput {
  @TypeGraphQL.Field(_type => [OrderWhereInput], {
    nullable: true
  })
  AND?: OrderWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderWhereInput], {
    nullable: true
  })
  OR?: OrderWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderWhereInput], {
    nullable: true
  })
  NOT?: OrderWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  version_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  state_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BigIntFilter, {
    nullable: true
  })
  auto_increment?: BigIntFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  order_number?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  currency_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  language_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => FloatNullableFilter, {
    nullable: true
  })
  currency_factor?: FloatNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  sales_channel_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  billing_address_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  billing_address_version_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  price?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  order_date_time?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  order_date?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => FloatNullableFilter, {
    nullable: true
  })
  amount_total?: FloatNullableFilter | undefined;

  @TypeGraphQL.Field(_type => FloatNullableFilter, {
    nullable: true
  })
  amount_net?: FloatNullableFilter | undefined;

  @TypeGraphQL.Field(_type => FloatNullableFilter, {
    nullable: true
  })
  position_price?: FloatNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  tax_status?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  shipping_costs?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => FloatNullableFilter, {
    nullable: true
  })
  shipping_total?: FloatNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  deep_link_code?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  custom_fields?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  affiliate_code?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  campaign_code?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  customer_comment?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  item_rounding?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  total_rounding?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  rule_ids?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  created_by_id?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  updated_by_id?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  source?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DocumentListRelationFilter, {
    nullable: true
  })
  document?: DocumentListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Klarna_order_extensionListRelationFilter, {
    nullable: true
  })
  klarna_order_extension?: Klarna_order_extensionListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => LanguageRelationFilter, {
    nullable: true
  })
  language?: LanguageRelationFilter | undefined;

  @TypeGraphQL.Field(_type => UserNullableRelationFilter, {
    nullable: true
  })
  user_order_created_by_idTouser?: UserNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CurrencyRelationFilter, {
    nullable: true
  })
  currency?: CurrencyRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Sales_channelRelationFilter, {
    nullable: true
  })
  sales_channel?: Sales_channelRelationFilter | undefined;

  @TypeGraphQL.Field(_type => UserNullableRelationFilter, {
    nullable: true
  })
  user_order_updated_by_idTouser?: UserNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Order_addressListRelationFilter, {
    nullable: true
  })
  order_address?: Order_addressListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Order_customerListRelationFilter, {
    nullable: true
  })
  order_customer?: Order_customerListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Order_deliveryListRelationFilter, {
    nullable: true
  })
  order_delivery?: Order_deliveryListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Order_line_itemListRelationFilter, {
    nullable: true
  })
  order_line_item?: Order_line_itemListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Order_tagListRelationFilter, {
    nullable: true
  })
  order_tag?: Order_tagListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Order_transactionListRelationFilter, {
    nullable: true
  })
  order_transaction?: Order_transactionListRelationFilter | undefined;
}
