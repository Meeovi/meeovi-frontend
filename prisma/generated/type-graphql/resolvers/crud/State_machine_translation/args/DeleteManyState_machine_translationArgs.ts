import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { State_machine_translationWhereInput } from "../../../inputs/State_machine_translationWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyState_machine_translationArgs {
  @TypeGraphQL.Field(_type => State_machine_translationWhereInput, {
    nullable: true
  })
  where?: State_machine_translationWhereInput | undefined;
}
