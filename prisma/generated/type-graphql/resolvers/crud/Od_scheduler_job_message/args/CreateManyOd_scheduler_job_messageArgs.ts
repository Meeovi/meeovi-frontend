import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Od_scheduler_job_messageCreateManyInput } from "../../../inputs/Od_scheduler_job_messageCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyOd_scheduler_job_messageArgs {
  @TypeGraphQL.Field(_type => [Od_scheduler_job_messageCreateManyInput], {
    nullable: false
  })
  data!: Od_scheduler_job_messageCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
