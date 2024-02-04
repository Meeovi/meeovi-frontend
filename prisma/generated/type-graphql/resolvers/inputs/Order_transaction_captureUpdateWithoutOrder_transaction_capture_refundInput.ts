import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFieldUpdateOperationsInput } from "../inputs/BytesFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { Order_transactionUpdateOneRequiredWithoutOrder_transaction_captureNestedInput } from "../inputs/Order_transactionUpdateOneRequiredWithoutOrder_transaction_captureNestedInput";
import { State_machine_stateUpdateOneRequiredWithoutOrder_transaction_captureNestedInput } from "../inputs/State_machine_stateUpdateOneRequiredWithoutOrder_transaction_captureNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("Order_transaction_captureUpdateWithoutOrder_transaction_capture_refundInput", {})
export class Order_transaction_captureUpdateWithoutOrder_transaction_capture_refundInput {
  @TypeGraphQL.Field(_type => BytesFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: BytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BytesFieldUpdateOperationsInput, {
    nullable: true
  })
  version_id?: BytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  external_reference?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  amount?: StringFieldUpdateOperationsInput | undefined;

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

  @TypeGraphQL.Field(_type => Order_transactionUpdateOneRequiredWithoutOrder_transaction_captureNestedInput, {
    nullable: true
  })
  order_transaction?: Order_transactionUpdateOneRequiredWithoutOrder_transaction_captureNestedInput | undefined;

  @TypeGraphQL.Field(_type => State_machine_stateUpdateOneRequiredWithoutOrder_transaction_captureNestedInput, {
    nullable: true
  })
  state_machine_state?: State_machine_stateUpdateOneRequiredWithoutOrder_transaction_captureNestedInput | undefined;
}
