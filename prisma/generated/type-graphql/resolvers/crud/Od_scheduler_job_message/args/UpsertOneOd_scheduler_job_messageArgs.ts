import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Od_scheduler_job_messageCreateInput } from "../../../inputs/Od_scheduler_job_messageCreateInput";
import { Od_scheduler_job_messageUpdateInput } from "../../../inputs/Od_scheduler_job_messageUpdateInput";
import { Od_scheduler_job_messageWhereUniqueInput } from "../../../inputs/Od_scheduler_job_messageWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneOd_scheduler_job_messageArgs {
  @TypeGraphQL.Field(_type => Od_scheduler_job_messageWhereUniqueInput, {
    nullable: false
  })
  where!: Od_scheduler_job_messageWhereUniqueInput;

  @TypeGraphQL.Field(_type => Od_scheduler_job_messageCreateInput, {
    nullable: false
  })
  create!: Od_scheduler_job_messageCreateInput;

  @TypeGraphQL.Field(_type => Od_scheduler_job_messageUpdateInput, {
    nullable: false
  })
  update!: Od_scheduler_job_messageUpdateInput;
}
