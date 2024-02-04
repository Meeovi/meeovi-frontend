import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_payment_methodNullableRelationFilter } from "../inputs/App_payment_methodNullableRelationFilter";
import { BoolFilter } from "../inputs/BoolFilter";
import { BytesFilter } from "../inputs/BytesFilter";
import { BytesNullableFilter } from "../inputs/BytesNullableFilter";
import { CartListRelationFilter } from "../inputs/CartListRelationFilter";
import { CustomerListRelationFilter } from "../inputs/CustomerListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { MediaNullableRelationFilter } from "../inputs/MediaNullableRelationFilter";
import { Order_transactionListRelationFilter } from "../inputs/Order_transactionListRelationFilter";
import { Payment_method_translationListRelationFilter } from "../inputs/Payment_method_translationListRelationFilter";
import { PluginNullableRelationFilter } from "../inputs/PluginNullableRelationFilter";
import { RuleNullableRelationFilter } from "../inputs/RuleNullableRelationFilter";
import { Sales_channelListRelationFilter } from "../inputs/Sales_channelListRelationFilter";
import { Sales_channel_payment_methodListRelationFilter } from "../inputs/Sales_channel_payment_methodListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("Payment_methodWhereInput", {})
export class Payment_methodWhereInput {
  @TypeGraphQL.Field(_type => [Payment_methodWhereInput], {
    nullable: true
  })
  AND?: Payment_methodWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Payment_methodWhereInput], {
    nullable: true
  })
  OR?: Payment_methodWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Payment_methodWhereInput], {
    nullable: true
  })
  NOT?: Payment_methodWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  handler_identifier?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  position?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  active?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  after_order_enabled?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  availability_rule_id?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  plugin_id?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  media_id?: BytesNullableFilter | undefined;

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
  technical_name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => App_payment_methodNullableRelationFilter, {
    nullable: true
  })
  app_payment_method?: App_payment_methodNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CartListRelationFilter, {
    nullable: true
  })
  cart?: CartListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CustomerListRelationFilter, {
    nullable: true
  })
  customer_customer_default_payment_method_idTopayment_method?: CustomerListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CustomerListRelationFilter, {
    nullable: true
  })
  customer_customer_last_payment_method_idTopayment_method?: CustomerListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Order_transactionListRelationFilter, {
    nullable: true
  })
  order_transaction?: Order_transactionListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => RuleNullableRelationFilter, {
    nullable: true
  })
  rule?: RuleNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MediaNullableRelationFilter, {
    nullable: true
  })
  media?: MediaNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PluginNullableRelationFilter, {
    nullable: true
  })
  plugin?: PluginNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Payment_method_translationListRelationFilter, {
    nullable: true
  })
  payment_method_translation?: Payment_method_translationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Sales_channelListRelationFilter, {
    nullable: true
  })
  sales_channel?: Sales_channelListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Sales_channel_payment_methodListRelationFilter, {
    nullable: true
  })
  sales_channel_payment_method?: Sales_channel_payment_methodListRelationFilter | undefined;
}
