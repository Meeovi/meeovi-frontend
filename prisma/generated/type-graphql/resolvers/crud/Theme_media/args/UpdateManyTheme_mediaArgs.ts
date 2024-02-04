import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Theme_mediaUpdateManyMutationInput } from "../../../inputs/Theme_mediaUpdateManyMutationInput";
import { Theme_mediaWhereInput } from "../../../inputs/Theme_mediaWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTheme_mediaArgs {
  @TypeGraphQL.Field(_type => Theme_mediaUpdateManyMutationInput, {
    nullable: false
  })
  data!: Theme_mediaUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Theme_mediaWhereInput, {
    nullable: true
  })
  where?: Theme_mediaWhereInput | undefined;
}
