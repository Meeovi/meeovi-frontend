import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SnippetUpdateManyMutationInput } from "../../../inputs/SnippetUpdateManyMutationInput";
import { SnippetWhereInput } from "../../../inputs/SnippetWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySnippetArgs {
  @TypeGraphQL.Field(_type => SnippetUpdateManyMutationInput, {
    nullable: false
  })
  data!: SnippetUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => SnippetWhereInput, {
    nullable: true
  })
  where?: SnippetWhereInput | undefined;
}
