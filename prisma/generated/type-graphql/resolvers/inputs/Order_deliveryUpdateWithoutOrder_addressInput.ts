import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFieldUpdateOperationsInput } from "../inputs/BytesFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { OrderUpdateOneRequiredWithoutOrder_deliveryNestedInput } from "../inputs/OrderUpdateOneRequiredWithoutOrder_deliveryNestedInput";
import { Order_delivery_positionUpdateManyWithoutOrder_deliveryNestedInput } from "../inputs/Order_delivery_positionUpdateManyWithoutOrder_deliveryNestedInput";
import { Shipping_methodUpdateOneRequiredWithoutOrder_deliveryNestedInput } from "../inputs/Shipping_methodUpdateOneRequiredWithoutOrder_deliveryNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("Order_deliveryUpdateWithoutOrder_addressInput", {})
export class Order_deliveryUpdateWithoutOrder_addressInput {
  @TypeGraphQL.Field(_type => BytesFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: BytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BytesFieldUpdateOperationsInput, {
    nullable: true
  })
  version_id?: BytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BytesFieldUpdateOperationsInput, {
    nullable: true
  })
  state_id?: BytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  tracking_codes?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  shipping_date_earliest?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  shipping_date_latest?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  shipping_costs?: StringFieldUpdateOperationsInput | undefined;

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

  @TypeGraphQL.Field(_type => OrderUpdateOneRequiredWithoutOrder_deliveryNestedInput, {
    nullable: true
  })
  order?: OrderUpdateOneRequiredWithoutOrder_deliveryNestedInput | undefined;

  @TypeGraphQL.Field(_type => Shipping_methodUpdateOneRequiredWithoutOrder_deliveryNestedInput, {
    nullable: true
  })
  shipping_method?: Shipping_methodUpdateOneRequiredWithoutOrder_deliveryNestedInput | undefined;

  @TypeGraphQL.Field(_type => Order_delivery_positionUpdateManyWithoutOrder_deliveryNestedInput, {
    nullable: true
  })
  order_delivery_position?: Order_delivery_positionUpdateManyWithoutOrder_deliveryNestedInput | undefined;
}
