import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IncrementCreateInput } from "../../../inputs/IncrementCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneIncrementArgs {
  @TypeGraphQL.Field(_type => IncrementCreateInput, {
    nullable: false
  })
  data!: IncrementCreateInput;
}
