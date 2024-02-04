import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { State_machine_historyCreateInput } from "../../../inputs/State_machine_historyCreateInput";
import { State_machine_historyUpdateInput } from "../../../inputs/State_machine_historyUpdateInput";
import { State_machine_historyWhereUniqueInput } from "../../../inputs/State_machine_historyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneState_machine_historyArgs {
  @TypeGraphQL.Field(_type => State_machine_historyWhereUniqueInput, {
    nullable: false
  })
  where!: State_machine_historyWhereUniqueInput;

  @TypeGraphQL.Field(_type => State_machine_historyCreateInput, {
    nullable: false
  })
  create!: State_machine_historyCreateInput;

  @TypeGraphQL.Field(_type => State_machine_historyUpdateInput, {
    nullable: false
  })
  update!: State_machine_historyUpdateInput;
}
