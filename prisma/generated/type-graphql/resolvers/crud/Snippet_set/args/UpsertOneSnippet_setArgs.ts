import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Snippet_setCreateInput } from "../../../inputs/Snippet_setCreateInput";
import { Snippet_setUpdateInput } from "../../../inputs/Snippet_setUpdateInput";
import { Snippet_setWhereUniqueInput } from "../../../inputs/Snippet_setWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneSnippet_setArgs {
  @TypeGraphQL.Field(_type => Snippet_setWhereUniqueInput, {
    nullable: false
  })
  where!: Snippet_setWhereUniqueInput;

  @TypeGraphQL.Field(_type => Snippet_setCreateInput, {
    nullable: false
  })
  create!: Snippet_setCreateInput;

  @TypeGraphQL.Field(_type => Snippet_setUpdateInput, {
    nullable: false
  })
  update!: Snippet_setUpdateInput;
}
