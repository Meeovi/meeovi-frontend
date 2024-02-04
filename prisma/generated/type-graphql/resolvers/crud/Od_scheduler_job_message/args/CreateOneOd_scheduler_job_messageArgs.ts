import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Od_scheduler_job_messageCreateInput } from "../../../inputs/Od_scheduler_job_messageCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneOd_scheduler_job_messageArgs {
  @TypeGraphQL.Field(_type => Od_scheduler_job_messageCreateInput, {
    nullable: false
  })
  data!: Od_scheduler_job_messageCreateInput;
}
