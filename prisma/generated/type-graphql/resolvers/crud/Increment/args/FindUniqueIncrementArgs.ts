import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IncrementWhereUniqueInput } from "../../../inputs/IncrementWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueIncrementArgs {
  @TypeGraphQL.Field(_type => IncrementWhereUniqueInput, {
    nullable: false
  })
  where!: IncrementWhereUniqueInput;
}
