import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Snippet_setUpdateManyMutationInput } from "../../../inputs/Snippet_setUpdateManyMutationInput";
import { Snippet_setWhereInput } from "../../../inputs/Snippet_setWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySnippet_setArgs {
  @TypeGraphQL.Field(_type => Snippet_setUpdateManyMutationInput, {
    nullable: false
  })
  data!: Snippet_setUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Snippet_setWhereInput, {
    nullable: true
  })
  where?: Snippet_setWhereInput | undefined;
}
