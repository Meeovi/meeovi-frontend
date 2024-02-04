import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SnippetWhereUniqueInput } from "../../../inputs/SnippetWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueSnippetOrThrowArgs {
  @TypeGraphQL.Field(_type => SnippetWhereUniqueInput, {
    nullable: false
  })
  where!: SnippetWhereUniqueInput;
}
