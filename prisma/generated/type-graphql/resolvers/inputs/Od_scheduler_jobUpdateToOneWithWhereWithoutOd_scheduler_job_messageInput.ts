import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Od_scheduler_jobUpdateWithoutOd_scheduler_job_messageInput } from "../inputs/Od_scheduler_jobUpdateWithoutOd_scheduler_job_messageInput";
import { Od_scheduler_jobWhereInput } from "../inputs/Od_scheduler_jobWhereInput";

@TypeGraphQL.InputType("Od_scheduler_jobUpdateToOneWithWhereWithoutOd_scheduler_job_messageInput", {})
export class Od_scheduler_jobUpdateToOneWithWhereWithoutOd_scheduler_job_messageInput {
  @TypeGraphQL.Field(_type => Od_scheduler_jobWhereInput, {
    nullable: true
  })
  where?: Od_scheduler_jobWhereInput | undefined;

  @TypeGraphQL.Field(_type => Od_scheduler_jobUpdateWithoutOd_scheduler_job_messageInput, {
    nullable: false
  })
  data!: Od_scheduler_jobUpdateWithoutOd_scheduler_job_messageInput;
}
