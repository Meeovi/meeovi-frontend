import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { BytesFieldUpdateOperationsInput } from "../inputs/BytesFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { MediaUpdateOneWithoutOrder_line_itemNestedInput } from "../inputs/MediaUpdateOneWithoutOrder_line_itemNestedInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableFloatFieldUpdateOperationsInput } from "../inputs/NullableFloatFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { OrderUpdateOneRequiredWithoutOrder_line_itemNestedInput } from "../inputs/OrderUpdateOneRequiredWithoutOrder_line_itemNestedInput";
import { Order_delivery_positionUpdateManyWithoutOrder_line_itemNestedInput } from "../inputs/Order_delivery_positionUpdateManyWithoutOrder_line_itemNestedInput";
import { Order_line_itemUpdateManyWithoutOrder_line_itemNestedInput } from "../inputs/Order_line_itemUpdateManyWithoutOrder_line_itemNestedInput";
import { Order_line_itemUpdateOneWithoutOther_order_line_itemNestedInput } from "../inputs/Order_line_itemUpdateOneWithoutOther_order_line_itemNestedInput";
import { Order_line_item_downloadUpdateManyWithoutOrder_line_itemNestedInput } from "../inputs/Order_line_item_downloadUpdateManyWithoutOrder_line_itemNestedInput";
import { ProductUpdateOneWithoutOrder_line_itemNestedInput } from "../inputs/ProductUpdateOneWithoutOrder_line_itemNestedInput";
import { PromotionUpdateOneWithoutOrder_line_itemNestedInput } from "../inputs/PromotionUpdateOneWithoutOrder_line_itemNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("Order_line_itemUpdateWithoutOrder_transaction_capture_refund_positionInput", {})
export class Order_line_itemUpdateWithoutOrder_transaction_capture_refund_positionInput {
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
  identifier?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  referenced_id?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  states?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  label?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  description?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  quantity?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableFloatFieldUpdateOperationsInput, {
    nullable: true
  })
  unit_price?: NullableFloatFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableFloatFieldUpdateOperationsInput, {
    nullable: true
  })
  total_price?: NullableFloatFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  type?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  payload?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  price_definition?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  price?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  stackable?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  removable?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  good?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  position?: IntFieldUpdateOperationsInput | undefined;

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

  @TypeGraphQL.Field(_type => Order_delivery_positionUpdateManyWithoutOrder_line_itemNestedInput, {
    nullable: true
  })
  order_delivery_position?: Order_delivery_positionUpdateManyWithoutOrder_line_itemNestedInput | undefined;

  @TypeGraphQL.Field(_type => MediaUpdateOneWithoutOrder_line_itemNestedInput, {
    nullable: true
  })
  media?: MediaUpdateOneWithoutOrder_line_itemNestedInput | undefined;

  @TypeGraphQL.Field(_type => OrderUpdateOneRequiredWithoutOrder_line_itemNestedInput, {
    nullable: true
  })
  order?: OrderUpdateOneRequiredWithoutOrder_line_itemNestedInput | undefined;

  @TypeGraphQL.Field(_type => Order_line_itemUpdateOneWithoutOther_order_line_itemNestedInput, {
    nullable: true
  })
  order_line_item?: Order_line_itemUpdateOneWithoutOther_order_line_itemNestedInput | undefined;

  @TypeGraphQL.Field(_type => Order_line_itemUpdateManyWithoutOrder_line_itemNestedInput, {
    nullable: true
  })
  other_order_line_item?: Order_line_itemUpdateManyWithoutOrder_line_itemNestedInput | undefined;

  @TypeGraphQL.Field(_type => PromotionUpdateOneWithoutOrder_line_itemNestedInput, {
    nullable: true
  })
  promotion?: PromotionUpdateOneWithoutOrder_line_itemNestedInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpdateOneWithoutOrder_line_itemNestedInput, {
    nullable: true
  })
  product?: ProductUpdateOneWithoutOrder_line_itemNestedInput | undefined;

  @TypeGraphQL.Field(_type => Order_line_item_downloadUpdateManyWithoutOrder_line_itemNestedInput, {
    nullable: true
  })
  order_line_item_download?: Order_line_item_downloadUpdateManyWithoutOrder_line_itemNestedInput | undefined;
}
