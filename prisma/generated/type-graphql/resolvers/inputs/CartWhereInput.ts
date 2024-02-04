import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntFilter } from "../inputs/BigIntFilter";
import { BytesFilter } from "../inputs/BytesFilter";
import { BytesNullableFilter } from "../inputs/BytesNullableFilter";
import { CountryRelationFilter } from "../inputs/CountryRelationFilter";
import { CurrencyRelationFilter } from "../inputs/CurrencyRelationFilter";
import { CustomerNullableRelationFilter } from "../inputs/CustomerNullableRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { Payment_methodRelationFilter } from "../inputs/Payment_methodRelationFilter";
import { Sales_channelRelationFilter } from "../inputs/Sales_channelRelationFilter";
import { Shipping_methodRelationFilter } from "../inputs/Shipping_methodRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("CartWhereInput", {})
export class CartWhereInput {
  @TypeGraphQL.Field(_type => [CartWhereInput], {
    nullable: true
  })
  AND?: CartWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CartWhereInput], {
    nullable: true
  })
  OR?: CartWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CartWhereInput], {
    nullable: true
  })
  NOT?: CartWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  token?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  cart?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => FloatFilter, {
    nullable: true
  })
  price?: FloatFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  line_item_count?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  currency_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  shipping_method_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  payment_method_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  country_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  customer_id?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  sales_channel_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  rule_ids?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BigIntFilter, {
    nullable: true
  })
  auto_increment?: BigIntFilter | undefined;

  @TypeGraphQL.Field(_type => CountryRelationFilter, {
    nullable: true
  })
  country?: CountryRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CurrencyRelationFilter, {
    nullable: true
  })
  currency?: CurrencyRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CustomerNullableRelationFilter, {
    nullable: true
  })
  customer?: CustomerNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Payment_methodRelationFilter, {
    nullable: true
  })
  payment_method?: Payment_methodRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Sales_channelRelationFilter, {
    nullable: true
  })
  sales_channel?: Sales_channelRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Shipping_methodRelationFilter, {
    nullable: true
  })
  shipping_method?: Shipping_methodRelationFilter | undefined;
}
