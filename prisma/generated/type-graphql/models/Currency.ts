import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Cart } from "../models/Cart";
import { Currency_country_rounding } from "../models/Currency_country_rounding";
import { Currency_translation } from "../models/Currency_translation";
import { Order } from "../models/Order";
import { Promotion_discount_prices } from "../models/Promotion_discount_prices";
import { Sales_channel } from "../models/Sales_channel";
import { Sales_channel_currency } from "../models/Sales_channel_currency";
import { Sales_channel_domain } from "../models/Sales_channel_domain";
import { CurrencyCount } from "../resolvers/outputs/CurrencyCount";

@TypeGraphQL.ObjectType("Currency", {})
export class Currency {
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
    nullable: false
  })
  position!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  decimal_precision?: number | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  item_rounding?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  total_rounding?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  tax_free_from?: number | null;

  cart?: Cart[];

  currency_country_rounding?: Currency_country_rounding[];

  currency_translation?: Currency_translation[];

  order?: Order[];

  promotion_discount_prices?: Promotion_discount_prices[];

  sales_channel?: Sales_channel[];

  sales_channel_currency?: Sales_channel_currency[];

  sales_channel_domain?: Sales_channel_domain[];

  @TypeGraphQL.Field(_type => CurrencyCount, {
    nullable: true
  })
  _count?: CurrencyCount | null;
}
