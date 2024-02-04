import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { State_machine_stateUpdateInput } from "../../../inputs/State_machine_stateUpdateInput";
import { State_machine_stateWhereUniqueInput } from "../../../inputs/State_machine_stateWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneState_machine_stateArgs {
  @TypeGraphQL.Field(_type => State_machine_stateUpdateInput, {
    nullable: false
  })
  data!: State_machine_stateUpdateInput;

  @TypeGraphQL.Field(_type => State_machine_stateWhereUniqueInput, {
    nullable: false
  })
  where!: State_machine_stateWhereUniqueInput;
}
