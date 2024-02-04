import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_flow_actionUpdateOneWithoutFlow_sequenceNestedInput } from "../inputs/App_flow_actionUpdateOneWithoutFlow_sequenceNestedInput";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { BytesFieldUpdateOperationsInput } from "../inputs/BytesFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FlowUpdateOneRequiredWithoutFlow_sequenceNestedInput } from "../inputs/FlowUpdateOneRequiredWithoutFlow_sequenceNestedInput";
import { Flow_sequenceUpdateManyWithoutFlow_sequenceNestedInput } from "../inputs/Flow_sequenceUpdateManyWithoutFlow_sequenceNestedInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { RuleUpdateOneWithoutFlow_sequenceNestedInput } from "../inputs/RuleUpdateOneWithoutFlow_sequenceNestedInput";

@TypeGraphQL.InputType("Flow_sequenceUpdateWithoutFlow_sequenceInput", {})
export class Flow_sequenceUpdateWithoutFlow_sequenceInput {
  @TypeGraphQL.Field(_type => BytesFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: BytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  action_name?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  config?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  position?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  display_group?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  true_case?: BoolFieldUpdateOperationsInput | undefined;

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

  @TypeGraphQL.Field(_type => App_flow_actionUpdateOneWithoutFlow_sequenceNestedInput, {
    nullable: true
  })
  app_flow_action?: App_flow_actionUpdateOneWithoutFlow_sequenceNestedInput | undefined;

  @TypeGraphQL.Field(_type => FlowUpdateOneRequiredWithoutFlow_sequenceNestedInput, {
    nullable: true
  })
  flow?: FlowUpdateOneRequiredWithoutFlow_sequenceNestedInput | undefined;

  @TypeGraphQL.Field(_type => Flow_sequenceUpdateManyWithoutFlow_sequenceNestedInput, {
    nullable: true
  })
  other_flow_sequence?: Flow_sequenceUpdateManyWithoutFlow_sequenceNestedInput | undefined;

  @TypeGraphQL.Field(_type => RuleUpdateOneWithoutFlow_sequenceNestedInput, {
    nullable: true
  })
  rule?: RuleUpdateOneWithoutFlow_sequenceNestedInput | undefined;
}
