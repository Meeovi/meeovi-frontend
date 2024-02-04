import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Snippet_setWhereInput } from "../../../inputs/Snippet_setWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySnippet_setArgs {
  @TypeGraphQL.Field(_type => Snippet_setWhereInput, {
    nullable: true
  })
  where?: Snippet_setWhereInput | undefined;
}
