import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Order_line_item } from "../models/Order_line_item";
import { Promotion_cart_rule } from "../models/Promotion_cart_rule";
import { Promotion_discount } from "../models/Promotion_discount";
import { Promotion_individual_code } from "../models/Promotion_individual_code";
import { Promotion_order_rule } from "../models/Promotion_order_rule";
import { Promotion_persona_customer } from "../models/Promotion_persona_customer";
import { Promotion_persona_rule } from "../models/Promotion_persona_rule";
import { Promotion_sales_channel } from "../models/Promotion_sales_channel";
import { Promotion_setgroup } from "../models/Promotion_setgroup";
import { Promotion_translation } from "../models/Promotion_translation";
import { PromotionCount } from "../resolvers/outputs/PromotionCount";

@TypeGraphQL.ObjectType("Promotion", {})
export class Promotion {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  active!: boolean;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  valid_from?: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  valid_until?: Date | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  max_redemptions_global?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  max_redemptions_per_customer?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  priority!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  order_count!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  orders_per_customer_count?: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  exclusive!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  code?: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  use_codes!: boolean;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  customer_restriction!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  prevent_combination!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  exclusion_ids?: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  use_individual_codes!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  individual_code_pattern?: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  use_setgroups!: boolean;

  order_line_item?: Order_line_item[];

  promotion_cart_rule?: Promotion_cart_rule[];

  promotion_discount?: Promotion_discount[];

  promotion_individual_code?: Promotion_individual_code[];

  promotion_order_rule?: Promotion_order_rule[];

  promotion_persona_customer?: Promotion_persona_customer[];

  promotion_persona_rule?: Promotion_persona_rule[];

  promotion_sales_channel?: Promotion_sales_channel[];

  promotion_setgroup?: Promotion_setgroup[];

  promotion_translation?: Promotion_translation[];

  @TypeGraphQL.Field(_type => PromotionCount, {
    nullable: true
  })
  _count?: PromotionCount | null;
}
