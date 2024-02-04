import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_payment_methodUpdateOneWithoutPayment_methodNestedInput } from "../inputs/App_payment_methodUpdateOneWithoutPayment_methodNestedInput";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { BytesFieldUpdateOperationsInput } from "../inputs/BytesFieldUpdateOperationsInput";
import { CartUpdateManyWithoutPayment_methodNestedInput } from "../inputs/CartUpdateManyWithoutPayment_methodNestedInput";
import { CustomerUpdateManyWithoutPayment_method_customer_default_payment_method_idTopayment_methodNestedInput } from "../inputs/CustomerUpdateManyWithoutPayment_method_customer_default_payment_method_idTopayment_methodNestedInput";
import { CustomerUpdateManyWithoutPayment_method_customer_last_payment_method_idTopayment_methodNestedInput } from "../inputs/CustomerUpdateManyWithoutPayment_method_customer_last_payment_method_idTopayment_methodNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { MediaUpdateOneWithoutPayment_methodNestedInput } from "../inputs/MediaUpdateOneWithoutPayment_methodNestedInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { Order_transactionUpdateManyWithoutPayment_methodNestedInput } from "../inputs/Order_transactionUpdateManyWithoutPayment_methodNestedInput";
import { Payment_method_translationUpdateManyWithoutPayment_methodNestedInput } from "../inputs/Payment_method_translationUpdateManyWithoutPayment_methodNestedInput";
import { PluginUpdateOneWithoutPayment_methodNestedInput } from "../inputs/PluginUpdateOneWithoutPayment_methodNestedInput";
import { RuleUpdateOneWithoutPayment_methodNestedInput } from "../inputs/RuleUpdateOneWithoutPayment_methodNestedInput";
import { Sales_channel_payment_methodUpdateManyWithoutPayment_methodNestedInput } from "../inputs/Sales_channel_payment_methodUpdateManyWithoutPayment_methodNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("Payment_methodUpdateWithoutSales_channelInput", {})
export class Payment_methodUpdateWithoutSales_channelInput {
  @TypeGraphQL.Field(_type => BytesFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: BytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  handler_identifier?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  position?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  active?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  after_order_enabled?: BoolFieldUpdateOperationsInput | undefined;

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
  technical_name?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => App_payment_methodUpdateOneWithoutPayment_methodNestedInput, {
    nullable: true
  })
  app_payment_method?: App_payment_methodUpdateOneWithoutPayment_methodNestedInput | undefined;

  @TypeGraphQL.Field(_type => CartUpdateManyWithoutPayment_methodNestedInput, {
    nullable: true
  })
  cart?: CartUpdateManyWithoutPayment_methodNestedInput | undefined;

  @TypeGraphQL.Field(_type => CustomerUpdateManyWithoutPayment_method_customer_default_payment_method_idTopayment_methodNestedInput, {
    nullable: true
  })
  customer_customer_default_payment_method_idTopayment_method?: CustomerUpdateManyWithoutPayment_method_customer_default_payment_method_idTopayment_methodNestedInput | undefined;

  @TypeGraphQL.Field(_type => CustomerUpdateManyWithoutPayment_method_customer_last_payment_method_idTopayment_methodNestedInput, {
    nullable: true
  })
  customer_customer_last_payment_method_idTopayment_method?: CustomerUpdateManyWithoutPayment_method_customer_last_payment_method_idTopayment_methodNestedInput | undefined;

  @TypeGraphQL.Field(_type => Order_transactionUpdateManyWithoutPayment_methodNestedInput, {
    nullable: true
  })
  order_transaction?: Order_transactionUpdateManyWithoutPayment_methodNestedInput | undefined;

  @TypeGraphQL.Field(_type => RuleUpdateOneWithoutPayment_methodNestedInput, {
    nullable: true
  })
  rule?: RuleUpdateOneWithoutPayment_methodNestedInput | undefined;

  @TypeGraphQL.Field(_type => MediaUpdateOneWithoutPayment_methodNestedInput, {
    nullable: true
  })
  media?: MediaUpdateOneWithoutPayment_methodNestedInput | undefined;

  @TypeGraphQL.Field(_type => PluginUpdateOneWithoutPayment_methodNestedInput, {
    nullable: true
  })
  plugin?: PluginUpdateOneWithoutPayment_methodNestedInput | undefined;

  @TypeGraphQL.Field(_type => Payment_method_translationUpdateManyWithoutPayment_methodNestedInput, {
    nullable: true
  })
  payment_method_translation?: Payment_method_translationUpdateManyWithoutPayment_methodNestedInput | undefined;

  @TypeGraphQL.Field(_type => Sales_channel_payment_methodUpdateManyWithoutPayment_methodNestedInput, {
    nullable: true
  })
  sales_channel_payment_method?: Sales_channel_payment_methodUpdateManyWithoutPayment_methodNestedInput | undefined;
}
