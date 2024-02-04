import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { Delivery_timeUpdateOneRequiredWithoutDelivery_time_translationNestedInput } from "../inputs/Delivery_timeUpdateOneRequiredWithoutDelivery_time_translationNestedInput";
import { LanguageUpdateOneRequiredWithoutDelivery_time_translationNestedInput } from "../inputs/LanguageUpdateOneRequiredWithoutDelivery_time_translationNestedInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("Delivery_time_translationUpdateInput", {})
export class Delivery_time_translationUpdateInput {
  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  custom_fields?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  created_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updated_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => Delivery_timeUpdateOneRequiredWithoutDelivery_time_translationNestedInput, {
    nullable: true
  })
  delivery_time?: Delivery_timeUpdateOneRequiredWithoutDelivery_time_translationNestedInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateOneRequiredWithoutDelivery_time_translationNestedInput, {
    nullable: true
  })
  language?: LanguageUpdateOneRequiredWithoutDelivery_time_translationNestedInput | undefined;
}
