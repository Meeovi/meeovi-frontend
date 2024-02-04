import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("OrderCreateManyUser_order_created_by_idTouserInput", {})
export class OrderCreateManyUser_order_created_by_idTouserInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  version_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  state_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  auto_increment?: bigint | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  order_number?: string | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  currency_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  language_id!: Buffer;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  currency_factor?: number | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  sales_channel_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  billing_address_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  billing_address_version_id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  price!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  order_date_time!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  order_date?: Date | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  amount_total?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  amount_net?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  position_price?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tax_status?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  shipping_costs!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  shipping_total?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  deep_link_code?: string | undefined;

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

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customer_comment?: string | undefined;

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
  item_rounding?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  total_rounding?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  rule_ids?: string | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  updated_by_id?: Buffer | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  source?: string | undefined;
}
