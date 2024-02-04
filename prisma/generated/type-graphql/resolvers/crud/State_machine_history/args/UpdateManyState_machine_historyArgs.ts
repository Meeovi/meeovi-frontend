import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { State_machine_historyUpdateManyMutationInput } from "../../../inputs/State_machine_historyUpdateManyMutationInput";
import { State_machine_historyWhereInput } from "../../../inputs/State_machine_historyWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyState_machine_historyArgs {
  @TypeGraphQL.Field(_type => State_machine_historyUpdateManyMutationInput, {
    nullable: false
  })
  data!: State_machine_historyUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => State_machine_historyWhereInput, {
    nullable: true
  })
  where?: State_machine_historyWhereInput | undefined;
}
