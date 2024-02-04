import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SnippetCreateInput } from "../../../inputs/SnippetCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneSnippetArgs {
  @TypeGraphQL.Field(_type => SnippetCreateInput, {
    nullable: false
  })
  data!: SnippetCreateInput;
}
