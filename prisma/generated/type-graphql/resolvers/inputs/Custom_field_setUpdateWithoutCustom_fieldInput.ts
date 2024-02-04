import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppUpdateOneWithoutCustom_field_setNestedInput } from "../inputs/AppUpdateOneWithoutCustom_field_setNestedInput";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { BytesFieldUpdateOperationsInput } from "../inputs/BytesFieldUpdateOperationsInput";
import { Custom_field_set_relationUpdateManyWithoutCustom_field_setNestedInput } from "../inputs/Custom_field_set_relationUpdateManyWithoutCustom_field_setNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { Product_custom_field_setUpdateManyWithoutCustom_field_setNestedInput } from "../inputs/Product_custom_field_setUpdateManyWithoutCustom_field_setNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("Custom_field_setUpdateWithoutCustom_fieldInput", {})
export class Custom_field_setUpdateWithoutCustom_fieldInput {
  @TypeGraphQL.Field(_type => BytesFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: BytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  config?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  active?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  position?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  global?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  created_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updated_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => AppUpdateOneWithoutCustom_field_setNestedInput, {
    nullable: true
  })
  app?: AppUpdateOneWithoutCustom_field_setNestedInput | undefined;

  @TypeGraphQL.Field(_type => Custom_field_set_relationUpdateManyWithoutCustom_field_setNestedInput, {
    nullable: true
  })
  custom_field_set_relation?: Custom_field_set_relationUpdateManyWithoutCustom_field_setNestedInput | undefined;

  @TypeGraphQL.Field(_type => Product_custom_field_setUpdateManyWithoutCustom_field_setNestedInput, {
    nullable: true
  })
  product_custom_field_set?: Product_custom_field_setUpdateManyWithoutCustom_field_setNestedInput | undefined;
}
