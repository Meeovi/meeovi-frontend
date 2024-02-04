import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SnippetOrderByWithAggregationInput } from "../../../inputs/SnippetOrderByWithAggregationInput";
import { SnippetScalarWhereWithAggregatesInput } from "../../../inputs/SnippetScalarWhereWithAggregatesInput";
import { SnippetWhereInput } from "../../../inputs/SnippetWhereInput";
import { SnippetScalarFieldEnum } from "../../../../enums/SnippetScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySnippetArgs {
  @TypeGraphQL.Field(_type => SnippetWhereInput, {
    nullable: true
  })
  where?: SnippetWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SnippetOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: SnippetOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [SnippetScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "translation_key" | "value" | "author" | "snippet_set_id" | "custom_fields" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => SnippetScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: SnippetScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
