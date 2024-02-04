import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartCreateNestedManyWithoutCurrencyInput } from "../inputs/CartCreateNestedManyWithoutCurrencyInput";
import { Currency_country_roundingCreateNestedManyWithoutCurrencyInput } from "../inputs/Currency_country_roundingCreateNestedManyWithoutCurrencyInput";
import { Currency_translationCreateNestedManyWithoutCurrencyInput } from "../inputs/Currency_translationCreateNestedManyWithoutCurrencyInput";
import { OrderCreateNestedManyWithoutCurrencyInput } from "../inputs/OrderCreateNestedManyWithoutCurrencyInput";
import { Promotion_discount_pricesCreateNestedManyWithoutCurrencyInput } from "../inputs/Promotion_discount_pricesCreateNestedManyWithoutCurrencyInput";
import { Sales_channelCreateNestedManyWithoutCurrencyInput } from "../inputs/Sales_channelCreateNestedManyWithoutCurrencyInput";
import { Sales_channel_currencyCreateNestedManyWithoutCurrencyInput } from "../inputs/Sales_channel_currencyCreateNestedManyWithoutCurrencyInput";
import { Sales_channel_domainCreateNestedManyWithoutCurrencyInput } from "../inputs/Sales_channel_domainCreateNestedManyWithoutCurrencyInput";

@TypeGraphQL.InputType("CurrencyCreateInput", {})
export class CurrencyCreateInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  iso_code!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  factor!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  symbol!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  position?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  decimal_precision?: number | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  item_rounding?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  total_rounding?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  tax_free_from?: number | undefined;

  @TypeGraphQL.Field(_type => CartCreateNestedManyWithoutCurrencyInput, {
    nullable: true
  })
  cart?: CartCreateNestedManyWithoutCurrencyInput | undefined;

  @TypeGraphQL.Field(_type => Currency_country_roundingCreateNestedManyWithoutCurrencyInput, {
    nullable: true
  })
  currency_country_rounding?: Currency_country_roundingCreateNestedManyWithoutCurrencyInput | undefined;

  @TypeGraphQL.Field(_type => Currency_translationCreateNestedManyWithoutCurrencyInput, {
    nullable: true
  })
  currency_translation?: Currency_translationCreateNestedManyWithoutCurrencyInput | undefined;

  @TypeGraphQL.Field(_type => OrderCreateNestedManyWithoutCurrencyInput, {
    nullable: true
  })
  order?: OrderCreateNestedManyWithoutCurrencyInput | undefined;

  @TypeGraphQL.Field(_type => Promotion_discount_pricesCreateNestedManyWithoutCurrencyInput, {
    nullable: true
  })
  promotion_discount_prices?: Promotion_discount_pricesCreateNestedManyWithoutCurrencyInput | undefined;

  @TypeGraphQL.Field(_type => Sales_channelCreateNestedManyWithoutCurrencyInput, {
    nullable: true
  })
  sales_channel?: Sales_channelCreateNestedManyWithoutCurrencyInput | undefined;

  @TypeGraphQL.Field(_type => Sales_channel_currencyCreateNestedManyWithoutCurrencyInput, {
    nullable: true
  })
  sales_channel_currency?: Sales_channel_currencyCreateNestedManyWithoutCurrencyInput | undefined;

  @TypeGraphQL.Field(_type => Sales_channel_domainCreateNestedManyWithoutCurrencyInput, {
    nullable: true
  })
  sales_channel_domain?: Sales_channel_domainCreateNestedManyWithoutCurrencyInput | undefined;
}
