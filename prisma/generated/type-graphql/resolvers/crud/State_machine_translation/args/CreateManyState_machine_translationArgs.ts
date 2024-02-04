import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { State_machine_translationCreateManyInput } from "../../../inputs/State_machine_translationCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyState_machine_translationArgs {
  @TypeGraphQL.Field(_type => [State_machine_translationCreateManyInput], {
    nullable: false
  })
  data!: State_machine_translationCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
