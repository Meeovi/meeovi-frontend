import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { State_machineWhereUniqueInput } from "../../../inputs/State_machineWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueState_machineArgs {
  @TypeGraphQL.Field(_type => State_machineWhereUniqueInput, {
    nullable: false
  })
  where!: State_machineWhereUniqueInput;
}
