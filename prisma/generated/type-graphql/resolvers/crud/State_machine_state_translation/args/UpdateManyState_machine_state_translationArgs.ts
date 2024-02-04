import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { State_machine_state_translationUpdateManyMutationInput } from "../../../inputs/State_machine_state_translationUpdateManyMutationInput";
import { State_machine_state_translationWhereInput } from "../../../inputs/State_machine_state_translationWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyState_machine_state_translationArgs {
  @TypeGraphQL.Field(_type => State_machine_state_translationUpdateManyMutationInput, {
    nullable: false
  })
  data!: State_machine_state_translationUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => State_machine_state_translationWhereInput, {
    nullable: true
  })
  where?: State_machine_state_translationWhereInput | undefined;
}
