import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { State_machine_translationWhereUniqueInput } from "../../../inputs/State_machine_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueState_machine_translationOrThrowArgs {
  @TypeGraphQL.Field(_type => State_machine_translationWhereUniqueInput, {
    nullable: false
  })
  where!: State_machine_translationWhereUniqueInput;
}
