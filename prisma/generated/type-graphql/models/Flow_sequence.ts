import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { App_flow_action } from "../models/App_flow_action";
import { Flow } from "../models/Flow";
import { Rule } from "../models/Rule";
import { Flow_sequenceCount } from "../resolvers/outputs/Flow_sequenceCount";

@TypeGraphQL.ObjectType("Flow_sequence", {})
export class Flow_sequence {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  flow_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  app_flow_action_id?: Buffer | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  parent_id?: Buffer | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  rule_id?: Buffer | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  action_name?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  config?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  position!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  display_group!: number;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  true_case!: boolean;

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

  app_flow_action?: App_flow_action | null;

  flow?: Flow;

  flow_sequence?: Flow_sequence | null;

  other_flow_sequence?: Flow_sequence[];

  rule?: Rule | null;

  @TypeGraphQL.Field(_type => Flow_sequenceCount, {
    nullable: true
  })
  _count?: Flow_sequenceCount | null;
}
