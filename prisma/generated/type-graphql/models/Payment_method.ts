import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { App_payment_method } from "../models/App_payment_method";
import { Cart } from "../models/Cart";
import { Customer } from "../models/Customer";
import { Media } from "../models/Media";
import { Order_transaction } from "../models/Order_transaction";
import { Payment_method_translation } from "../models/Payment_method_translation";
import { Plugin } from "../models/Plugin";
import { Rule } from "../models/Rule";
import { Sales_channel } from "../models/Sales_channel";
import { Sales_channel_payment_method } from "../models/Sales_channel_payment_method";
import { Payment_methodCount } from "../resolvers/outputs/Payment_methodCount";

@TypeGraphQL.ObjectType("Payment_method", {})
export class Payment_method {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  handler_identifier!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  position!: number;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  active!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  after_order_enabled!: boolean;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  availability_rule_id?: Buffer | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  plugin_id?: Buffer | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  media_id?: Buffer | null;

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

  app_payment_method?: App_payment_method | null;

  cart?: Cart[];

  customer_customer_default_payment_method_idTopayment_method?: Customer[];

  customer_customer_last_payment_method_idTopayment_method?: Customer[];

  order_transaction?: Order_transaction[];

  rule?: Rule | null;

  media?: Media | null;

  plugin?: Plugin | null;

  payment_method_translation?: Payment_method_translation[];

  sales_channel?: Sales_channel[];

  sales_channel_payment_method?: Sales_channel_payment_method[];

  @TypeGraphQL.Field(_type => Payment_methodCount, {
    nullable: true
  })
  _count?: Payment_methodCount | null;
}
