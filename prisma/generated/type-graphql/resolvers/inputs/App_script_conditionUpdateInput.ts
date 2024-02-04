import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppUpdateOneRequiredWithoutApp_script_conditionNestedInput } from "../inputs/AppUpdateOneRequiredWithoutApp_script_conditionNestedInput";
import { App_script_condition_translationUpdateManyWithoutApp_script_conditionNestedInput } from "../inputs/App_script_condition_translationUpdateManyWithoutApp_script_conditionNestedInput";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { BytesFieldUpdateOperationsInput } from "../inputs/BytesFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableBytesFieldUpdateOperationsInput } from "../inputs/NullableBytesFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { Rule_conditionUpdateManyWithoutApp_script_conditionNestedInput } from "../inputs/Rule_conditionUpdateManyWithoutApp_script_conditionNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("App_script_conditionUpdateInput", {})
export class App_script_conditionUpdateInput {
  @TypeGraphQL.Field(_type => BytesFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: BytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  identifier?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  active?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  group?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  script?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableBytesFieldUpdateOperationsInput, {
    nullable: true
  })
  constraints?: NullableBytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  config?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  created_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updated_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => AppUpdateOneRequiredWithoutApp_script_conditionNestedInput, {
    nullable: true
  })
  app?: AppUpdateOneRequiredWithoutApp_script_conditionNestedInput | undefined;

  @TypeGraphQL.Field(_type => App_script_condition_translationUpdateManyWithoutApp_script_conditionNestedInput, {
    nullable: true
  })
  app_script_condition_translation?: App_script_condition_translationUpdateManyWithoutApp_script_conditionNestedInput | undefined;

  @TypeGraphQL.Field(_type => Rule_conditionUpdateManyWithoutApp_script_conditionNestedInput, {
    nullable: true
  })
  rule_condition?: Rule_conditionUpdateManyWithoutApp_script_conditionNestedInput | undefined;
}
