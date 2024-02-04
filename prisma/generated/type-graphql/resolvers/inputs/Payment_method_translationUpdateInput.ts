import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { LanguageUpdateOneRequiredWithoutPayment_method_translationNestedInput } from "../inputs/LanguageUpdateOneRequiredWithoutPayment_method_translationNestedInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { Payment_methodUpdateOneRequiredWithoutPayment_method_translationNestedInput } from "../inputs/Payment_methodUpdateOneRequiredWithoutPayment_method_translationNestedInput";

@TypeGraphQL.InputType("Payment_method_translationUpdateInput", {})
export class Payment_method_translationUpdateInput {
  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  distinguishable_name?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  description?: NullableStringFieldUpdateOperationsInput | undefined;

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

  @TypeGraphQL.Field(_type => LanguageUpdateOneRequiredWithoutPayment_method_translationNestedInput, {
    nullable: true
  })
  language?: LanguageUpdateOneRequiredWithoutPayment_method_translationNestedInput | undefined;

  @TypeGraphQL.Field(_type => Payment_methodUpdateOneRequiredWithoutPayment_method_translationNestedInput, {
    nullable: true
  })
  payment_method?: Payment_methodUpdateOneRequiredWithoutPayment_method_translationNestedInput | undefined;
}
