import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("CustomerCreateManyUser_customer_updated_by_idTouserInput", {})
export class CustomerCreateManyUser_customer_updated_by_idTouserInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  auto_increment?: bigint | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  customer_group_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  requested_customer_group_id?: Buffer | undefined;

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
  last_payment_method_id?: Buffer | undefined;

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
  salutation_id?: Buffer | undefined;

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

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  bound_sales_channel_id?: Buffer | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  account_type?: string | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  created_by_id?: Buffer | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  review_count?: number | undefined;
}
