import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { State_machine_historyWhereUniqueInput } from "../../../inputs/State_machine_historyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneState_machine_historyArgs {
  @TypeGraphQL.Field(_type => State_machine_historyWhereUniqueInput, {
    nullable: false
  })
  where!: State_machine_historyWhereUniqueInput;
}
