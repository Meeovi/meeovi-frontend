import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { State_machineUpdateManyMutationInput } from "../../../inputs/State_machineUpdateManyMutationInput";
import { State_machineWhereInput } from "../../../inputs/State_machineWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyState_machineArgs {
  @TypeGraphQL.Field(_type => State_machineUpdateManyMutationInput, {
    nullable: false
  })
  data!: State_machineUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => State_machineWhereInput, {
    nullable: true
  })
  where?: State_machineWhereInput | undefined;
}
