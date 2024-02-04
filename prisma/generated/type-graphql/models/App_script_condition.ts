import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { App } from "../models/App";
import { App_script_condition_translation } from "../models/App_script_condition_translation";
import { Rule_condition } from "../models/Rule_condition";
import { App_script_conditionCount } from "../resolvers/outputs/App_script_conditionCount";

@TypeGraphQL.ObjectType("App_script_condition", {})
export class App_script_condition {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  app_id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  active!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  group?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  script?: string | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  constraints?: Buffer | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  config?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  app?: App;

  app_script_condition_translation?: App_script_condition_translation[];

  rule_condition?: Rule_condition[];

  @TypeGraphQL.Field(_type => App_script_conditionCount, {
    nullable: true
  })
  _count?: App_script_conditionCount | null;
}
