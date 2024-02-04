import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Flow_sequenceWhereUniqueInput } from "../../../inputs/Flow_sequenceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueFlow_sequenceOrThrowArgs {
  @TypeGraphQL.Field(_type => Flow_sequenceWhereUniqueInput, {
    nullable: false
  })
  where!: Flow_sequenceWhereUniqueInput;
}
