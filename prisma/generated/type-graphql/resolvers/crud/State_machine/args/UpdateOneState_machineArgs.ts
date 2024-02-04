import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { State_machineUpdateInput } from "../../../inputs/State_machineUpdateInput";
import { State_machineWhereUniqueInput } from "../../../inputs/State_machineWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneState_machineArgs {
  @TypeGraphQL.Field(_type => State_machineUpdateInput, {
    nullable: false
  })
  data!: State_machineUpdateInput;

  @TypeGraphQL.Field(_type => State_machineWhereUniqueInput, {
    nullable: false
  })
  where!: State_machineWhereUniqueInput;
}
