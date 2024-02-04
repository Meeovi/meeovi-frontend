import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Od_scheduler_jobCreateNestedManyWithoutOd_scheduler_jobInput } from "../inputs/Od_scheduler_jobCreateNestedManyWithoutOd_scheduler_jobInput";
import { Od_scheduler_job_messageCreateNestedManyWithoutOd_scheduler_jobInput } from "../inputs/Od_scheduler_job_messageCreateNestedManyWithoutOd_scheduler_jobInput";

@TypeGraphQL.InputType("Od_scheduler_jobCreateWithoutOd_scheduler_jobInput", {})
export class Od_scheduler_jobCreateWithoutOd_scheduler_jobInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

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
  message?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  started_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  finished_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Od_scheduler_jobCreateNestedManyWithoutOd_scheduler_jobInput, {
    nullable: true
  })
  other_od_scheduler_job?: Od_scheduler_jobCreateNestedManyWithoutOd_scheduler_jobInput | undefined;

  @TypeGraphQL.Field(_type => Od_scheduler_job_messageCreateNestedManyWithoutOd_scheduler_jobInput, {
    nullable: true
  })
  od_scheduler_job_message?: Od_scheduler_job_messageCreateNestedManyWithoutOd_scheduler_jobInput | undefined;
}
