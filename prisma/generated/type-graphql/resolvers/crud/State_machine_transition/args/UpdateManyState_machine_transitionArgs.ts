import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { State_machine_transitionUpdateManyMutationInput } from "../../../inputs/State_machine_transitionUpdateManyMutationInput";
import { State_machine_transitionWhereInput } from "../../../inputs/State_machine_transitionWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyState_machine_transitionArgs {
  @TypeGraphQL.Field(_type => State_machine_transitionUpdateManyMutationInput, {
    nullable: false
  })
  data!: State_machine_transitionUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => State_machine_transitionWhereInput, {
    nullable: true
  })
  where?: State_machine_transitionWhereInput | undefined;
}
