import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFieldUpdateOperationsInput } from "../inputs/BytesFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { Order_line_itemUpdateOneRequiredWithoutOrder_transaction_capture_refund_positionNestedInput } from "../inputs/Order_line_itemUpdateOneRequiredWithoutOrder_transaction_capture_refund_positionNestedInput";
import { Order_transaction_capture_refundUpdateOneRequiredWithoutOrder_transaction_capture_refund_positionNestedInput } from "../inputs/Order_transaction_capture_refundUpdateOneRequiredWithoutOrder_transaction_capture_refund_positionNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("Order_transaction_capture_refund_positionUpdateInput", {})
export class Order_transaction_capture_refund_positionUpdateInput {
  @TypeGraphQL.Field(_type => BytesFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: BytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BytesFieldUpdateOperationsInput, {
    nullable: true
  })
  version_id?: BytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  quantity?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  reason?: NullableStringFieldUpdateOperationsInput | undefined;

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

  @TypeGraphQL.Field(_type => Order_line_itemUpdateOneRequiredWithoutOrder_transaction_capture_refund_positionNestedInput, {
    nullable: true
  })
  order_line_item?: Order_line_itemUpdateOneRequiredWithoutOrder_transaction_capture_refund_positionNestedInput | undefined;

  @TypeGraphQL.Field(_type => Order_transaction_capture_refundUpdateOneRequiredWithoutOrder_transaction_capture_refund_positionNestedInput, {
    nullable: true
  })
  order_transaction_capture_refund?: Order_transaction_capture_refundUpdateOneRequiredWithoutOrder_transaction_capture_refund_positionNestedInput | undefined;
}
