import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Currency } from "../models/Currency";
import { Document } from "../models/Document";
import { Klarna_order_extension } from "../models/Klarna_order_extension";
import { Language } from "../models/Language";
import { Order_address } from "../models/Order_address";
import { Order_customer } from "../models/Order_customer";
import { Order_delivery } from "../models/Order_delivery";
import { Order_line_item } from "../models/Order_line_item";
import { Order_tag } from "../models/Order_tag";
import { Order_transaction } from "../models/Order_transaction";
import { Sales_channel } from "../models/Sales_channel";
import { User } from "../models/User";
import { OrderCount } from "../resolvers/outputs/OrderCount";

@TypeGraphQL.ObjectType("Order", {})
export class Order {
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
    nullable: false
  })
  auto_increment!: bigint;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  order_number?: string | null;

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
  currency_factor?: number | null;

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
  order_date?: Date | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  amount_total?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  amount_net?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  position_price?: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tax_status?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  shipping_costs!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  shipping_total?: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  deep_link_code?: string | null;

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

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  customer_comment?: string | null;

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
  item_rounding?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  total_rounding?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  rule_ids?: string | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  created_by_id?: Buffer | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  updated_by_id?: Buffer | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  source?: string | null;

  document?: Document[];

  klarna_order_extension?: Klarna_order_extension[];

  language?: Language;

  user_order_created_by_idTouser?: User | null;

  currency?: Currency;

  sales_channel?: Sales_channel;

  user_order_updated_by_idTouser?: User | null;

  order_address?: Order_address[];

  order_customer?: Order_customer[];

  order_delivery?: Order_delivery[];

  order_line_item?: Order_line_item[];

  order_tag?: Order_tag[];

  order_transaction?: Order_transaction[];

  @TypeGraphQL.Field(_type => OrderCount, {
    nullable: true
  })
  _count?: OrderCount | null;
}
