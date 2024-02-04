import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFieldUpdateOperationsInput } from "../inputs/BytesFieldUpdateOperationsInput";
import { CurrencyUpdateOneRequiredWithoutPromotion_discount_pricesNestedInput } from "../inputs/CurrencyUpdateOneRequiredWithoutPromotion_discount_pricesNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { Promotion_discountUpdateOneRequiredWithoutPromotion_discount_pricesNestedInput } from "../inputs/Promotion_discountUpdateOneRequiredWithoutPromotion_discount_pricesNestedInput";

@TypeGraphQL.InputType("Promotion_discount_pricesUpdateInput", {})
export class Promotion_discount_pricesUpdateInput {
  @TypeGraphQL.Field(_type => BytesFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: BytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput, {
    nullable: true
  })
  price?: FloatFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  created_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updated_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => CurrencyUpdateOneRequiredWithoutPromotion_discount_pricesNestedInput, {
    nullable: true
  })
  currency?: CurrencyUpdateOneRequiredWithoutPromotion_discount_pricesNestedInput | undefined;

  @TypeGraphQL.Field(_type => Promotion_discountUpdateOneRequiredWithoutPromotion_discount_pricesNestedInput, {
    nullable: true
  })
  promotion_discount?: Promotion_discountUpdateOneRequiredWithoutPromotion_discount_pricesNestedInput | undefined;
}
