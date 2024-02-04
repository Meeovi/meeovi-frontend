import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { State_machine_translationUpdateInput } from "../../../inputs/State_machine_translationUpdateInput";
import { State_machine_translationWhereUniqueInput } from "../../../inputs/State_machine_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneState_machine_translationArgs {
  @TypeGraphQL.Field(_type => State_machine_translationUpdateInput, {
    nullable: false
  })
  data!: State_machine_translationUpdateInput;

  @TypeGraphQL.Field(_type => State_machine_translationWhereUniqueInput, {
    nullable: false
  })
  where!: State_machine_translationWhereUniqueInput;
}
