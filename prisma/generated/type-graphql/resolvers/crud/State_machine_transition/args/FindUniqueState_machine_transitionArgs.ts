import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { State_machine_transitionWhereUniqueInput } from "../../../inputs/State_machine_transitionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueState_machine_transitionArgs {
  @TypeGraphQL.Field(_type => State_machine_transitionWhereUniqueInput, {
    nullable: false
  })
  where!: State_machine_transitionWhereUniqueInput;
}
