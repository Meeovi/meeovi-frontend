import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { State_machine_stateUpdateManyMutationInput } from "../../../inputs/State_machine_stateUpdateManyMutationInput";
import { State_machine_stateWhereInput } from "../../../inputs/State_machine_stateWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyState_machine_stateArgs {
  @TypeGraphQL.Field(_type => State_machine_stateUpdateManyMutationInput, {
    nullable: false
  })
  data!: State_machine_stateUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => State_machine_stateWhereInput, {
    nullable: true
  })
  where?: State_machine_stateWhereInput | undefined;
}
