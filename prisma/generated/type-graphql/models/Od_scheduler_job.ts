import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Od_scheduler_job_message } from "../models/Od_scheduler_job_message";
import { Od_scheduler_jobCount } from "../resolvers/outputs/Od_scheduler_jobCount";

@TypeGraphQL.ObjectType("Od_scheduler_job", {})
export class Od_scheduler_job {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  parent_id?: Buffer | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  status!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  type!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  message?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  started_at?: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  finished_at?: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  od_scheduler_job?: Od_scheduler_job | null;

  other_od_scheduler_job?: Od_scheduler_job[];

  od_scheduler_job_message?: Od_scheduler_job_message[];

  @TypeGraphQL.Field(_type => Od_scheduler_jobCount, {
    nullable: true
  })
  _count?: Od_scheduler_jobCount | null;
}
