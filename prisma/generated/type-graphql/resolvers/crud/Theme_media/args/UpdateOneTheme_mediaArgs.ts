import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Theme_mediaUpdateInput } from "../../../inputs/Theme_mediaUpdateInput";
import { Theme_mediaWhereUniqueInput } from "../../../inputs/Theme_mediaWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneTheme_mediaArgs {
  @TypeGraphQL.Field(_type => Theme_mediaUpdateInput, {
    nullable: false
  })
  data!: Theme_mediaUpdateInput;

  @TypeGraphQL.Field(_type => Theme_mediaWhereUniqueInput, {
    nullable: false
  })
  where!: Theme_mediaWhereUniqueInput;
}
