import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { State_machine_transitionCreateManyInput } from "../../../inputs/State_machine_transitionCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyState_machine_transitionArgs {
  @TypeGraphQL.Field(_type => [State_machine_transitionCreateManyInput], {
    nullable: false
  })
  data!: State_machine_transitionCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
