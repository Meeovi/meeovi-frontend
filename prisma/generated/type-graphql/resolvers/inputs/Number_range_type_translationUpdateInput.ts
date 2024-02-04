import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { LanguageUpdateOneRequiredWithoutNumber_range_type_translationNestedInput } from "../inputs/LanguageUpdateOneRequiredWithoutNumber_range_type_translationNestedInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { Number_range_typeUpdateOneRequiredWithoutNumber_range_type_translationNestedInput } from "../inputs/Number_range_typeUpdateOneRequiredWithoutNumber_range_type_translationNestedInput";

@TypeGraphQL.InputType("Number_range_type_translationUpdateInput", {})
export class Number_range_type_translationUpdateInput {
  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  type_name?: NullableStringFieldUpdateOperationsInput | undefined;

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

  @TypeGraphQL.Field(_type => LanguageUpdateOneRequiredWithoutNumber_range_type_translationNestedInput, {
    nullable: true
  })
  language?: LanguageUpdateOneRequiredWithoutNumber_range_type_translationNestedInput | undefined;

  @TypeGraphQL.Field(_type => Number_range_typeUpdateOneRequiredWithoutNumber_range_type_translationNestedInput, {
    nullable: true
  })
  number_range_type?: Number_range_typeUpdateOneRequiredWithoutNumber_range_type_translationNestedInput | undefined;
}
