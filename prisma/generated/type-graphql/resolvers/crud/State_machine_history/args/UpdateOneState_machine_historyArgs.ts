import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { State_machine_historyUpdateInput } from "../../../inputs/State_machine_historyUpdateInput";
import { State_machine_historyWhereUniqueInput } from "../../../inputs/State_machine_historyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneState_machine_historyArgs {
  @TypeGraphQL.Field(_type => State_machine_historyUpdateInput, {
    nullable: false
  })
  data!: State_machine_historyUpdateInput;

  @TypeGraphQL.Field(_type => State_machine_historyWhereUniqueInput, {
    nullable: false
  })
  where!: State_machine_historyWhereUniqueInput;
}
