import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { App_flow_event } from "../models/App_flow_event";
import { Flow_sequence } from "../models/Flow_sequence";
import { FlowCount } from "../resolvers/outputs/FlowCount";

@TypeGraphQL.ObjectType("Flow", {})
export class Flow {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  app_flow_event_id?: Buffer | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  event_name!: string;

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

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  active!: boolean;

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

  app_flow_event?: App_flow_event | null;

  flow_sequence?: Flow_sequence[];

  @TypeGraphQL.Field(_type => FlowCount, {
    nullable: true
  })
  _count?: FlowCount | null;
}
