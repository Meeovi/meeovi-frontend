import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { State_machineWhereInput } from "../../../inputs/State_machineWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyState_machineArgs {
  @TypeGraphQL.Field(_type => State_machineWhereInput, {
    nullable: true
  })
  where?: State_machineWhereInput | undefined;
}
