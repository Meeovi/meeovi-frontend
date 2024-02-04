import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntFieldUpdateOperationsInput } from "../inputs/BigIntFieldUpdateOperationsInput";
import { BytesFieldUpdateOperationsInput } from "../inputs/BytesFieldUpdateOperationsInput";
import { CurrencyUpdateOneRequiredWithoutOrderNestedInput } from "../inputs/CurrencyUpdateOneRequiredWithoutOrderNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { DocumentUpdateManyWithoutOrderNestedInput } from "../inputs/DocumentUpdateManyWithoutOrderNestedInput";
import { Klarna_order_extensionUpdateManyWithoutOrderNestedInput } from "../inputs/Klarna_order_extensionUpdateManyWithoutOrderNestedInput";
import { LanguageUpdateOneRequiredWithoutOrderNestedInput } from "../inputs/LanguageUpdateOneRequiredWithoutOrderNestedInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableFloatFieldUpdateOperationsInput } from "../inputs/NullableFloatFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { Order_addressUpdateManyWithoutOrderNestedInput } from "../inputs/Order_addressUpdateManyWithoutOrderNestedInput";
import { Order_customerUpdateManyWithoutOrderNestedInput } from "../inputs/Order_customerUpdateManyWithoutOrderNestedInput";
import { Order_deliveryUpdateManyWithoutOrderNestedInput } from "../inputs/Order_deliveryUpdateManyWithoutOrderNestedInput";
import { Order_tagUpdateManyWithoutOrderNestedInput } from "../inputs/Order_tagUpdateManyWithoutOrderNestedInput";
import { Order_transactionUpdateManyWithoutOrderNestedInput } from "../inputs/Order_transactionUpdateManyWithoutOrderNestedInput";
import { Sales_channelUpdateOneRequiredWithoutOrderNestedInput } from "../inputs/Sales_channelUpdateOneRequiredWithoutOrderNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneWithoutOrder_order_created_by_idTouserNestedInput } from "../inputs/UserUpdateOneWithoutOrder_order_created_by_idTouserNestedInput";
import { UserUpdateOneWithoutOrder_order_updated_by_idTouserNestedInput } from "../inputs/UserUpdateOneWithoutOrder_order_updated_by_idTouserNestedInput";

@TypeGraphQL.InputType("OrderUpdateWithoutOrder_line_itemInput", {})
export class OrderUpdateWithoutOrder_line_itemInput {
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

  @TypeGraphQL.Field(_type => BigIntFieldUpdateOperationsInput, {
    nullable: true
  })
  auto_increment?: BigIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  order_number?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableFloatFieldUpdateOperationsInput, {
    nullable: true
  })
  currency_factor?: NullableFloatFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BytesFieldUpdateOperationsInput, {
    nullable: true
  })
  billing_address_id?: BytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BytesFieldUpdateOperationsInput, {
    nullable: true
  })
  billing_address_version_id?: BytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  price?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  order_date_time?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  order_date?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableFloatFieldUpdateOperationsInput, {
    nullable: true
  })
  amount_total?: NullableFloatFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableFloatFieldUpdateOperationsInput, {
    nullable: true
  })
  amount_net?: NullableFloatFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableFloatFieldUpdateOperationsInput, {
    nullable: true
  })
  position_price?: NullableFloatFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  tax_status?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  shipping_costs?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableFloatFieldUpdateOperationsInput, {
    nullable: true
  })
  shipping_total?: NullableFloatFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  deep_link_code?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  custom_fields?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  affiliate_code?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  campaign_code?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  customer_comment?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  created_at?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updated_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  item_rounding?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  total_rounding?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  rule_ids?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  source?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DocumentUpdateManyWithoutOrderNestedInput, {
    nullable: true
  })
  document?: DocumentUpdateManyWithoutOrderNestedInput | undefined;

  @TypeGraphQL.Field(_type => Klarna_order_extensionUpdateManyWithoutOrderNestedInput, {
    nullable: true
  })
  klarna_order_extension?: Klarna_order_extensionUpdateManyWithoutOrderNestedInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateOneRequiredWithoutOrderNestedInput, {
    nullable: true
  })
  language?: LanguageUpdateOneRequiredWithoutOrderNestedInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneWithoutOrder_order_created_by_idTouserNestedInput, {
    nullable: true
  })
  user_order_created_by_idTouser?: UserUpdateOneWithoutOrder_order_created_by_idTouserNestedInput | undefined;

  @TypeGraphQL.Field(_type => CurrencyUpdateOneRequiredWithoutOrderNestedInput, {
    nullable: true
  })
  currency?: CurrencyUpdateOneRequiredWithoutOrderNestedInput | undefined;

  @TypeGraphQL.Field(_type => Sales_channelUpdateOneRequiredWithoutOrderNestedInput, {
    nullable: true
  })
  sales_channel?: Sales_channelUpdateOneRequiredWithoutOrderNestedInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneWithoutOrder_order_updated_by_idTouserNestedInput, {
    nullable: true
  })
  user_order_updated_by_idTouser?: UserUpdateOneWithoutOrder_order_updated_by_idTouserNestedInput | undefined;

  @TypeGraphQL.Field(_type => Order_addressUpdateManyWithoutOrderNestedInput, {
    nullable: true
  })
  order_address?: Order_addressUpdateManyWithoutOrderNestedInput | undefined;

  @TypeGraphQL.Field(_type => Order_customerUpdateManyWithoutOrderNestedInput, {
    nullable: true
  })
  order_customer?: Order_customerUpdateManyWithoutOrderNestedInput | undefined;

  @TypeGraphQL.Field(_type => Order_deliveryUpdateManyWithoutOrderNestedInput, {
    nullable: true
  })
  order_delivery?: Order_deliveryUpdateManyWithoutOrderNestedInput | undefined;

  @TypeGraphQL.Field(_type => Order_tagUpdateManyWithoutOrderNestedInput, {
    nullable: true
  })
  order_tag?: Order_tagUpdateManyWithoutOrderNestedInput | undefined;

  @TypeGraphQL.Field(_type => Order_transactionUpdateManyWithoutOrderNestedInput, {
    nullable: true
  })
  order_transaction?: Order_transactionUpdateManyWithoutOrderNestedInput | undefined;
}
