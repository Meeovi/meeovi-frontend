import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Theme_mediaCreateInput } from "../../../inputs/Theme_mediaCreateInput";
import { Theme_mediaUpdateInput } from "../../../inputs/Theme_mediaUpdateInput";
import { Theme_mediaWhereUniqueInput } from "../../../inputs/Theme_mediaWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneTheme_mediaArgs {
  @TypeGraphQL.Field(_type => Theme_mediaWhereUniqueInput, {
    nullable: false
  })
  where!: Theme_mediaWhereUniqueInput;

  @TypeGraphQL.Field(_type => Theme_mediaCreateInput, {
    nullable: false
  })
  create!: Theme_mediaCreateInput;

  @TypeGraphQL.Field(_type => Theme_mediaUpdateInput, {
    nullable: false
  })
  update!: Theme_mediaUpdateInput;
}
