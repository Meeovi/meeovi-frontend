import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Scheduled_taskUpdateManyMutationInput } from "../../../inputs/Scheduled_taskUpdateManyMutationInput";
import { Scheduled_taskWhereInput } from "../../../inputs/Scheduled_taskWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyScheduled_taskArgs {
  @TypeGraphQL.Field(_type => Scheduled_taskUpdateManyMutationInput, {
    nullable: false
  })
  data!: Scheduled_taskUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Scheduled_taskWhereInput, {
    nullable: true
  })
  where?: Scheduled_taskWhereInput | undefined;
}
