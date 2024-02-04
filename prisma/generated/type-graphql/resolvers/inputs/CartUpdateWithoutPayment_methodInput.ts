import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntFieldUpdateOperationsInput } from "../inputs/BigIntFieldUpdateOperationsInput";
import { CountryUpdateOneRequiredWithoutCartNestedInput } from "../inputs/CountryUpdateOneRequiredWithoutCartNestedInput";
import { CurrencyUpdateOneRequiredWithoutCartNestedInput } from "../inputs/CurrencyUpdateOneRequiredWithoutCartNestedInput";
import { CustomerUpdateOneWithoutCartNestedInput } from "../inputs/CustomerUpdateOneWithoutCartNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { Sales_channelUpdateOneRequiredWithoutCartNestedInput } from "../inputs/Sales_channelUpdateOneRequiredWithoutCartNestedInput";
import { Shipping_methodUpdateOneRequiredWithoutCartNestedInput } from "../inputs/Shipping_methodUpdateOneRequiredWithoutCartNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("CartUpdateWithoutPayment_methodInput", {})
export class CartUpdateWithoutPayment_methodInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  token?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  cart?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput, {
    nullable: true
  })
  price?: FloatFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  line_item_count?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  rule_ids?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  created_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updated_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BigIntFieldUpdateOperationsInput, {
    nullable: true
  })
  auto_increment?: BigIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => CountryUpdateOneRequiredWithoutCartNestedInput, {
    nullable: true
  })
  country?: CountryUpdateOneRequiredWithoutCartNestedInput | undefined;

  @TypeGraphQL.Field(_type => CurrencyUpdateOneRequiredWithoutCartNestedInput, {
    nullable: true
  })
  currency?: CurrencyUpdateOneRequiredWithoutCartNestedInput | undefined;

  @TypeGraphQL.Field(_type => CustomerUpdateOneWithoutCartNestedInput, {
    nullable: true
  })
  customer?: CustomerUpdateOneWithoutCartNestedInput | undefined;

  @TypeGraphQL.Field(_type => Sales_channelUpdateOneRequiredWithoutCartNestedInput, {
    nullable: true
  })
  sales_channel?: Sales_channelUpdateOneRequiredWithoutCartNestedInput | undefined;

  @TypeGraphQL.Field(_type => Shipping_methodUpdateOneRequiredWithoutCartNestedInput, {
    nullable: true
  })
  shipping_method?: Shipping_methodUpdateOneRequiredWithoutCartNestedInput | undefined;
}
