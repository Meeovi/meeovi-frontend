import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { State_machine_stateCreateInput } from "../../../inputs/State_machine_stateCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneState_machine_stateArgs {
  @TypeGraphQL.Field(_type => State_machine_stateCreateInput, {
    nullable: false
  })
  data!: State_machine_stateCreateInput;
}
