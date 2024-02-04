import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Promotion } from "../models/Promotion";
import { Rule } from "../models/Rule";

@TypeGraphQL.ObjectType("Promotion_cart_rule", {})
export class Promotion_cart_rule {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  promotion_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  rule_id!: Buffer;

  promotion?: Promotion;

  rule?: Rule;
}
