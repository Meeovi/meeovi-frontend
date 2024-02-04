import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { State_machine_translationCreateInput } from "../../../inputs/State_machine_translationCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneState_machine_translationArgs {
  @TypeGraphQL.Field(_type => State_machine_translationCreateInput, {
    nullable: false
  })
  data!: State_machine_translationCreateInput;
}
