import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Number_range_stateUpdateManyMutationInput } from "../../../inputs/Number_range_stateUpdateManyMutationInput";
import { Number_range_stateWhereInput } from "../../../inputs/Number_range_stateWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyNumber_range_stateArgs {
  @TypeGraphQL.Field(_type => Number_range_stateUpdateManyMutationInput, {
    nullable: false
  })
  data!: Number_range_stateUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Number_range_stateWhereInput, {
    nullable: true
  })
  where?: Number_range_stateWhereInput | undefined;
}
