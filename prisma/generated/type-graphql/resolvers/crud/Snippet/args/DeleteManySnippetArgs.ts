import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SnippetWhereInput } from "../../../inputs/SnippetWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySnippetArgs {
  @TypeGraphQL.Field(_type => SnippetWhereInput, {
    nullable: true
  })
  where?: SnippetWhereInput | undefined;
}
