import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Tax_rule } from "../models/Tax_rule";
import { Tax_rule_type_translation } from "../models/Tax_rule_type_translation";
import { Tax_rule_typeCount } from "../resolvers/outputs/Tax_rule_typeCount";

@TypeGraphQL.ObjectType("Tax_rule_type", {})
export class Tax_rule_type {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  technical_name!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  position!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  tax_rule?: Tax_rule[];

  tax_rule_type_translation?: Tax_rule_type_translation[];

  @TypeGraphQL.Field(_type => Tax_rule_typeCount, {
    nullable: true
  })
  _count?: Tax_rule_typeCount | null;
}
