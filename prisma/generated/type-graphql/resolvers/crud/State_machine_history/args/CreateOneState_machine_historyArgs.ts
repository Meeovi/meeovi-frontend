import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { State_machine_historyCreateInput } from "../../../inputs/State_machine_historyCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneState_machine_historyArgs {
  @TypeGraphQL.Field(_type => State_machine_historyCreateInput, {
    nullable: false
  })
  data!: State_machine_historyCreateInput;
}
