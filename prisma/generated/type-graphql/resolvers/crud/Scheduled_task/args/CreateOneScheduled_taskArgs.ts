import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Scheduled_taskCreateInput } from "../../../inputs/Scheduled_taskCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneScheduled_taskArgs {
  @TypeGraphQL.Field(_type => Scheduled_taskCreateInput, {
    nullable: false
  })
  data!: Scheduled_taskCreateInput;
}
