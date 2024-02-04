import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Dead_message } from "../models/Dead_message";
import { Scheduled_taskCount } from "../resolvers/outputs/Scheduled_taskCount";

@TypeGraphQL.ObjectType("Scheduled_task", {})
export class Scheduled_task {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  scheduled_task_class!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  run_interval!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  default_run_interval!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  status!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  last_execution_time?: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  next_execution_time!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  dead_message?: Dead_message[];

  @TypeGraphQL.Field(_type => Scheduled_taskCount, {
    nullable: true
  })
  _count?: Scheduled_taskCount | null;
}
