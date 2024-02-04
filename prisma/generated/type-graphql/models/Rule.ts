import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Event_action_rule } from "../models/Event_action_rule";
import { Flow_sequence } from "../models/Flow_sequence";
import { Payment_method } from "../models/Payment_method";
import { Product_price } from "../models/Product_price";
import { Promotion_cart_rule } from "../models/Promotion_cart_rule";
import { Promotion_discount_rule } from "../models/Promotion_discount_rule";
import { Promotion_order_rule } from "../models/Promotion_order_rule";
import { Promotion_persona_rule } from "../models/Promotion_persona_rule";
import { Promotion_setgroup_rule } from "../models/Promotion_setgroup_rule";
import { Rule_condition } from "../models/Rule_condition";
import { Rule_tag } from "../models/Rule_tag";
import { Shipping_method } from "../models/Shipping_method";
import { Shipping_method_price } from "../models/Shipping_method_price";
import { Tax_provider } from "../models/Tax_provider";
import { RuleCount } from "../resolvers/outputs/RuleCount";

@TypeGraphQL.ObjectType("Rule", {})
export class Rule {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  priority!: number;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  payload?: Buffer | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  invalid!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  areas?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  module_types?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  custom_fields?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  event_action_rule?: Event_action_rule[];

  flow_sequence?: Flow_sequence[];

  payment_method?: Payment_method[];

  product_price?: Product_price[];

  promotion_cart_rule?: Promotion_cart_rule[];

  promotion_discount_rule?: Promotion_discount_rule[];

  promotion_order_rule?: Promotion_order_rule[];

  promotion_persona_rule?: Promotion_persona_rule[];

  promotion_setgroup_rule?: Promotion_setgroup_rule[];

  rule_condition?: Rule_condition[];

  rule_tag?: Rule_tag[];

  shipping_method?: Shipping_method[];

  shipping_method_price_shipping_method_price_calculation_rule_idTorule?: Shipping_method_price[];

  shipping_method_price_shipping_method_price_rule_idTorule?: Shipping_method_price[];

  tax_provider?: Tax_provider[];

  @TypeGraphQL.Field(_type => RuleCount, {
    nullable: true
  })
  _count?: RuleCount | null;
}
