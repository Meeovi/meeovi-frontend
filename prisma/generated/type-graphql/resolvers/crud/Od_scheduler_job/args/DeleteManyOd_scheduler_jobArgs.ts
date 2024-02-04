import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Od_scheduler_jobWhereInput } from "../../../inputs/Od_scheduler_jobWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyOd_scheduler_jobArgs {
  @TypeGraphQL.Field(_type => Od_scheduler_jobWhereInput, {
    nullable: true
  })
  where?: Od_scheduler_jobWhereInput | undefined;
}
