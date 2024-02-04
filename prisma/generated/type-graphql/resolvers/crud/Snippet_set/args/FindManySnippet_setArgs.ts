import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Snippet_setOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Snippet_setOrderByWithRelationAndSearchRelevanceInput";
import { Snippet_setWhereInput } from "../../../inputs/Snippet_setWhereInput";
import { Snippet_setWhereUniqueInput } from "../../../inputs/Snippet_setWhereUniqueInput";
import { Snippet_setScalarFieldEnum } from "../../../../enums/Snippet_setScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManySnippet_setArgs {
  @TypeGraphQL.Field(_type => Snippet_setWhereInput, {
    nullable: true
  })
  where?: Snippet_setWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Snippet_setOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Snippet_setOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Snippet_setWhereUniqueInput, {
    nullable: true
  })
  cursor?: Snippet_setWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Snippet_setScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "base_file" | "iso" | "custom_fields" | "created_at" | "updated_at"> | undefined;
}
