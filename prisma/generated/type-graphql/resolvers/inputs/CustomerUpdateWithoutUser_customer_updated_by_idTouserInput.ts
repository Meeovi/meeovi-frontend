import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntFieldUpdateOperationsInput } from "../inputs/BigIntFieldUpdateOperationsInput";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { BytesFieldUpdateOperationsInput } from "../inputs/BytesFieldUpdateOperationsInput";
import { CartUpdateManyWithoutCustomerNestedInput } from "../inputs/CartUpdateManyWithoutCustomerNestedInput";
import { Customer_addressUpdateManyWithoutCustomerNestedInput } from "../inputs/Customer_addressUpdateManyWithoutCustomerNestedInput";
import { Customer_groupUpdateOneRequiredWithoutCustomerNestedInput } from "../inputs/Customer_groupUpdateOneRequiredWithoutCustomerNestedInput";
import { Customer_recoveryUpdateOneWithoutCustomerNestedInput } from "../inputs/Customer_recoveryUpdateOneWithoutCustomerNestedInput";
import { Customer_tagUpdateManyWithoutCustomerNestedInput } from "../inputs/Customer_tagUpdateManyWithoutCustomerNestedInput";
import { Customer_wishlistUpdateManyWithoutCustomerNestedInput } from "../inputs/Customer_wishlistUpdateManyWithoutCustomerNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableBytesFieldUpdateOperationsInput } from "../inputs/NullableBytesFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableFloatFieldUpdateOperationsInput } from "../inputs/NullableFloatFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { Order_customerUpdateManyWithoutCustomerNestedInput } from "../inputs/Order_customerUpdateManyWithoutCustomerNestedInput";
import { Payment_methodUpdateOneRequiredWithoutCustomer_customer_default_payment_method_idTopayment_methodNestedInput } from "../inputs/Payment_methodUpdateOneRequiredWithoutCustomer_customer_default_payment_method_idTopayment_methodNestedInput";
import { Payment_methodUpdateOneWithoutCustomer_customer_last_payment_method_idTopayment_methodNestedInput } from "../inputs/Payment_methodUpdateOneWithoutCustomer_customer_last_payment_method_idTopayment_methodNestedInput";
import { Product_reviewUpdateManyWithoutCustomerNestedInput } from "../inputs/Product_reviewUpdateManyWithoutCustomerNestedInput";
import { Promotion_persona_customerUpdateManyWithoutCustomerNestedInput } from "../inputs/Promotion_persona_customerUpdateManyWithoutCustomerNestedInput";
import { Sales_channelUpdateOneRequiredWithoutCustomer_customer_sales_channel_idTosales_channelNestedInput } from "../inputs/Sales_channelUpdateOneRequiredWithoutCustomer_customer_sales_channel_idTosales_channelNestedInput";
import { Sales_channelUpdateOneWithoutCustomer_customer_bound_sales_channel_idTosales_channelNestedInput } from "../inputs/Sales_channelUpdateOneWithoutCustomer_customer_bound_sales_channel_idTosales_channelNestedInput";
import { Sales_channel_api_contextUpdateManyWithoutCustomerNestedInput } from "../inputs/Sales_channel_api_contextUpdateManyWithoutCustomerNestedInput";
import { SalutationUpdateOneWithoutCustomerNestedInput } from "../inputs/SalutationUpdateOneWithoutCustomerNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneWithoutCustomer_customer_created_by_idTouserNestedInput } from "../inputs/UserUpdateOneWithoutCustomer_customer_created_by_idTouserNestedInput";

