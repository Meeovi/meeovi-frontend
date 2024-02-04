import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Scheduled_taskCreateInput } from "../../../inputs/Scheduled_taskCreateInput";
import { Scheduled_taskUpdateInput } from "../../../inputs/Scheduled_taskUpdateInput";
import { Scheduled_taskWhereUniqueInput } from "../../../inputs/Scheduled_taskWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneScheduled_taskArgs {
  @TypeGraphQL.Field(_type => Scheduled_taskWhereUniqueInput, {
    nullable: false
  })
  where!: Scheduled_taskWhereUniqueInput;

  @TypeGraphQL.Field(_type => Scheduled_taskCreateInput, {
    nullable: false
  })
  create!: Scheduled_taskCreateInput;

  @TypeGraphQL.Field(_type => Scheduled_taskUpdateInput, {
    nullable: false
  })
  update!: Scheduled_taskUpdateInput;
}
