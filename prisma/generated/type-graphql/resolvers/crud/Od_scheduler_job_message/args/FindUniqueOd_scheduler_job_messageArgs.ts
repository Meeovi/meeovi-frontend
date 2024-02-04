import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Od_scheduler_job_messageWhereUniqueInput } from "../../../inputs/Od_scheduler_job_messageWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueOd_scheduler_job_messageArgs {
  @TypeGraphQL.Field(_type => Od_scheduler_job_messageWhereUniqueInput, {
    nullable: false
  })
  where!: Od_scheduler_job_messageWhereUniqueInput;
}
