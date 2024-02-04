import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { App } from "../models/App";
import { App_flow_action_translation } from "../models/App_flow_action_translation";
import { Flow_sequence } from "../models/Flow_sequence";
import { App_flow_actionCount } from "../resolvers/outputs/App_flow_actionCount";

@TypeGraphQL.ObjectType("App_flow_action", {})
export class App_flow_action {
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
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  badge?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  url!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  delayable!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  parameters?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  config?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  headers?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  requirements?: string | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  icon?: Buffer | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sw_icon?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  app?: App;

  app_flow_action_translation?: App_flow_action_translation[];

  flow_sequence?: Flow_sequence[];

  @TypeGraphQL.Field(_type => App_flow_actionCount, {
    nullable: true
  })
  _count?: App_flow_actionCount | null;
}
