import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { CartListRelationFilter } from "../inputs/CartListRelationFilter";
import { CountryWhereInput } from "../inputs/CountryWhereInput";
import { Country_stateListRelationFilter } from "../inputs/Country_stateListRelationFilter";
import { Country_translationListRelationFilter } from "../inputs/Country_translationListRelationFilter";
import { Currency_country_roundingListRelationFilter } from "../inputs/Currency_country_roundingListRelationFilter";
import { Customer_addressListRelationFilter } from "../inputs/Customer_addressListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { Order_addressListRelationFilter } from "../inputs/Order_addressListRelationFilter";
import { Sales_channelListRelationFilter } from "../inputs/Sales_channelListRelationFilter";
import { Sales_channel_countryListRelationFilter } from "../inputs/Sales_channel_countryListRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { Tax_ruleListRelationFilter } from "../inputs/Tax_ruleListRelationFilter";

@TypeGraphQL.InputType("CountryWhereUniqueInput", {})
export class CountryWhereUniqueInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  id?: Buffer | undefined;

  @TypeGraphQL.Field(_type => [CountryWhereInput], {
    nullable: true
  })
  AND?: CountryWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CountryWhereInput], {
    nullable: true
  })
  OR?: CountryWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CountryWhereInput], {
    nullable: true
  })
  NOT?: CountryWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  iso?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  position?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  tax_free?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  active?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  iso3?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  display_state_in_registration?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  force_state_in_registration?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  company_tax_free?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  check_vat_id_pattern?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  vat_id_pattern?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  vat_id_required?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  customer_tax?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  company_tax?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  advanced_postal_code_pattern?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  check_advanced_postal_code_pattern?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  check_postal_code_pattern?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  default_postal_code_pattern?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  postal_code_required?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  shipping_available?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => CartListRelationFilter, {
    nullable: true
  })
  cart?: CartListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Country_stateListRelationFilter, {
    nullable: true
  })
  country_state?: Country_stateListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Country_translationListRelationFilter, {
    nullable: true
  })
  country_translation?: Country_translationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Currency_country_roundingListRelationFilter, {
    nullable: true
  })
  currency_country_rounding?: Currency_country_roundingListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Customer_addressListRelationFilter, {
    nullable: true
  })
  customer_address?: Customer_addressListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Order_addressListRelationFilter, {
    nullable: true
  })
  order_address?: Order_addressListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Sales_channelListRelationFilter, {
    nullable: true
  })
  sales_channel?: Sales_channelListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Sales_channel_countryListRelationFilter, {
    nullable: true
  })
  sales_channel_country?: Sales_channel_countryListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Tax_ruleListRelationFilter, {
    nullable: true
  })
  tax_rule?: Tax_ruleListRelationFilter | undefined;
}