@TypeGraphQL.InputType("CustomerUpdateWithoutUser_customer_updated_by_idTouserInput", {})
export class CustomerUpdateWithoutUser_customer_updated_by_idTouserInput {
  @TypeGraphQL.Field(_type => BytesFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: BytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BigIntFieldUpdateOperationsInput, {
    nullable: true
  })
  auto_increment?: BigIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableBytesFieldUpdateOperationsInput, {
    nullable: true
  })
  requested_customer_group_id?: NullableBytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BytesFieldUpdateOperationsInput, {
    nullable: true
  })
  language_id?: BytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BytesFieldUpdateOperationsInput, {
    nullable: true
  })
  default_billing_address_id?: BytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BytesFieldUpdateOperationsInput, {
    nullable: true
  })
  default_shipping_address_id?: BytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  customer_number?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  first_name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  last_name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  company?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  password?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  legacy_password?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  legacy_encoder?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  email?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  title?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  vat_ids?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  active?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  doubleOptInRegistration?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  double_opt_in_registration?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  doubleOptInEmailSentDate?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  double_opt_in_email_sent_date?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  doubleOptInConfirmDate?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  double_opt_in_confirm_date?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  hash?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  guest?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  first_login?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  last_login?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  newsletter_sales_channel_ids?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  birthday?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  last_order_date?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  order_count?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableFloatFieldUpdateOperationsInput, {
    nullable: true
  })
  order_total_amount?: NullableFloatFieldUpdateOperationsInput | undefined;

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
  remote_address?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  tag_ids?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  account_type?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableIntFieldUpdateOperationsInput, {
    nullable: true
  })
  review_count?: NullableIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => CartUpdateManyWithoutCustomerNestedInput, {
    nullable: true
  })
  cart?: CartUpdateManyWithoutCustomerNestedInput | undefined;

  @TypeGraphQL.Field(_type => Sales_channelUpdateOneWithoutCustomer_customer_bound_sales_channel_idTosales_channelNestedInput, {
    nullable: true
  })
  sales_channel_customer_bound_sales_channel_idTosales_channel?: Sales_channelUpdateOneWithoutCustomer_customer_bound_sales_channel_idTosales_channelNestedInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneWithoutCustomer_customer_created_by_idTouserNestedInput, {
    nullable: true
  })
  user_customer_created_by_idTouser?: UserUpdateOneWithoutCustomer_customer_created_by_idTouserNestedInput | undefined;

  @TypeGraphQL.Field(_type => Customer_groupUpdateOneRequiredWithoutCustomerNestedInput, {
    nullable: true
  })
  customer_group?: Customer_groupUpdateOneRequiredWithoutCustomerNestedInput | undefined;

  @TypeGraphQL.Field(_type => Payment_methodUpdateOneRequiredWithoutCustomer_customer_default_payment_method_idTopayment_methodNestedInput, {
    nullable: true
  })
  payment_method_customer_default_payment_method_idTopayment_method?: Payment_methodUpdateOneRequiredWithoutCustomer_customer_default_payment_method_idTopayment_methodNestedInput | undefined;

  @TypeGraphQL.Field(_type => Payment_methodUpdateOneWithoutCustomer_customer_last_payment_method_idTopayment_methodNestedInput, {
    nullable: true
  })
  payment_method_customer_last_payment_method_idTopayment_method?: Payment_methodUpdateOneWithoutCustomer_customer_last_payment_method_idTopayment_methodNestedInput | undefined;

  @TypeGraphQL.Field(_type => Sales_channelUpdateOneRequiredWithoutCustomer_customer_sales_channel_idTosales_channelNestedInput, {
    nullable: true
  })
  sales_channel_customer_sales_channel_idTosales_channel?: Sales_channelUpdateOneRequiredWithoutCustomer_customer_sales_channel_idTosales_channelNestedInput | undefined;

  @TypeGraphQL.Field(_type => SalutationUpdateOneWithoutCustomerNestedInput, {
    nullable: true
  })
  salutation?: SalutationUpdateOneWithoutCustomerNestedInput | undefined;

  @TypeGraphQL.Field(_type => Customer_addressUpdateManyWithoutCustomerNestedInput, {
    nullable: true
  })
  customer_address?: Customer_addressUpdateManyWithoutCustomerNestedInput | undefined;

  @TypeGraphQL.Field(_type => Customer_recoveryUpdateOneWithoutCustomerNestedInput, {
    nullable: true
  })
  customer_recovery?: Customer_recoveryUpdateOneWithoutCustomerNestedInput | undefined;

  @TypeGraphQL.Field(_type => Customer_tagUpdateManyWithoutCustomerNestedInput, {
    nullable: true
  })
  customer_tag?: Customer_tagUpdateManyWithoutCustomerNestedInput | undefined;

  @TypeGraphQL.Field(_type => Customer_wishlistUpdateManyWithoutCustomerNestedInput, {
    nullable: true
  })
  customer_wishlist?: Customer_wishlistUpdateManyWithoutCustomerNestedInput | undefined;

  @TypeGraphQL.Field(_type => Order_customerUpdateManyWithoutCustomerNestedInput, {
    nullable: true
  })
  order_customer?: Order_customerUpdateManyWithoutCustomerNestedInput | undefined;

  @TypeGraphQL.Field(_type => Product_reviewUpdateManyWithoutCustomerNestedInput, {
    nullable: true
  })
  product_review?: Product_reviewUpdateManyWithoutCustomerNestedInput | undefined;

  @TypeGraphQL.Field(_type => Promotion_persona_customerUpdateManyWithoutCustomerNestedInput, {
    nullable: true
  })
  promotion_persona_customer?: Promotion_persona_customerUpdateManyWithoutCustomerNestedInput | undefined;

  @TypeGraphQL.Field(_type => Sales_channel_api_contextUpdateManyWithoutCustomerNestedInput, {
    nullable: true
  })
  sales_channel_api_context?: Sales_channel_api_contextUpdateManyWithoutCustomerNestedInput | undefined;
}
