import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { State_machine_translationCreateInput } from "../../../inputs/State_machine_translationCreateInput";
import { State_machine_translationUpdateInput } from "../../../inputs/State_machine_translationUpdateInput";
import { State_machine_translationWhereUniqueInput } from "../../../inputs/State_machine_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneState_machine_translationArgs {
  @TypeGraphQL.Field(_type => State_machine_translationWhereUniqueInput, {
    nullable: false
  })
  where!: State_machine_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => State_machine_translationCreateInput, {
    nullable: false
  })
  create!: State_machine_translationCreateInput;

  @TypeGraphQL.Field(_type => State_machine_translationUpdateInput, {
    nullable: false
  })
  update!: State_machine_translationUpdateInput;
}
