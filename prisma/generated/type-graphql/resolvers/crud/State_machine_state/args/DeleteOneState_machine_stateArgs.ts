import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { State_machine_stateWhereUniqueInput } from "../../../inputs/State_machine_stateWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneState_machine_stateArgs {
  @TypeGraphQL.Field(_type => State_machine_stateWhereUniqueInput, {
    nullable: false
  })
  where!: State_machine_stateWhereUniqueInput;
}
