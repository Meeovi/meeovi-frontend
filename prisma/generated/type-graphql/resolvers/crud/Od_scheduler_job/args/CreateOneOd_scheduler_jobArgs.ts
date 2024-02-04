import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Od_scheduler_jobCreateInput } from "../../../inputs/Od_scheduler_jobCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneOd_scheduler_jobArgs {
  @TypeGraphQL.Field(_type => Od_scheduler_jobCreateInput, {
    nullable: false
  })
  data!: Od_scheduler_jobCreateInput;
}
