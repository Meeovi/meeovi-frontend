import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { State_machine_stateWhereInput } from "../../../inputs/State_machine_stateWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyState_machine_stateArgs {
  @TypeGraphQL.Field(_type => State_machine_stateWhereInput, {
    nullable: true
  })
  where?: State_machine_stateWhereInput | undefined;
}
