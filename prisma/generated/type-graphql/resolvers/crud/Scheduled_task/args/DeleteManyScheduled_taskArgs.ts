import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Scheduled_taskWhereInput } from "../../../inputs/Scheduled_taskWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyScheduled_taskArgs {
  @TypeGraphQL.Field(_type => Scheduled_taskWhereInput, {
    nullable: true
  })
  where?: Scheduled_taskWhereInput | undefined;
}
