import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Od_scheduler_jobCreateNestedOneWithoutOd_scheduler_job_messageInput } from "../inputs/Od_scheduler_jobCreateNestedOneWithoutOd_scheduler_job_messageInput";

@TypeGraphQL.InputType("Od_scheduler_job_messageCreateInput", {})
export class Od_scheduler_job_messageCreateInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  type!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  message!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Od_scheduler_jobCreateNestedOneWithoutOd_scheduler_job_messageInput, {
    nullable: false
  })
  od_scheduler_job!: Od_scheduler_jobCreateNestedOneWithoutOd_scheduler_job_messageInput;
}
