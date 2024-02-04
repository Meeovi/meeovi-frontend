import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartOrderByRelationAggregateInput } from "../inputs/CartOrderByRelationAggregateInput";
import { CountryOrderByRelevanceInput } from "../inputs/CountryOrderByRelevanceInput";
import { Country_stateOrderByRelationAggregateInput } from "../inputs/Country_stateOrderByRelationAggregateInput";
import { Country_translationOrderByRelationAggregateInput } from "../inputs/Country_translationOrderByRelationAggregateInput";
import { Currency_country_roundingOrderByRelationAggregateInput } from "../inputs/Currency_country_roundingOrderByRelationAggregateInput";
import { Customer_addressOrderByRelationAggregateInput } from "../inputs/Customer_addressOrderByRelationAggregateInput";
import { Order_addressOrderByRelationAggregateInput } from "../inputs/Order_addressOrderByRelationAggregateInput";
import { Sales_channelOrderByRelationAggregateInput } from "../inputs/Sales_channelOrderByRelationAggregateInput";
import { Sales_channel_countryOrderByRelationAggregateInput } from "../inputs/Sales_channel_countryOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { Tax_ruleOrderByRelationAggregateInput } from "../inputs/Tax_ruleOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CountryOrderByWithRelationAndSearchRelevanceInput", {})
export class CountryOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  iso?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  position?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tax_free?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  active?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  iso3?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  display_state_in_registration?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  force_state_in_registration?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  company_tax_free?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  check_vat_id_pattern?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  vat_id_pattern?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  vat_id_required?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  customer_tax?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  company_tax?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  advanced_postal_code_pattern?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  check_advanced_postal_code_pattern?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  check_postal_code_pattern?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  default_postal_code_pattern?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  postal_code_required?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  shipping_available?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CartOrderByRelationAggregateInput, {
    nullable: true
  })
  cart?: CartOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Country_stateOrderByRelationAggregateInput, {
    nullable: true
  })
  country_state?: Country_stateOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Country_translationOrderByRelationAggregateInput, {
    nullable: true
  })
  country_translation?: Country_translationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Currency_country_roundingOrderByRelationAggregateInput, {
    nullable: true
  })
  currency_country_rounding?: Currency_country_roundingOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Customer_addressOrderByRelationAggregateInput, {
    nullable: true
  })
  customer_address?: Customer_addressOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Order_addressOrderByRelationAggregateInput, {
    nullable: true
  })
  order_address?: Order_addressOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Sales_channelOrderByRelationAggregateInput, {
    nullable: true
  })
  sales_channel?: Sales_channelOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Sales_channel_countryOrderByRelationAggregateInput, {
    nullable: true
  })
  sales_channel_country?: Sales_channel_countryOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Tax_ruleOrderByRelationAggregateInput, {
    nullable: true
  })
  tax_rule?: Tax_ruleOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CountryOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: CountryOrderByRelevanceInput | undefined;
}
