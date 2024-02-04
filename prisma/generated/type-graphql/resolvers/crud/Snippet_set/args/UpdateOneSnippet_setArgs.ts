import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Snippet_setUpdateInput } from "../../../inputs/Snippet_setUpdateInput";
import { Snippet_setWhereUniqueInput } from "../../../inputs/Snippet_setWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneSnippet_setArgs {
  @TypeGraphQL.Field(_type => Snippet_setUpdateInput, {
    nullable: false
  })
  data!: Snippet_setUpdateInput;

  @TypeGraphQL.Field(_type => Snippet_setWhereUniqueInput, {
    nullable: false
  })
  where!: Snippet_setWhereUniqueInput;
}
