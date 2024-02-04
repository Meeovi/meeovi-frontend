import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartOrderByRelationAggregateInput } from "../inputs/CartOrderByRelationAggregateInput";
import { CurrencyOrderByRelevanceInput } from "../inputs/CurrencyOrderByRelevanceInput";
import { Currency_country_roundingOrderByRelationAggregateInput } from "../inputs/Currency_country_roundingOrderByRelationAggregateInput";
import { Currency_translationOrderByRelationAggregateInput } from "../inputs/Currency_translationOrderByRelationAggregateInput";
import { OrderOrderByRelationAggregateInput } from "../inputs/OrderOrderByRelationAggregateInput";
import { Promotion_discount_pricesOrderByRelationAggregateInput } from "../inputs/Promotion_discount_pricesOrderByRelationAggregateInput";
import { Sales_channelOrderByRelationAggregateInput } from "../inputs/Sales_channelOrderByRelationAggregateInput";
import { Sales_channel_currencyOrderByRelationAggregateInput } from "../inputs/Sales_channel_currencyOrderByRelationAggregateInput";
import { Sales_channel_domainOrderByRelationAggregateInput } from "../inputs/Sales_channel_domainOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CurrencyOrderByWithRelationAndSearchRelevanceInput", {})
export class CurrencyOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  iso_code?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  factor?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  symbol?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  position?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  decimal_precision?: SortOrderInput | undefined;

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
  tax_free_from?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => CartOrderByRelationAggregateInput, {
    nullable: true
  })
  cart?: CartOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Currency_country_roundingOrderByRelationAggregateInput, {
    nullable: true
  })
  currency_country_rounding?: Currency_country_roundingOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Currency_translationOrderByRelationAggregateInput, {
    nullable: true
  })
  currency_translation?: Currency_translationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OrderOrderByRelationAggregateInput, {
    nullable: true
  })
  order?: OrderOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Promotion_discount_pricesOrderByRelationAggregateInput, {
    nullable: true
  })
  promotion_discount_prices?: Promotion_discount_pricesOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Sales_channelOrderByRelationAggregateInput, {
    nullable: true
  })
  sales_channel?: Sales_channelOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Sales_channel_currencyOrderByRelationAggregateInput, {
    nullable: true
  })
  sales_channel_currency?: Sales_channel_currencyOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Sales_channel_domainOrderByRelationAggregateInput, {
    nullable: true
  })
  sales_channel_domain?: Sales_channel_domainOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CurrencyOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: CurrencyOrderByRelevanceInput | undefined;
}
