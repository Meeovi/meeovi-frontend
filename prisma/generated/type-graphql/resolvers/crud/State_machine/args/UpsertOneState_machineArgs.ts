import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { State_machineCreateInput } from "../../../inputs/State_machineCreateInput";
import { State_machineUpdateInput } from "../../../inputs/State_machineUpdateInput";
import { State_machineWhereUniqueInput } from "../../../inputs/State_machineWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneState_machineArgs {
  @TypeGraphQL.Field(_type => State_machineWhereUniqueInput, {
    nullable: false
  })
  where!: State_machineWhereUniqueInput;

  @TypeGraphQL.Field(_type => State_machineCreateInput, {
    nullable: false
  })
  create!: State_machineCreateInput;

  @TypeGraphQL.Field(_type => State_machineUpdateInput, {
    nullable: false
  })
  update!: State_machineUpdateInput;
}
