import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Promotion_setgroup } from "../models/Promotion_setgroup";
import { Rule } from "../models/Rule";

@TypeGraphQL.ObjectType("Promotion_setgroup_rule", {})
export class Promotion_setgroup_rule {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  setgroup_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  rule_id!: Buffer;

  rule?: Rule;

  promotion_setgroup?: Promotion_setgroup;
}
