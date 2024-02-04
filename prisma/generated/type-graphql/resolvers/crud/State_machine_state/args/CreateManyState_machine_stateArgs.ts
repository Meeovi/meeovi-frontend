import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { State_machine_stateCreateManyInput } from "../../../inputs/State_machine_stateCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyState_machine_stateArgs {
  @TypeGraphQL.Field(_type => [State_machine_stateCreateManyInput], {
    nullable: false
  })
  data!: State_machine_stateCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
