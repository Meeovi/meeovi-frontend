import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Od_scheduler_job_messageCreateManyOd_scheduler_jobInput } from "../inputs/Od_scheduler_job_messageCreateManyOd_scheduler_jobInput";

@TypeGraphQL.InputType("Od_scheduler_job_messageCreateManyOd_scheduler_jobInputEnvelope", {})
export class Od_scheduler_job_messageCreateManyOd_scheduler_jobInputEnvelope {
  @TypeGraphQL.Field(_type => [Od_scheduler_job_messageCreateManyOd_scheduler_jobInput], {
    nullable: false
  })
  data!: Od_scheduler_job_messageCreateManyOd_scheduler_jobInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
