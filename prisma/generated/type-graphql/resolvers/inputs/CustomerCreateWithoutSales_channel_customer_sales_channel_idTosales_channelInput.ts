import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartCreateNestedManyWithoutCustomerInput } from "../inputs/CartCreateNestedManyWithoutCustomerInput";
import { Customer_addressCreateNestedManyWithoutCustomerInput } from "../inputs/Customer_addressCreateNestedManyWithoutCustomerInput";
import { Customer_groupCreateNestedOneWithoutCustomerInput } from "../inputs/Customer_groupCreateNestedOneWithoutCustomerInput";
import { Customer_recoveryCreateNestedOneWithoutCustomerInput } from "../inputs/Customer_recoveryCreateNestedOneWithoutCustomerInput";
import { Customer_tagCreateNestedManyWithoutCustomerInput } from "../inputs/Customer_tagCreateNestedManyWithoutCustomerInput";
import { Customer_wishlistCreateNestedManyWithoutCustomerInput } from "../inputs/Customer_wishlistCreateNestedManyWithoutCustomerInput";
import { Order_customerCreateNestedManyWithoutCustomerInput } from "../inputs/Order_customerCreateNestedManyWithoutCustomerInput";
import { Payment_methodCreateNestedOneWithoutCustomer_customer_default_payment_method_idTopayment_methodInput } from "../inputs/Payment_methodCreateNestedOneWithoutCustomer_customer_default_payment_method_idTopayment_methodInput";
import { Payment_methodCreateNestedOneWithoutCustomer_customer_last_payment_method_idTopayment_methodInput } from "../inputs/Payment_methodCreateNestedOneWithoutCustomer_customer_last_payment_method_idTopayment_methodInput";
import { Product_reviewCreateNestedManyWithoutCustomerInput } from "../inputs/Product_reviewCreateNestedManyWithoutCustomerInput";
import { Promotion_persona_customerCreateNestedManyWithoutCustomerInput } from "../inputs/Promotion_persona_customerCreateNestedManyWithoutCustomerInput";
import { Sales_channelCreateNestedOneWithoutCustomer_customer_bound_sales_channel_idTosales_channelInput } from "../inputs/Sales_channelCreateNestedOneWithoutCustomer_customer_bound_sales_channel_idTosales_channelInput";
import { Sales_channel_api_contextCreateNestedManyWithoutCustomerInput } from "../inputs/Sales_channel_api_contextCreateNestedManyWithoutCustomerInput";
import { SalutationCreateNestedOneWithoutCustomerInput } from "../inputs/SalutationCreateNestedOneWithoutCustomerInput";
import { UserCreateNestedOneWithoutCustomer_customer_created_by_idTouserInput } from "../inputs/UserCreateNestedOneWithoutCustomer_customer_created_by_idTouserInput";
import { UserCreateNestedOneWithoutCustomer_customer_updated_by_idTouserInput } from "../inputs/UserCreateNestedOneWithoutCustomer_customer_updated_by_idTouserInput";

