import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Scheduled_taskWhereUniqueInput } from "../../../inputs/Scheduled_taskWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneScheduled_taskArgs {
  @TypeGraphQL.Field(_type => Scheduled_taskWhereUniqueInput, {
    nullable: false
  })
  where!: Scheduled_taskWhereUniqueInput;
}
