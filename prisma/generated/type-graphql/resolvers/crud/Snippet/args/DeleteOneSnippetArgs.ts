import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SnippetWhereUniqueInput } from "../../../inputs/SnippetWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneSnippetArgs {
  @TypeGraphQL.Field(_type => SnippetWhereUniqueInput, {
    nullable: false
  })
  where!: SnippetWhereUniqueInput;
}
