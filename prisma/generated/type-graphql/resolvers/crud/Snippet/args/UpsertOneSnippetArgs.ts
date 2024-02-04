import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SnippetCreateInput } from "../../../inputs/SnippetCreateInput";
import { SnippetUpdateInput } from "../../../inputs/SnippetUpdateInput";
import { SnippetWhereUniqueInput } from "../../../inputs/SnippetWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneSnippetArgs {
  @TypeGraphQL.Field(_type => SnippetWhereUniqueInput, {
    nullable: false
  })
  where!: SnippetWhereUniqueInput;

  @TypeGraphQL.Field(_type => SnippetCreateInput, {
    nullable: false
  })
  create!: SnippetCreateInput;

  @TypeGraphQL.Field(_type => SnippetUpdateInput, {
    nullable: false
  })
  update!: SnippetUpdateInput;
}
