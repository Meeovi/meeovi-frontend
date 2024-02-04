import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { State_machineCreateInput } from "../../../inputs/State_machineCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneState_machineArgs {
  @TypeGraphQL.Field(_type => State_machineCreateInput, {
    nullable: false
  })
  data!: State_machineCreateInput;
}
