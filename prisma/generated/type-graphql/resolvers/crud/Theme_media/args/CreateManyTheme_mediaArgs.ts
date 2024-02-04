import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Theme_mediaCreateManyInput } from "../../../inputs/Theme_mediaCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyTheme_mediaArgs {
  @TypeGraphQL.Field(_type => [Theme_mediaCreateManyInput], {
    nullable: false
  })
  data!: Theme_mediaCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
