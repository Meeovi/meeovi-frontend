import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SnippetUpdateInput } from "../../../inputs/SnippetUpdateInput";
import { SnippetWhereUniqueInput } from "../../../inputs/SnippetWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneSnippetArgs {
  @TypeGraphQL.Field(_type => SnippetUpdateInput, {
    nullable: false
  })
  data!: SnippetUpdateInput;

  @TypeGraphQL.Field(_type => SnippetWhereUniqueInput, {
    nullable: false
  })
  where!: SnippetWhereUniqueInput;
}
