import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Scheduled_taskUpdateInput } from "../../../inputs/Scheduled_taskUpdateInput";
import { Scheduled_taskWhereUniqueInput } from "../../../inputs/Scheduled_taskWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneScheduled_taskArgs {
  @TypeGraphQL.Field(_type => Scheduled_taskUpdateInput, {
    nullable: false
  })
  data!: Scheduled_taskUpdateInput;

  @TypeGraphQL.Field(_type => Scheduled_taskWhereUniqueInput, {
    nullable: false
  })
  where!: Scheduled_taskWhereUniqueInput;
}
