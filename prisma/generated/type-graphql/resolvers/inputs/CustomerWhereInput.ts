import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntFilter } from "../inputs/BigIntFilter";
import { BoolFilter } from "../inputs/BoolFilter";
import { BytesFilter } from "../inputs/BytesFilter";
import { BytesNullableFilter } from "../inputs/BytesNullableFilter";
import { CartListRelationFilter } from "../inputs/CartListRelationFilter";
import { Customer_addressListRelationFilter } from "../inputs/Customer_addressListRelationFilter";
import { Customer_groupRelationFilter } from "../inputs/Customer_groupRelationFilter";
import { Customer_recoveryNullableRelationFilter } from "../inputs/Customer_recoveryNullableRelationFilter";
import { Customer_tagListRelationFilter } from "../inputs/Customer_tagListRelationFilter";
import { Customer_wishlistListRelationFilter } from "../inputs/Customer_wishlistListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { FloatNullableFilter } from "../inputs/FloatNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { Order_customerListRelationFilter } from "../inputs/Order_customerListRelationFilter";
import { Payment_methodNullableRelationFilter } from "../inputs/Payment_methodNullableRelationFilter";
import { Payment_methodRelationFilter } from "../inputs/Payment_methodRelationFilter";
import { Product_reviewListRelationFilter } from "../inputs/Product_reviewListRelationFilter";
import { Promotion_persona_customerListRelationFilter } from "../inputs/Promotion_persona_customerListRelationFilter";
import { Sales_channelNullableRelationFilter } from "../inputs/Sales_channelNullableRelationFilter";
import { Sales_channelRelationFilter } from "../inputs/Sales_channelRelationFilter";
import { Sales_channel_api_contextListRelationFilter } from "../inputs/Sales_channel_api_contextListRelationFilter";
import { SalutationNullableRelationFilter } from "../inputs/SalutationNullableRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserNullableRelationFilter } from "../inputs/UserNullableRelationFilter";

@TypeGraphQL.InputType("CustomerWhereInput", {})
export class CustomerWhereInput {
  @TypeGraphQL.Field(_type => [CustomerWhereInput], {
    nullable: true
  })
  AND?: CustomerWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerWhereInput], {
    nullable: true
  })
  OR?: CustomerWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerWhereInput], {
    nullable: true
  })
  NOT?: CustomerWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BigIntFilter, {
    nullable: true
  })
  auto_increment?: BigIntFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  customer_group_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  requested_customer_group_id?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  default_payment_method_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  sales_channel_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  language_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  last_payment_method_id?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  default_billing_address_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  default_shipping_address_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  customer_number?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  salutation_id?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  first_name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  last_name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  company?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  password?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  legacy_password?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  legacy_encoder?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  email?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  title?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  vat_ids?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  active?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  doubleOptInRegistration?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  double_opt_in_registration?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  doubleOptInEmailSentDate?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  double_opt_in_email_sent_date?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  doubleOptInConfirmDate?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  double_opt_in_confirm_date?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  hash?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  guest?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  first_login?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  last_login?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  newsletter_sales_channel_ids?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  birthday?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  last_order_date?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  order_count?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => FloatNullableFilter, {
    nullable: true
  })
  order_total_amount?: FloatNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  custom_fields?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  affiliate_code?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  campaign_code?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  remote_address?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  tag_ids?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  bound_sales_channel_id?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  account_type?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  created_by_id?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  updated_by_id?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  review_count?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => CartListRelationFilter, {
    nullable: true
  })
  cart?: CartListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Sales_channelNullableRelationFilter, {
    nullable: true
  })
  sales_channel_customer_bound_sales_channel_idTosales_channel?: Sales_channelNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => UserNullableRelationFilter, {
    nullable: true
  })
  user_customer_created_by_idTouser?: UserNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Customer_groupRelationFilter, {
    nullable: true
  })
  customer_group?: Customer_groupRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Payment_methodRelationFilter, {
    nullable: true
  })
  payment_method_customer_default_payment_method_idTopayment_method?: Payment_methodRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Payment_methodNullableRelationFilter, {
    nullable: true
  })
  payment_method_customer_last_payment_method_idTopayment_method?: Payment_methodNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Sales_channelRelationFilter, {
    nullable: true
  })
  sales_channel_customer_sales_channel_idTosales_channel?: Sales_channelRelationFilter | undefined;

  @TypeGraphQL.Field(_type => SalutationNullableRelationFilter, {
    nullable: true
  })
  salutation?: SalutationNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => UserNullableRelationFilter, {
    nullable: true
  })
  user_customer_updated_by_idTouser?: UserNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Customer_addressListRelationFilter, {
    nullable: true
  })
  customer_address?: Customer_addressListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Customer_recoveryNullableRelationFilter, {
    nullable: true
  })
  customer_recovery?: Customer_recoveryNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Customer_tagListRelationFilter, {
    nullable: true
  })
  customer_tag?: Customer_tagListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Customer_wishlistListRelationFilter, {
    nullable: true
  })
  customer_wishlist?: Customer_wishlistListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Order_customerListRelationFilter, {
    nullable: true
  })
  order_customer?: Order_customerListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Product_reviewListRelationFilter, {
    nullable: true
  })
  product_review?: Product_reviewListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Promotion_persona_customerListRelationFilter, {
    nullable: true
  })
  promotion_persona_customer?: Promotion_persona_customerListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Sales_channel_api_contextListRelationFilter, {
    nullable: true
  })
  sales_channel_api_context?: Sales_channel_api_contextListRelationFilter | undefined;
}
