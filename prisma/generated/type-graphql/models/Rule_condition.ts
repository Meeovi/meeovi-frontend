import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { App_script_condition } from "../models/App_script_condition";
import { Rule } from "../models/Rule";
import { Rule_conditionCount } from "../resolvers/outputs/Rule_conditionCount";

@TypeGraphQL.ObjectType("Rule_condition", {})
export class Rule_condition {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  type!: string;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  rule_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  script_id?: Buffer | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  parent_id?: Buffer | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  value?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  position!: number;

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

  rule_condition?: Rule_condition | null;

  other_rule_condition?: Rule_condition[];

  rule?: Rule;

  app_script_condition?: App_script_condition | null;

  @TypeGraphQL.Field(_type => Rule_conditionCount, {
    nullable: true
  })
  _count?: Rule_conditionCount | null;
}
