import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Cart } from "../models/Cart";
import { Customer_address } from "../models/Customer_address";
import { Customer_group } from "../models/Customer_group";
import { Customer_recovery } from "../models/Customer_recovery";
import { Customer_tag } from "../models/Customer_tag";
import { Customer_wishlist } from "../models/Customer_wishlist";
import { Order_customer } from "../models/Order_customer";
import { Payment_method } from "../models/Payment_method";
import { Product_review } from "../models/Product_review";
import { Promotion_persona_customer } from "../models/Promotion_persona_customer";
import { Sales_channel } from "../models/Sales_channel";
import { Sales_channel_api_context } from "../models/Sales_channel_api_context";
import { Salutation } from "../models/Salutation";
import { User } from "../models/User";
import { CustomerCount } from "../resolvers/outputs/CustomerCount";

@TypeGraphQL.ObjectType("Customer", {})
export class Customer {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: false
  })
  auto_increment!: bigint;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  customer_group_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  requested_customer_group_id?: Buffer | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  default_payment_method_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  sales_channel_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  language_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  last_payment_method_id?: Buffer | null;

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

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  salutation_id?: Buffer | null;

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
  company?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  password?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  legacy_password?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  legacy_encoder?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  title?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  vat_ids?: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  active!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  doubleOptInRegistration!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  double_opt_in_registration!: boolean;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  doubleOptInEmailSentDate?: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  double_opt_in_email_sent_date?: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  doubleOptInConfirmDate?: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  double_opt_in_confirm_date?: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  hash?: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  guest!: boolean;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  first_login?: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  last_login?: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  newsletter_sales_channel_ids?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  birthday?: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  last_order_date?: Date | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  order_count!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  order_total_amount?: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  custom_fields?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  affiliate_code?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  campaign_code?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  remote_address?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tag_ids?: string | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  bound_sales_channel_id?: Buffer | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  account_type!: string;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  created_by_id?: Buffer | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  updated_by_id?: Buffer | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  review_count?: number | null;

  cart?: Cart[];

  sales_channel_customer_bound_sales_channel_idTosales_channel?: Sales_channel | null;

  user_customer_created_by_idTouser?: User | null;

  customer_group?: Customer_group;

  payment_method_customer_default_payment_method_idTopayment_method?: Payment_method;

  payment_method_customer_last_payment_method_idTopayment_method?: Payment_method | null;

  sales_channel_customer_sales_channel_idTosales_channel?: Sales_channel;

  salutation?: Salutation | null;

  user_customer_updated_by_idTouser?: User | null;

  customer_address?: Customer_address[];

  customer_recovery?: Customer_recovery | null;

  customer_tag?: Customer_tag[];

  customer_wishlist?: Customer_wishlist[];

  order_customer?: Order_customer[];

  product_review?: Product_review[];

  promotion_persona_customer?: Promotion_persona_customer[];

  sales_channel_api_context?: Sales_channel_api_context[];

  @TypeGraphQL.Field(_type => CustomerCount, {
    nullable: true
  })
  _count?: CustomerCount | null;
}
