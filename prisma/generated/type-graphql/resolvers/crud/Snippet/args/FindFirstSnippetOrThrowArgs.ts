import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SnippetOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/SnippetOrderByWithRelationAndSearchRelevanceInput";
import { SnippetWhereInput } from "../../../inputs/SnippetWhereInput";
import { SnippetWhereUniqueInput } from "../../../inputs/SnippetWhereUniqueInput";
import { SnippetScalarFieldEnum } from "../../../../enums/SnippetScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstSnippetOrThrowArgs {
  @TypeGraphQL.Field(_type => SnippetWhereInput, {
    nullable: true
  })
  where?: SnippetWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SnippetOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: SnippetOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => SnippetWhereUniqueInput, {
    nullable: true
  })
  cursor?: SnippetWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [SnippetScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "translation_key" | "value" | "author" | "snippet_set_id" | "custom_fields" | "created_at" | "updated_at"> | undefined;
}
