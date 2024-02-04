import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Od_scheduler_jobWhereUniqueInput } from "../../../inputs/Od_scheduler_jobWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueOd_scheduler_jobOrThrowArgs {
  @TypeGraphQL.Field(_type => Od_scheduler_jobWhereUniqueInput, {
    nullable: false
  })
  where!: Od_scheduler_jobWhereUniqueInput;
}
