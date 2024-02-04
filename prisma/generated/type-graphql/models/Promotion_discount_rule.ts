import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Promotion_discount } from "../models/Promotion_discount";
import { Rule } from "../models/Rule";

@TypeGraphQL.ObjectType("Promotion_discount_rule", {})
export class Promotion_discount_rule {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  discount_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  rule_id!: Buffer;

  promotion_discount?: Promotion_discount;

  rule?: Rule;
}
