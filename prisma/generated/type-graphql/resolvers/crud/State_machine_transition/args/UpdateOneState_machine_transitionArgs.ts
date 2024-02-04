import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { State_machine_transitionUpdateInput } from "../../../inputs/State_machine_transitionUpdateInput";
import { State_machine_transitionWhereUniqueInput } from "../../../inputs/State_machine_transitionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneState_machine_transitionArgs {
  @TypeGraphQL.Field(_type => State_machine_transitionUpdateInput, {
    nullable: false
  })
  data!: State_machine_transitionUpdateInput;

  @TypeGraphQL.Field(_type => State_machine_transitionWhereUniqueInput, {
    nullable: false
  })
  where!: State_machine_transitionWhereUniqueInput;
}
