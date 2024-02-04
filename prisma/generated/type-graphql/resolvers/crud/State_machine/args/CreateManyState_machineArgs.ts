import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { State_machineCreateManyInput } from "../../../inputs/State_machineCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyState_machineArgs {
  @TypeGraphQL.Field(_type => [State_machineCreateManyInput], {
    nullable: false
  })
  data!: State_machineCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