@TypeGraphQL.InputType("CustomerCreateWithoutSales_channel_customer_sales_channel_idTosales_channelInput", {})
export class CustomerCreateWithoutSales_channel_customer_sales_channel_idTosales_channelInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  auto_increment?: bigint | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  requested_customer_group_id?: Buffer | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  language_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  default_billing_address_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  default_shipping_address_id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  customer_number!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  first_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  last_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  company?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  password?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  legacy_password?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  legacy_encoder?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  title?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  vat_ids?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  active?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  doubleOptInRegistration?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  double_opt_in_registration?: boolean | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  doubleOptInEmailSentDate?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  double_opt_in_email_sent_date?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  doubleOptInConfirmDate?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  double_opt_in_confirm_date?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  hash?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  guest?: boolean | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  first_login?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  last_login?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  newsletter_sales_channel_ids?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  birthday?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  last_order_date?: Date | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  order_count?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  order_total_amount?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  custom_fields?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  affiliate_code?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  campaign_code?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  remote_address?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tag_ids?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  account_type?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  review_count?: number | undefined;

  @TypeGraphQL.Field(_type => CartCreateNestedManyWithoutCustomerInput, {
    nullable: true
  })
  cart?: CartCreateNestedManyWithoutCustomerInput | undefined;

  @TypeGraphQL.Field(_type => Sales_channelCreateNestedOneWithoutCustomer_customer_bound_sales_channel_idTosales_channelInput, {
    nullable: true
  })
  sales_channel_customer_bound_sales_channel_idTosales_channel?: Sales_channelCreateNestedOneWithoutCustomer_customer_bound_sales_channel_idTosales_channelInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutCustomer_customer_created_by_idTouserInput, {
    nullable: true
  })
  user_customer_created_by_idTouser?: UserCreateNestedOneWithoutCustomer_customer_created_by_idTouserInput | undefined;

  @TypeGraphQL.Field(_type => Customer_groupCreateNestedOneWithoutCustomerInput, {
    nullable: false
  })
  customer_group!: Customer_groupCreateNestedOneWithoutCustomerInput;

  @TypeGraphQL.Field(_type => Payment_methodCreateNestedOneWithoutCustomer_customer_default_payment_method_idTopayment_methodInput, {
    nullable: false
  })
  payment_method_customer_default_payment_method_idTopayment_method!: Payment_methodCreateNestedOneWithoutCustomer_customer_default_payment_method_idTopayment_methodInput;

  @TypeGraphQL.Field(_type => Payment_methodCreateNestedOneWithoutCustomer_customer_last_payment_method_idTopayment_methodInput, {
    nullable: true
  })
  payment_method_customer_last_payment_method_idTopayment_method?: Payment_methodCreateNestedOneWithoutCustomer_customer_last_payment_method_idTopayment_methodInput | undefined;

  @TypeGraphQL.Field(_type => SalutationCreateNestedOneWithoutCustomerInput, {
    nullable: true
  })
  salutation?: SalutationCreateNestedOneWithoutCustomerInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutCustomer_customer_updated_by_idTouserInput, {
    nullable: true
  })
  user_customer_updated_by_idTouser?: UserCreateNestedOneWithoutCustomer_customer_updated_by_idTouserInput | undefined;

  @TypeGraphQL.Field(_type => Customer_addressCreateNestedManyWithoutCustomerInput, {
    nullable: true
  })
  customer_address?: Customer_addressCreateNestedManyWithoutCustomerInput | undefined;

  @TypeGraphQL.Field(_type => Customer_recoveryCreateNestedOneWithoutCustomerInput, {
    nullable: true
  })
  customer_recovery?: Customer_recoveryCreateNestedOneWithoutCustomerInput | undefined;

  @TypeGraphQL.Field(_type => Customer_tagCreateNestedManyWithoutCustomerInput, {
    nullable: true
  })
  customer_tag?: Customer_tagCreateNestedManyWithoutCustomerInput | undefined;

  @TypeGraphQL.Field(_type => Customer_wishlistCreateNestedManyWithoutCustomerInput, {
    nullable: true
  })
  customer_wishlist?: Customer_wishlistCreateNestedManyWithoutCustomerInput | undefined;

  @TypeGraphQL.Field(_type => Order_customerCreateNestedManyWithoutCustomerInput, {
    nullable: true
  })
  order_customer?: Order_customerCreateNestedManyWithoutCustomerInput | undefined;

  @TypeGraphQL.Field(_type => Product_reviewCreateNestedManyWithoutCustomerInput, {
    nullable: true
  })
  product_review?: Product_reviewCreateNestedManyWithoutCustomerInput | undefined;

  @TypeGraphQL.Field(_type => Promotion_persona_customerCreateNestedManyWithoutCustomerInput, {
    nullable: true
  })
  promotion_persona_customer?: Promotion_persona_customerCreateNestedManyWithoutCustomerInput | undefined;

  @TypeGraphQL.Field(_type => Sales_channel_api_contextCreateNestedManyWithoutCustomerInput, {
    nullable: true
  })
  sales_channel_api_context?: Sales_channel_api_contextCreateNestedManyWithoutCustomerInput | undefined;
}
