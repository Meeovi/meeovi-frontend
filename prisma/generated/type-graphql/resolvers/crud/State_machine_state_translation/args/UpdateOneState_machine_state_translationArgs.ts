import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { State_machine_state_translationUpdateInput } from "../../../inputs/State_machine_state_translationUpdateInput";
import { State_machine_state_translationWhereUniqueInput } from "../../../inputs/State_machine_state_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneState_machine_state_translationArgs {
  @TypeGraphQL.Field(_type => State_machine_state_translationUpdateInput, {
    nullable: false
  })
  data!: State_machine_state_translationUpdateInput;

  @TypeGraphQL.Field(_type => State_machine_state_translationWhereUniqueInput, {
    nullable: false
  })
  where!: State_machine_state_translationWhereUniqueInput;
}
