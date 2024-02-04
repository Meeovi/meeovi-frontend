import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { CartListRelationFilter } from "../inputs/CartListRelationFilter";
import { Currency_country_roundingListRelationFilter } from "../inputs/Currency_country_roundingListRelationFilter";
import { Currency_translationListRelationFilter } from "../inputs/Currency_translationListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { FloatNullableFilter } from "../inputs/FloatNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { OrderListRelationFilter } from "../inputs/OrderListRelationFilter";
import { Promotion_discount_pricesListRelationFilter } from "../inputs/Promotion_discount_pricesListRelationFilter";
import { Sales_channelListRelationFilter } from "../inputs/Sales_channelListRelationFilter";
import { Sales_channel_currencyListRelationFilter } from "../inputs/Sales_channel_currencyListRelationFilter";
import { Sales_channel_domainListRelationFilter } from "../inputs/Sales_channel_domainListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("CurrencyWhereInput", {})
export class CurrencyWhereInput {
  @TypeGraphQL.Field(_type => [CurrencyWhereInput], {
    nullable: true
  })
  AND?: CurrencyWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CurrencyWhereInput], {
    nullable: true
  })
  OR?: CurrencyWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CurrencyWhereInput], {
    nullable: true
  })
  NOT?: CurrencyWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  iso_code?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => FloatFilter, {
    nullable: true
  })
  factor?: FloatFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  symbol?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  position?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  decimal_precision?: IntNullableFilter | undefined;

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

  @TypeGraphQL.Field(_type => FloatNullableFilter, {
    nullable: true
  })
  tax_free_from?: FloatNullableFilter | undefined;

  @TypeGraphQL.Field(_type => CartListRelationFilter, {
    nullable: true
  })
  cart?: CartListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Currency_country_roundingListRelationFilter, {
    nullable: true
  })
  currency_country_rounding?: Currency_country_roundingListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Currency_translationListRelationFilter, {
    nullable: true
  })
  currency_translation?: Currency_translationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => OrderListRelationFilter, {
    nullable: true
  })
  order?: OrderListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Promotion_discount_pricesListRelationFilter, {
    nullable: true
  })
  promotion_discount_prices?: Promotion_discount_pricesListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Sales_channelListRelationFilter, {
    nullable: true
  })
  sales_channel?: Sales_channelListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Sales_channel_currencyListRelationFilter, {
    nullable: true
  })
  sales_channel_currency?: Sales_channel_currencyListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Sales_channel_domainListRelationFilter, {
    nullable: true
  })
  sales_channel_domain?: Sales_channel_domainListRelationFilter | undefined;
}
