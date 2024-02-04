import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Snippet_setWhereUniqueInput } from "../../../inputs/Snippet_setWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueSnippet_setArgs {
  @TypeGraphQL.Field(_type => Snippet_setWhereUniqueInput, {
    nullable: false
  })
  where!: Snippet_setWhereUniqueInput;
}
