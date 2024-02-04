import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { State_machine_state_translationWhereUniqueInput } from "../../../inputs/State_machine_state_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneState_machine_state_translationArgs {
  @TypeGraphQL.Field(_type => State_machine_state_translationWhereUniqueInput, {
    nullable: false
  })
  where!: State_machine_state_translationWhereUniqueInput;
}
