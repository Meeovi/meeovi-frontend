import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { State_machine_transitionCreateInput } from "../../../inputs/State_machine_transitionCreateInput";
import { State_machine_transitionUpdateInput } from "../../../inputs/State_machine_transitionUpdateInput";
import { State_machine_transitionWhereUniqueInput } from "../../../inputs/State_machine_transitionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneState_machine_transitionArgs {
  @TypeGraphQL.Field(_type => State_machine_transitionWhereUniqueInput, {
    nullable: false
  })
  where!: State_machine_transitionWhereUniqueInput;

  @TypeGraphQL.Field(_type => State_machine_transitionCreateInput, {
    nullable: false
  })
  create!: State_machine_transitionCreateInput;

  @TypeGraphQL.Field(_type => State_machine_transitionUpdateInput, {
    nullable: false
  })
  update!: State_machine_transitionUpdateInput;
}
