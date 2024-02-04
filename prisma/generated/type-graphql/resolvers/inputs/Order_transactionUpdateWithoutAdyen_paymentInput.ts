import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Adyen_payment_captureUpdateManyWithoutOrder_transactionNestedInput } from "../inputs/Adyen_payment_captureUpdateManyWithoutOrder_transactionNestedInput";
import { Adyen_refundUpdateManyWithoutOrder_transactionNestedInput } from "../inputs/Adyen_refundUpdateManyWithoutOrder_transactionNestedInput";
import { BytesFieldUpdateOperationsInput } from "../inputs/BytesFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { OrderUpdateOneRequiredWithoutOrder_transactionNestedInput } from "../inputs/OrderUpdateOneRequiredWithoutOrder_transactionNestedInput";
import { Order_transaction_captureUpdateManyWithoutOrder_transactionNestedInput } from "../inputs/Order_transaction_captureUpdateManyWithoutOrder_transactionNestedInput";
import { Payment_methodUpdateOneRequiredWithoutOrder_transactionNestedInput } from "../inputs/Payment_methodUpdateOneRequiredWithoutOrder_transactionNestedInput";
import { State_machine_stateUpdateOneRequiredWithoutOrder_transactionNestedInput } from "../inputs/State_machine_stateUpdateOneRequiredWithoutOrder_transactionNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("Order_transactionUpdateWithoutAdyen_paymentInput", {})
export class Order_transactionUpdateWithoutAdyen_paymentInput {
  @TypeGraphQL.Field(_type => BytesFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: BytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BytesFieldUpdateOperationsInput, {
    nullable: true
  })
  version_id?: BytesFieldUpdateOperationsInput | undefined;

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

  @TypeGraphQL.Field(_type => Adyen_payment_captureUpdateManyWithoutOrder_transactionNestedInput, {
    nullable: true
  })
  adyen_payment_capture?: Adyen_payment_captureUpdateManyWithoutOrder_transactionNestedInput | undefined;

  @TypeGraphQL.Field(_type => Adyen_refundUpdateManyWithoutOrder_transactionNestedInput, {
    nullable: true
  })
  adyen_refund?: Adyen_refundUpdateManyWithoutOrder_transactionNestedInput | undefined;

  @TypeGraphQL.Field(_type => OrderUpdateOneRequiredWithoutOrder_transactionNestedInput, {
    nullable: true
  })
  order?: OrderUpdateOneRequiredWithoutOrder_transactionNestedInput | undefined;

  @TypeGraphQL.Field(_type => Payment_methodUpdateOneRequiredWithoutOrder_transactionNestedInput, {
    nullable: true
  })
  payment_method?: Payment_methodUpdateOneRequiredWithoutOrder_transactionNestedInput | undefined;

  @TypeGraphQL.Field(_type => State_machine_stateUpdateOneRequiredWithoutOrder_transactionNestedInput, {
    nullable: true
  })
  state_machine_state?: State_machine_stateUpdateOneRequiredWithoutOrder_transactionNestedInput | undefined;

  @TypeGraphQL.Field(_type => Order_transaction_captureUpdateManyWithoutOrder_transactionNestedInput, {
    nullable: true
  })
  order_transaction_capture?: Order_transaction_captureUpdateManyWithoutOrder_transactionNestedInput | undefined;
}
