import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Snippet_setCreateInput } from "../../../inputs/Snippet_setCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneSnippet_setArgs {
  @TypeGraphQL.Field(_type => Snippet_setCreateInput, {
    nullable: false
  })
  data!: Snippet_setCreateInput;
}
