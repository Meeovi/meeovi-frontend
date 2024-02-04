import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Theme_mediaWhereUniqueInput } from "../../../inputs/Theme_mediaWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueTheme_mediaOrThrowArgs {
  @TypeGraphQL.Field(_type => Theme_mediaWhereUniqueInput, {
    nullable: false
  })
  where!: Theme_mediaWhereUniqueInput;
}
