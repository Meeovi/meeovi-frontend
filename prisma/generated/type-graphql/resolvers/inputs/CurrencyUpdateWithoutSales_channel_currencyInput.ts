import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFieldUpdateOperationsInput } from "../inputs/BytesFieldUpdateOperationsInput";
import { CartUpdateManyWithoutCurrencyNestedInput } from "../inputs/CartUpdateManyWithoutCurrencyNestedInput";
import { Currency_country_roundingUpdateManyWithoutCurrencyNestedInput } from "../inputs/Currency_country_roundingUpdateManyWithoutCurrencyNestedInput";
import { Currency_translationUpdateManyWithoutCurrencyNestedInput } from "../inputs/Currency_translationUpdateManyWithoutCurrencyNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableFloatFieldUpdateOperationsInput } from "../inputs/NullableFloatFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { OrderUpdateManyWithoutCurrencyNestedInput } from "../inputs/OrderUpdateManyWithoutCurrencyNestedInput";
import { Promotion_discount_pricesUpdateManyWithoutCurrencyNestedInput } from "../inputs/Promotion_discount_pricesUpdateManyWithoutCurrencyNestedInput";
import { Sales_channelUpdateManyWithoutCurrencyNestedInput } from "../inputs/Sales_channelUpdateManyWithoutCurrencyNestedInput";
import { Sales_channel_domainUpdateManyWithoutCurrencyNestedInput } from "../inputs/Sales_channel_domainUpdateManyWithoutCurrencyNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("CurrencyUpdateWithoutSales_channel_currencyInput", {})
export class CurrencyUpdateWithoutSales_channel_currencyInput {
  @TypeGraphQL.Field(_type => BytesFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: BytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  iso_code?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput, {
    nullable: true
  })
  factor?: FloatFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  symbol?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  position?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput, {
    nullable: true
  })
  decimal_precision?: NullableIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  created_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updated_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  item_rounding?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  total_rounding?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableFloatFieldUpdateOperationsInput, {
    nullable: true
  })
  tax_free_from?: NullableFloatFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => CartUpdateManyWithoutCurrencyNestedInput, {
    nullable: true
  })
  cart?: CartUpdateManyWithoutCurrencyNestedInput | undefined;

  @TypeGraphQL.Field(_type => Currency_country_roundingUpdateManyWithoutCurrencyNestedInput, {
    nullable: true
  })
  currency_country_rounding?: Currency_country_roundingUpdateManyWithoutCurrencyNestedInput | undefined;

  @TypeGraphQL.Field(_type => Currency_translationUpdateManyWithoutCurrencyNestedInput, {
    nullable: true
  })
  currency_translation?: Currency_translationUpdateManyWithoutCurrencyNestedInput | undefined;

  @TypeGraphQL.Field(_type => OrderUpdateManyWithoutCurrencyNestedInput, {
    nullable: true
  })
  order?: OrderUpdateManyWithoutCurrencyNestedInput | undefined;

  @TypeGraphQL.Field(_type => Promotion_discount_pricesUpdateManyWithoutCurrencyNestedInput, {
    nullable: true
  })
  promotion_discount_prices?: Promotion_discount_pricesUpdateManyWithoutCurrencyNestedInput | undefined;

  @TypeGraphQL.Field(_type => Sales_channelUpdateManyWithoutCurrencyNestedInput, {
    nullable: true
  })
  sales_channel?: Sales_channelUpdateManyWithoutCurrencyNestedInput | undefined;

  @TypeGraphQL.Field(_type => Sales_channel_domainUpdateManyWithoutCurrencyNestedInput, {
    nullable: true
  })
  sales_channel_domain?: Sales_channel_domainUpdateManyWithoutCurrencyNestedInput | undefined;
}
