import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { App_shipping_method } from "../models/App_shipping_method";
import { Cart } from "../models/Cart";
import { Delivery_time } from "../models/Delivery_time";
import { Media } from "../models/Media";
import { Order_delivery } from "../models/Order_delivery";
import { Rule } from "../models/Rule";
import { Sales_channel } from "../models/Sales_channel";
import { Sales_channel_shipping_method } from "../models/Sales_channel_shipping_method";
import { Shipping_method_price } from "../models/Shipping_method_price";
import { Shipping_method_tag } from "../models/Shipping_method_tag";
import { Shipping_method_translation } from "../models/Shipping_method_translation";
import { Tax } from "../models/Tax";
import { Shipping_methodCount } from "../resolvers/outputs/Shipping_methodCount";

@TypeGraphQL.ObjectType("Shipping_method", {})
export class Shipping_method {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  active!: boolean;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  position!: number;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  availability_rule_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  media_id?: Buffer | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  delivery_time_id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tax_type?: string | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  tax_id?: Buffer | null;

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
  technical_name?: string | null;

  app_shipping_method?: App_shipping_method | null;

  cart?: Cart[];

  order_delivery?: Order_delivery[];

  sales_channel?: Sales_channel[];

  sales_channel_shipping_method?: Sales_channel_shipping_method[];

  rule?: Rule;

  delivery_time?: Delivery_time;

  media?: Media | null;

  tax?: Tax | null;

  shipping_method_price?: Shipping_method_price[];

  shipping_method_tag?: Shipping_method_tag[];

  shipping_method_translation?: Shipping_method_translation[];

  @TypeGraphQL.Field(_type => Shipping_methodCount, {
    nullable: true
  })
  _count?: Shipping_methodCount | null;
}
