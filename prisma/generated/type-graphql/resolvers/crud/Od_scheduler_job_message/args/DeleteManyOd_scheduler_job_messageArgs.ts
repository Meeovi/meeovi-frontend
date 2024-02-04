import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Od_scheduler_job_messageWhereInput } from "../../../inputs/Od_scheduler_job_messageWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyOd_scheduler_job_messageArgs {
  @TypeGraphQL.Field(_type => Od_scheduler_job_messageWhereInput, {
    nullable: true
  })
  where?: Od_scheduler_job_messageWhereInput | undefined;
}
