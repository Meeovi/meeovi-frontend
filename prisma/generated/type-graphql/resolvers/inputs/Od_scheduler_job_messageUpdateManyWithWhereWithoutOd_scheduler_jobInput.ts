import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Od_scheduler_job_messageScalarWhereInput } from "../inputs/Od_scheduler_job_messageScalarWhereInput";
import { Od_scheduler_job_messageUpdateManyMutationInput } from "../inputs/Od_scheduler_job_messageUpdateManyMutationInput";

@TypeGraphQL.InputType("Od_scheduler_job_messageUpdateManyWithWhereWithoutOd_scheduler_jobInput", {})
export class Od_scheduler_job_messageUpdateManyWithWhereWithoutOd_scheduler_jobInput {
  @TypeGraphQL.Field(_type => Od_scheduler_job_messageScalarWhereInput, {
    nullable: false
  })
  where!: Od_scheduler_job_messageScalarWhereInput;

  @TypeGraphQL.Field(_type => Od_scheduler_job_messageUpdateManyMutationInput, {
    nullable: false
  })
  data!: Od_scheduler_job_messageUpdateManyMutationInput;
}
