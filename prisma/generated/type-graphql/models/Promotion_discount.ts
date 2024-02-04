import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Promotion } from "../models/Promotion";
import { Promotion_discount_prices } from "../models/Promotion_discount_prices";
import { Promotion_discount_rule } from "../models/Promotion_discount_rule";
import { Promotion_discountCount } from "../resolvers/outputs/Promotion_discountCount";

@TypeGraphQL.ObjectType("Promotion_discount", {})
export class Promotion_discount {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  promotion_id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  scope!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  type!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  value!: number;

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
  consider_advanced_rules!: boolean;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  max_value?: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sorter_key?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  applier_key?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  usage_key?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  picker_key?: string | null;

  promotion?: Promotion;

  promotion_discount_prices?: Promotion_discount_prices[];

  promotion_discount_rule?: Promotion_discount_rule[];

  @TypeGraphQL.Field(_type => Promotion_discountCount, {
    nullable: true
  })
  _count?: Promotion_discountCount | null;
}
