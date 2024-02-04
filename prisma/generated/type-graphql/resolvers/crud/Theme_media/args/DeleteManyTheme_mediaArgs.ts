import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Theme_mediaWhereInput } from "../../../inputs/Theme_mediaWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyTheme_mediaArgs {
  @TypeGraphQL.Field(_type => Theme_mediaWhereInput, {
    nullable: true
  })
  where?: Theme_mediaWhereInput | undefined;
}
