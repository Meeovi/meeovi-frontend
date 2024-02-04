import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { State_machine_transitionCreateInput } from "../../../inputs/State_machine_transitionCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneState_machine_transitionArgs {
  @TypeGraphQL.Field(_type => State_machine_transitionCreateInput, {
    nullable: false
  })
  data!: State_machine_transitionCreateInput;
}
