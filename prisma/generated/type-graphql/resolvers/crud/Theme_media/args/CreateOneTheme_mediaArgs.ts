import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Theme_mediaCreateInput } from "../../../inputs/Theme_mediaCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneTheme_mediaArgs {
  @TypeGraphQL.Field(_type => Theme_mediaCreateInput, {
    nullable: false
  })
  data!: Theme_mediaCreateInput;
}
